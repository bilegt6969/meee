"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import "tailwindcss/tailwind.css";
import { MapPinIcon } from "@heroicons/react/24/solid";

const CarouselComponent = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: "Purpose of the Project",
      description:
        "The plant can be built on site as a turnkey delivery in which Valmet takes customer specifications regarding layout into consideration. Alternatively, we can deliver the process equipment to your facility.",
      company: "Gatsuurt LLC",
      location: "Umnugovi Province in southern Mongolia.",
    },
    {
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "Fulfillment",
      description:
        "The plant can be built on site as a turnkey delivery in which Valmet takes customer specifications regarding layout into consideration.",
      company: "Gatsuurt LLC",
      location: "Umnugovi Province in southern Mongolia.",
    },
    {
      img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      title: "Solution based on Technologies",
      description:
        "We provide advanced technologies that ensure sustainable and efficient energy delivery tailored to your needs.",
      company: "Gatsuurt LLC",
      location: "Umnugovi Province in southern Mongolia.",
    },
  ];

  return (
    <div className="w-full mx-auto px-6 lg:px-0 lg:w-11/12 py-8">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={false}
        showThumbs={true}
        className="shadow-xl rounded-xl"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ left: 15 }}
              className="absolute top-[17rem] z-10 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.25 19.25L8 12l7.25-7.25"
                />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ right: 15 }}
              className="absolute top-[17rem] z-10 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.75 4.75L16 12l-7.25 7.25"
                />
              </svg>
            </button>
          )
        }
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-stretch h-[500px] lg:h-[600px]"
          >
            {/* Image Container */}
            <div className="w-full lg:w-3/5 h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="h-full w-full object-cover rounded-3xl"
              />
            </div>

            {/* Text Container */}
            <div className="w-full lg:w-2/5 bg-white p-6 flex flex-col justify-center rounded-r-lg text-left space-y-[1rem]">
              <div>
                <h2 className="text-4xl font-bold text-blue-700 mb-2">
                  {slides[0].company}
                </h2>
                <p className="text-gray-600 font-thin flex items-center">
                  <MapPinIcon className="h-4 w-4 text-blue-500" />{" "}
                  {slide.location}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {slides[1].title}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {slides[1].title}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {slides[1].title}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
