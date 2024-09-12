'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Swiper as SwiperClass } from 'swiper';
import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import '../../app/globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function NewsCarousel() {
  // Define a type for your projects
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  descriptionUnderImage: string;
}


// Add type annotation for `hoveredItem`
const [hoveredItem, setHoveredItem] = useState<Project | null>(null);
const swiperRef = useRef<SwiperClass | null>(null);



  const news = [
    {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    },
    {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, 
    {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, {
      image: '/img-111.jpg',
      date: '2024/07/18',
      title: 'Synergistic systemic monitoring',
      description: 'The plant can be built on site as a turnkey delivery...',
      tags: ['Heating Plant', 'Construction', 'Gold'],
    }, 
    // Additional items...
  ];

  return (
    <div className="relative mt-16 w-full max-w-[90rem] mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">NEWS</h2>
      <Swiper
        onSwiper={(swiper: any) => { swiperRef.current = swiper; }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="swiper-container"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:rounded-2xl hover:shadow-lg transition-transform duration-300 ease-out">
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15.75a6 6 0 117.5-7.5M13.5 7.5h.008v.008H13.5V7.5z"
                    />
                  </svg>
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeftIcon className='h-6 w-6' />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRightIcon className='h-6 w-6' />
      </button>
    </div>
  );

}
