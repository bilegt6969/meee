"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRight } from "lucide-react";
import "./style.css";
import { IArticle } from "@/lib/kb";
import { IArticle2 } from "@/lib/kb2";
import Cookies from 'js-cookie'; // Import js-cookie

interface TabComponentProps {
  ServiceArticle?: IArticle[];
  ProjectsArticle?: IArticle2[];
}

const TabComponent = ({ ServiceArticle, ProjectsArticle }: TabComponentProps) => {
  const currentLanguage = Cookies.get("language") || "MNG"; // Default to "MNG"
  const [activeTab, setActiveTab] = useState("service");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Read the active tab from cookies on component mount
  useEffect(() => {
    const savedTab = Cookies.get("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save the active tab to cookies whenever it changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    Cookies.set("activeTab", tab); // Save the active tab in cookies
  };

  const article = activeTab === "service" ? ServiceArticle : ProjectsArticle;
  const ImageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key=" + article?.[currentIndex]?.image?.url;

  return (
    <div className="relative flex justify-center items-center bg-[#f0f0f0] mt-16 px-1 sm:px-6 md:px-12 lg:px-18 xl:px-24">
      <div className="w-full justify-between">
        {/* Tab Header */}
        <div className="flex flex-row items-end">
          <div className="flex items-end">
            <button
              onClick={() => handleTabChange("service")}
              className={`flex-grow ${currentLanguage === "MNG" ? "px-3 py-4 Esm:px-2 EEsm:text-base Esm:py-4 Esm:text-lg sm:text-2xl Osm:py-6 Osm:px-4 Osm:text-xl" : "px-3 py-4 Esm:px-4 Esm:py-6  Esm:text-xl sm:text-2xl "}  text-base font-extrabold rounded-t-xl transition-colors duration-300 bg-white text-blue-700`}
              style={{
                borderBottomRightRadius: activeTab === "service" ? "0" : "1rem",
              }}
            >
            {currentLanguage === "MNG" ? "ҮЙЛЧИЛГЭЭ" : "SERVICE"}

            </button>
            <div className="top-0 flex">
              <div
                className={`block ${currentLanguage === "MNG" ? "tab1" : "tab"} ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
              <div
                className={`block ${currentLanguage === "MNG" ? "tab4" : "tab2"} ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
              <div
                className={`block ${currentLanguage === "MNG" ? "tab5" : "tab3"} ${activeTab === "projects" ? "text-[#5778cd]" : "text-white"}`}
              ></div>
            </div>

            <button
              onClick={() => handleTabChange("projects")}
              className={` ${currentLanguage === "MNG" ? "ml-[-2.5rem] EEsm:ml-[-2.5rem] qsm:ml-[-3.9rem] Esm:ml-[-3.9rem] EEsm:text-base sm:ml-[-3.9rem] px-3 py-4 Esm:px-2 Esm:py-4 text-base Esm:text-lg Osm:py-6 Osm:px-4 Osm:text-xl sm:text-2xl" : "ml-[-2.5rem] EEsm:ml-[-4rem] px-3 py-4 Esm:px-4 Esm:py-6 text-base Esm:text-xl sm:text-2xl"}  flex-grow  font-extrabold rounded-t-xl transition-colors duration-300 bg-[#5778cd] text-white`}
              style={{
                borderBottomLeftRadius: activeTab === "projects" ? "0" : "1rem",
              }}
            >
              {currentLanguage === "MNG" ? "ОНЦЛОХ ТӨСЛҮҮД" : "FEATURED PROJECTS"}
              
            </button>
          </div>
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
                loading="lazy"
                alt={article?.[currentIndex]?.title || 'Featured project image'}
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="rounded-2xl mb-4"
              />
              <div
                className={`mt-4 ${activeTab === "projects" ? "text-white" : "text-gray-600"}`}
                dangerouslySetInnerHTML={{ __html: article?.[currentIndex]?.content || '' }}
              />
              
              <button
                className={`mt-4 px-4 py-2 rounded-lg font-semibold items-center flex ${
                  activeTab === "projects"
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                <p>{currentLanguage === "MNG" ? "Үзэх" : "See more"}</p>
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[60%] pl-0 lg:pl-8">
              <ul className="space-y-2">
                {article?.map((item, index) => (
                  <li key={item._id}>
                    <div
                      onClick={() => setCurrentIndex(index)}
                      className={`py-4 flex justify-between items-center hover:text-blue-700 hover:bg-gray-200 p-4 transition-all ease-in-out duration-200 rounded-xl
                        ${currentIndex === index ? "text-blue-800 bg-white" : "text-black"} 
                        ${activeTab === "projects" ? (currentIndex === index ? "text-blue-600 bg-white border-gray-100" : "text-white") : ""} 
                        ${index === 0 ? "rounded-t-xl" : ""}
                        ${index === article.length - 1 ? "rounded-b-xl" : ""}`}
                    >
                      <h1 className="text-lg">{item.title}</h1>
                      <div
                        className={`border p-2 rounded-lg ${currentIndex === index ? "border-white bg-blue-700 text-white" : ""} ${activeTab === "projects" ? "border-white" : "border-black"}`}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div
                      className={`w-full h-[1px] ${activeTab === "projects" ? "bg-gray-400" : "bg-gray-300"}`}
                    ></div>
                  </li>
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
