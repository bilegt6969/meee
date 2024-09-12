'use client';

import React, { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Define a type for the project
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  descriptionUnderImage: string;
}

const FeaturedProjects = () => {
  const [isFeatured, setIsFeatured] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null); // State to track hovered item

  // Sample data for featured projects
  const featuredProjects = [
    {
      title: "Heating Plant",
      description: "Efficient and reliable heating solutions for industrial applications.",
      imageUrl: "/heating-plant-image.png",
      descriptionUnderImage:
        "Heating Plant: Providing sustainable and reliable heating solutions for industrial applications.",
    },
    {
      title: "Construction",
      description: "Comprehensive construction services from planning to execution.",
      imageUrl: "/construction-image.jpg",
      descriptionUnderImage:
        "Construction: Building structures with a focus on quality and efficiency.",
    },
    {
      title: "Engineering and Technical Service",
      description: "Expert engineering support and technical services to ensure project success.",
      imageUrl: "/engineering-image.jpg",
      descriptionUnderImage:
        "Engineering Services: Delivering innovative engineering solutions for complex projects.",
    },
    {
      title: "Mine Contracting",
      description: "Professional mine contracting services tailored to your needs.",
      imageUrl: "/mine-contracting-image.jpg",
      descriptionUnderImage:
        "Mine Contracting: Offering reliable and efficient mining services.",
    },
    {
      title: "Safety and Training",
      description: "Comprehensive safety training programs to maintain high safety standards.",
      imageUrl: "/safety-training-image.jpg",
      descriptionUnderImage:
        "Safety and Training: Ensuring workplace safety with top-tier training programs.",
    },
  ];

  // Sample data for services
  const services = [
    {
      title: "Safety and Training",
      description: "Comprehensive safety training programs to ensure workplace safety.",
      imageUrl: "/TavanTolgoi.png",
      descriptionUnderImage:
        "Safety and Training: Empowering teams with safety knowledge and skills.",
    },
    {
      title: "Project Management",
      description: "Effective management of all project phases to ensure timely delivery.",
      imageUrl: "/Oyutolgoi.png",
      descriptionUnderImage:
        "Project Management: Overseeing projects from start to finish for timely execution.",
    },
    {
      title: "Engineering Services",
      description: "Technical engineering support and innovative solutions for complex challenges.",
      imageUrl: "/NariinSukhait.png",
      descriptionUnderImage:
        "Engineering Services: Providing expert technical support for challenging projects.",
    },
    {
      title: "Mine Contracting",
      description: "Reliable mine contracting services with a focus on efficiency and safety.",
      imageUrl: "/Baganuur.png",
      descriptionUnderImage:
        "Mine Contracting: Ensuring the highest standards in mining operations.",
    },
    {
      title: "Maintenance",
      description: "Regular maintenance services to ensure optimal performance of your equipment.",
      imageUrl: "/Gatsuurt.png",
      descriptionUnderImage:
        "Maintenance: Keeping equipment and systems running at peak efficiency.",
    },
  ];

  // Sample data for services


  // Determine the image and description to display based on hover state
  const displayedImage = hoveredItem?.imageUrl || "/img-111.jpg";
  const displayedDescription = hoveredItem?.descriptionUnderImage || "Hover over a project to learn more.";

  return (
    <div className="shadow-md w-full max-w-[90rem] mx-auto p-6">
      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        <button
          onClick={() => setIsFeatured(true)}
          className={`uppercase px-4 py-2 text-lg md:text-2xl font-bold ${
            isFeatured
              ? "text-blue-500 border-b-4 border-blue-500"
              : "text-gray-700 hover:text-blue-500"
          } transition-colors duration-300`}
        >
          Featured Projects
        </button>
        <button
          onClick={() => setIsFeatured(false)}
          className={`uppercase px-4 py-2 text-lg md:text-2xl font-bold ${
            !isFeatured
              ? "text-blue-500 border-b-4 border-blue-500"
              : "text-gray-700 hover:text-blue-500"
          } transition-colors duration-300`}
        >
          Service
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <Image
            className="rounded-2xl"
            src={displayedImage}
            width={600}
            height={400}
            alt={isFeatured ? "Featured Projects Image" : "Service Image"}
            objectFit="cover"
          />
          <p className="text-gray-600 text-center mt-4 text-sm md:text-base lg:text-lg">
            {displayedDescription}
          </p>
        </div>

        {/* List Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          {(isFeatured ? featuredProjects : services).map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 hover:text-blue-500 transition-colors duration-300"
              onMouseEnter={() => setHoveredItem(item)} // Set hovered item on mouse enter
              onMouseLeave={() => setHoveredItem(null)} // Reset hovered item on mouse leave
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
              <ArrowRightCircleIcon className="h-8 w-8 text-black mt-2 sm:mt-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
