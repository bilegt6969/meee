import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Title from "./title";
import "./style.css";
import { getKbArticlesByCode } from "@/lib/kb";
export const revalidate = 1




async function TabComponent({ isService }: { isService: boolean }){
    const { article } = await getKbArticlesByCode(isService ? "Service" : "Projects");
  
    return (
      <div className="relative flex justify-center items-center bg-[#f0f0f0] mt-16 px-1 sm:px-6 md:px-12 lg:px-18 xl:px-36">
        <div className="w-full justify-between">
          {/* Tab Header */}
          <Title />
  
          <div className="bg-white rounded-2xl rounded-tl-none">
            <div
              className={`flex flex-col lg:flex-row rounded-2xl w-full ${
                isService ? "bg-white" : "custom-gradient-news"
              } px-8 py-14 shadow-lg`}
            >
              {/* Left Section */}
              <div className="flex-shrink-0 w-full lg:w-[40%] mb-4 lg:mb-0">
                {/* <Image
                  src={articles[0].image?.url}
                  alt='f'
                  width={400} // Image width in pixels
                  height={500} // Image height in pixels
                  layout="responsive" // Maintains aspect ratio, and the image will cover its container
                  objectFit="cover" // Ensures the image covers the container
                  className="rounded-2xl mb-4"
                /> */}
                <p
                  className={`mt-4 ${!isService ? "text-white" : "text-gray-600"}`}
                >
                </p>
                <button
                  className={`mt-4 px-4 py-2 rounded-lg font-semibold items-center flex ${
                    !isService
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
                  hello
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default TabComponent;