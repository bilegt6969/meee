"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";
// import Swiper and modules styles
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import Cookies from 'js-cookie'; // Import js-cookie

interface Article {
  _id: string;
  title: string;
  image: {
    url: string;
  };
  createdDate?: string;
  summary?: string;  // Add this line
}

interface NewsCarouselChildProps {
  articles: Article[];
}

export const NewsCarouselChild: FC<NewsCarouselChildProps> = ({ articles }) => {
  // Ref to control Swiper navigation
  const swiperRef = useRef<SwiperClass | null>(null);
  const currentLanguage = Cookies.get("language") || "MNG"; // Default to "MNG"
  const [slideHeight, setSlideHeight] = useState<number | null>(null);

  useEffect(() => {
    // Function to set the height of the slides based on the tallest slide
    const setEqualHeight = () => {
      const slides = document.querySelectorAll('.swiper-slide');
      let maxHeight = 0;

      slides.forEach(slide => {
        const height = slide.getBoundingClientRect().height;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      setSlideHeight(maxHeight);
    };

    // Set heights after the component mounts
    setEqualHeight();

    // Optionally, you can add a resize event listener to adjust heights on window resize
    window.addEventListener('resize', setEqualHeight);
    return () => {
      window.removeEventListener('resize', setEqualHeight);
    };
  }, [articles]); // Re-run when articles change

  return (
    <div className="relative mt-16 w-full mx-auto px-2 sm:px-6 md:px-12 lg:px-12 xl:px-24 md:pb-16">
      <div className="justify-between w-full flex">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-left justify-start">
          {currentLanguage === "MNG" ? "Мэдээ":"News"}
        </h2>

        <div className="justify-end space-x-2">
          <button
            className="relative left-0 top-1 transform -translate-y-1/2 z-10 bg-white border border-blue-800 text-blue-700 p-2 rounded-lg shadow-lg hover:bg-gray-300 transition-colors duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            className="relative right-0 top-1 transform -translate-y-1/2 z-10 bg-white border border-blue-800 text-blue-700 p-2 rounded-lg shadow-lg hover:bg-gray-300 transition-colors duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1567: { slidesPerView: 4 },
        }}
        loop={true}
        className="swiper-container"
      >
        {articles.map((item, index) => {
          const imageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key=" + item.image.url;
          const formattedDate = item.createdDate ? 
            new Date(item.createdDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              timeZone: 'UTC'
            }).replace(/\//g, '/') : '';

          return (
            <SwiperSlide key={index} style={{ height: slideHeight ? `${slideHeight}px` : 'auto' }}>
              <Link key={item._id} href={`/Home/${item._id}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-transform duration-300 ease-out cursor-pointer hover:scale-95 h-full">
                  <div className="relative w-full aspect-[3/3]">
                    <Image
                      src={imageUrl}
                      loading="lazy"
                      alt={item.title}
                      fill
                      className="object-cover "
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center text-gray-500 text-sm mb-2 gap-2 mt-1">
                      <CalendarIcon className="h-5 w-5" />
                      {formattedDate}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item?.summary}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
