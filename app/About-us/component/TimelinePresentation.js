import React from 'react';
import Image from "next/legacy/image";
import { getKbArticlesByCode } from "@/lib/kb";

const TimelinePresentation = async ({ timelineRef, scrollPercentage }) => {
  const {article} = await getKbArticlesByCode("About-us/projects");
  
  // Sort articles by year in ascending order
  const sortedArticles = [...article].sort((a, b) => {
    const yearA = Number(a.title);
    const yearB = Number(b.title);
    return yearA - yearB;
  });

  return (
    <div className="overflow-x-auto py-8 text-black scrollbar-hide" ref={timelineRef}>
      <div className="md:ml-36">
        <div className="relative flex space-x-8 px-2 md:px-6" style={{ width: 'max-content' }}>
          {sortedArticles.map((event, index) => {
            const lineWidth = 500;
            const totalTimelineWidth = sortedArticles.length * lineWidth;
            const lineScroll = scrollPercentage * totalTimelineWidth;
            const Year = Number(event.title)
            const ImageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key="+event.image?.url
            const currentLineStart = index * lineWidth;
            const lineColorWidth = Math.max(0, Math.min(lineScroll - currentLineStart, lineWidth));

            return (
              <div key={index} className="relative flex flex-col items-center min-w-[220px] md:min-w-[250px]">
                <div className={`relative ${index % 2 === 0 ? 'mb-[0rem]' : 'mt-[28rem]'} w-[220px] md:w-[250px] text-left`}>
                  <span className="text-center text-xl md:text-2xl font-extrabold mb-3">{Year}</span>
                  <h1 className="text-lg md:text-xl font-extrabold mb-3 mt-2">{event.summary}</h1>
                  <div className="text-sm md:text-md" dangerouslySetInnerHTML={{ __html: event.content }} />
                  <Image 
                    src={ImageUrl} 
                    alt={event._id} 
                    height={180}
                    width={270}
                    className="w-full h-[120px] md:h-[150px] object-cover rounded-lg mb-3 mt-[1rem]"
                  />
                </div>

                <div className="absolute flex top-[45%] left-[0%] items-center transform -translate-y-1/2 w-[500px]">
                  <div className="w-4 h-4 bg-blue-800 p-2 border-8 rounded-full border-gray-200 z-10"></div>
                  
                  <div className="h-[6px] w-full bg-gray-200 relative">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-800"
                      style={{
                        width: `${lineColorWidth}px`,
                        transition: 'width 0.1s ease-out',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelinePresentation;