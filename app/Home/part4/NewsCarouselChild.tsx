"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import React, { useRef } from "react";
import Image from "next/image";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";

interface Article {
  _id: string;
  title: string;
  image: {
    url: string;
  };
}

interface NewsCarouselChildProps {
  articles: Article[];
}

export const NewsCarouselChild: FC<NewsCarouselChildProps> = ({ articles }) => {
  // Ref to control Swiper navigation
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative mt-16 w-full mx-auto px-2 sm:px-6 md:px-12 lg:px-12 xl:px-36 md:pb-16">
      <div className="justify-between w-full flex">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-left justify-start">
          NEWS
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
          640: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1567: { slidesPerView: 3 },
        }}
        loop={true}
        className="swiper-container"
      >
        {articles.map((item, index) => {
          const imageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key=" + item.image.url;

          return (
            <SwiperSlide key={index}>
              <Link key={item._id} href={`/Home/${item._id}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-transform duration-300 ease-out cursor-pointer hover:scale-95">
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="h-auto w-full object-cover hover:scale-105 transition-transform duration-300 ease-out"
                    layout="responsive"
                  />
                  <div className="p-4">
                    <div className="flex items-center text-gray-500 text-sm mb-2 gap-2 mt-1">
                      <CalendarIcon className="h-5 w-5" />
                      {item._id}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item._id}
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
