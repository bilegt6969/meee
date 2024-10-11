"use client";
import { act, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRight } from "lucide-react";
import { FileShapedNews } from "./data";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("service");

  const currentTabData =
    activeTab === "service"
      ? FileShapedNews.services
      : FileShapedNews.featuredProjects;
  const [currentTitle, setCurrentTitle] = useState(0);

  return (
    <div className="relative flex justify-center items-center bg-[#f0f0f0] mt-16 px-1 sm:px-6 md:px-12 lg:px-18 xl:px-36">
      <div className="w-full justify-between">
        {/* Tab Header */}
        <div className="flex flex-row items-end">
          <button
            onClick={() => setActiveTab("service")}
            className={`px-6 py-6 text-2xl font-extrabold rounded-t-xl transition-colors duration-300 bg-white text-blue-700`}
            style={{
              borderBottomRightRadius: activeTab === "service" ? "0" : "1rem",
            }}
          >
            SERVICE
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-6 text-2xl font-extrabold rounded-t-xl transition-colors duration-300 bg-[#5778cd] text-white`}
            style={{
              borderBottomLeftRadius: activeTab === "projects" ? "0" : "1rem",
            }}
          >
            FEATURED PROJECTS
          </button>

          {/* Tab elements that are conditionally rendered */}
          <div
            className={`hidden sm:block tab ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
          ></div>
          <div
            className={`hidden sm:block tab2 ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
          ></div>
          <div
            className={`hidden sm:block tab3 ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
          ></div>
        </div>

        <div className="bg-white rounded-2xl rounded-tl-none">
          <div
            className={`flex flex-col lg:flex-row rounded-2xl ${
              activeTab === "service" ? "bg-white" : "custom-gradient-news"
            } p-8 shadow-lg`}
          >
            {/* Left Section */}
            <div className="flex-shrink-0 w-full lg:w-2/5 mb-4 lg:mb-0">
              <Image
                width={500}
                height={500}
                src={currentTabData[currentTitle].imageUrl} // Use the first item's image
                alt={currentTabData[currentTitle].title}
                className="rounded-2xl mb-4"
              />
              <p
                className={`mt-4 ${activeTab === "projects" ? "text-white" : "text-gray-600"}`}
              >
                {currentTabData[currentTitle].descriptionUnderImage}
              </p>
              <button
                className={`mt-4 px-4 py-2 rounded-lg font-semibold items-center flex ${
                  activeTab === "projects"
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                <p>See more</p>
                
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-3/5 pl-0 lg:pl-8">
              <ul className="space-y-2">
                {currentTabData.map((item, index) => (
                  <>
                    <li
                      key={index}
                      onClick={() => setCurrentTitle(index)}
                      className={`py-4 flex justify-between items-center hover:text-blue-700 hover:bg-gray-200 p-4 transition-all ease-in-out duration-200 rounded-xl
          ${currentTitle === index ? "text-blue-800 bg-white" : "text-black"} 
          ${activeTab === "projects" ? (currentTitle === index ? "text-blue-600 bg-white border-gray-100" : "text-white") : ""} 
          ${index === 0 ? "rounded-t-xl" : ""}  // Only round the top of the first item
          ${index === currentTabData.length - 1 ? "rounded-b-xl" : ""}  // Only round the bottom of the last item
        `}
                    >
                      <h1 className="text-lg">{item.title}</h1>
                      <div
                        className={`border p-2 rounded-lg ${currentTitle === index ? "border-white bg-blue-700 text-white" : ""} ${activeTab === "projects" ? "border-white" : "border-black"}`}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </li>
                    <div className={`w-full h-[1px] ${activeTab === "projects" ? "bg-gray-400" : "bg-gray-300"}` }></div>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
