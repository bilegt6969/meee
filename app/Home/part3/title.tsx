"use client";
import React from 'react'
import { useState } from "react";
import TabComponent from './body';

 function title() {


 const [activeTab, setActiveTab] = useState("service");


  
  return (
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
    <TabComponent isService={activeTab=== "service"} />
    {/* Tab elements that are conditionally rendered */}
  </div>
  )
}

export default title
