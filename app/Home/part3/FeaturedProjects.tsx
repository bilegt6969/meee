"use client";
import { act, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRight } from "lucide-react";
import { FileShapedNews } from "./data";
import "./style.css";
import { IArticle } from "@/lib/kb";
import { IArticle2 } from "@/lib/kb2";

interface TabComponentProps {
  ServiceArticle?: IArticle[];
  ProjectsArticle?: IArticle2[];
}

const TabComponent = ({ServiceArticle, ProjectsArticle}: TabComponentProps) => {
  const [activeTab, setActiveTab] = useState("service");
  const [currentIndex, setCurrentIndex] = useState(0);

  const article = activeTab === "service" ? ServiceArticle : ProjectsArticle;

  console.log('ff' + (article?.length ?? 0));

  const ImageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key="+article?.[currentIndex]?.image?.url

  return (
    <div className="relative flex justify-center items-center bg-[#f0f0f0] mt-16 px-1 sm:px-6 md:px-12 lg:px-18 xl:px-36">
      <div className="w-full justify-between">
        {/* Tab Header */}
        <div className="w-full bg-black h-20" onClick={()=>{console.log(article)}}>test</div>
        <div className="flex flex-row items-end">
          <div className="flex items-end">
            <button
              onClick={() => setActiveTab("service")}
              className={`flex-grow px-3 py-4 Esm:px-4 Esm:py-6 text-base Esm:text-xl sm:text-2xl font-extrabold rounded-t-xl transition-colors duration-300 bg-white text-blue-700`}
              style={{
                borderBottomRightRadius: activeTab === "service" ? "0" : "1rem",
              }}
            >
              SERVICE
            </button>
            <div className="top-0 flex">
              <div
                className={`block tab ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
              <div
                className={`block tab2 ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
              <div
                className={`block tab3 ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
            </div>

            <button
              onClick={() => setActiveTab("projects")}
              className={`ml-[-2.5rem] EEsm:ml-[-4rem] flex-grow px-3 py-4 Esm:px-4 Esm:py-6 text-base Esm:text-xl sm:text-2xl font-extrabold rounded-t-xl transition-colors duration-300 bg-[#5778cd] text-white`}
              style={{
                borderBottomLeftRadius: activeTab === "projects" ? "0" : "1rem",
              }}
            >
              FEATURED PROJECTS
            </button>
          </div>

          {/* Tab elements that are conditionally rendered */}
        </div>

        <div className="bg-white rounded-2xl rounded-tl-none">
          <div
            className={`flex flex-col lg:flex-row rounded-2xl w-full ${
              activeTab === "service" ? "bg-white" : "custom-gradient-news"
            } px-8 py-14 shadow-lg`}
          >
            {/* Left Section */}
            <div className="flex-shrink-0 w-full lg:w-[40%] mb-4 lg:mb-0">
              <Image
                src={ImageUrl}
                alt={`Image for ${article?.[currentIndex]?.title ?? 'article'}`}
                width={400} // Image width in pixels
                height={500} // Image height in pixels
                layout="responsive" // Maintains aspect ratio, and the image will cover its container
                objectFit="cover" // Ensures the image covers the container
                className="rounded-2xl mb-4"
              />
              <p
                className={`mt-4 ${activeTab === "projects" ? "text-white" : "text-gray-600"}`}
              >
                {article?.[currentIndex]?.content}
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
            <div className="w-full lg:w-[60%] pl-0 lg:pl-8">
              <ul className="space-y-2">
                {article?.map((item, index) => (
                  <>
                    <li
                      key={article?.[index]?._id}
                      onClick={() => setCurrentIndex(index)}
                      className={`py-4 flex justify-between items-center hover:text-blue-700 hover:bg-gray-200 p-4 transition-all ease-in-out duration-200 rounded-xl
          ${currentIndex === index ? "text-blue-800 bg-white" : "text-black"} 
          ${activeTab === "projects" ? (currentIndex === index ? "text-blue-600 bg-white border-gray-100" : "text-white") : ""} 
          ${index === 0 ? "rounded-t-xl" : ""}  // Only round the top of the first item
          ${index === article.length - 1 ? "rounded-b-xl" : ""}  // Only round the bottom of the last item
        `}
                    >
                      <h1 className="text-lg">{item.title}</h1>
                      <div
                        className={`border p-2 rounded-lg ${currentIndex === index ? "border-white bg-blue-700 text-white" : ""} ${activeTab === "projects" ? "border-white" : "border-black"}`}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </li>
                    <div
                      className={`w-full h-[1px] ${activeTab === "projects" ? "bg-gray-400" : "bg-gray-300"}`}
                    ></div>
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
