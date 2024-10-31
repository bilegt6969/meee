import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Timeline from "./component/TimelinePresentation";
import { ChevronRightIcon, CircleCheck } from "lucide-react";
import { getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";

// Add interface for the form item
interface FormItem {
  brandId: string;
  // Add other properties if they exist
}

async function Page() {
  const teamsdata = [
    { img: "/person1.png", name: "TUMEN-AYUSH Jamiyansuren", position: "Only Shareholder" },
    { img: "/person2.png", name: "GANKHULUG Enkhbold", position: "Executive Director" },
    { img: "/person3.png", name: "ZULBAYAR Bold", position: "Advisor" },
  ];
  const{article} =await getKbArticlesByCode("about_us")
  const{article2} =await getKbArticlesByCode2("about-us/owners")
  const homeContent = article.filter((item) => item.code === "about-us_Heading")[0];
  const AboutPage = article.filter((item) => item.code === "Part_2")[0];
  


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          className="absolute -top-[4rem] left-0 w-full h-full object-cover brightness-50"
          height={900}
          width={1600}
          src="/bg.jpg"
          alt="Background"
        />

<div className="absolute top-1/3 left-5 md:left-[10%] text-left">
          <div className="text-6xl md:text-6xl lg:text-8xl font-extrabold mb-4 tracking-tight uppercase text-white" dangerouslySetInnerHTML={{ __html: homeContent?.summary || '' }} />
          <div className="font-light max-w-[85%] md:max-w-[70%] lg:max-w-[50%] text-sm md:text-lg lg:text-xl text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: homeContent?.content || '' }} />

          <Button className="bg-blue-800 mt-4 flex items-center">
            Write us <ChevronRightIcon className="ml-2" />
          </Button>
        </div>

        {/* Adjusted Container for the Info Box */}
        <div className="absolute flex flex-col justify-center items-center -bottom-7 right-5 md:right-[10%] bg-white rounded-3xl p-6 md:p-8 text-blue-700 shadow-lg w-[90%] md:w-auto z-10">
          <ul className="text-sm md:text-lg space-y-4">
            {homeContent?.forms.map((item: FormItem, index: number) => (
              <li key={index} className="flex items-center">
                <CircleCheck className="mr-2 md:mr-4" aria-label="Quality Control Icon" />
                <span className="font-medium">{item.brandId}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* About Section */}
      <section className="mt-[-4rem] bg-blue-800 text-white flex flex-col md:flex-row py-[8rem] px-4 sm:px-6 md:px-12 lg:px-44 justify-between">
        <div className="flex-1 flex flex-col md:justify-center justify-start items-start">
          <div className="text-6xl md:text-7xl lg:text-8xl text-gray-400 font-extrabold" dangerouslySetInnerHTML={{ __html: AboutPage?.title || '' }} />
          <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold" dangerouslySetInnerHTML={{ __html: AboutPage?.summary || '' }} />
        </div>
        <div className="flex-1 flex flex-col md:max-w-[40%] max-w-[70%] lg:mt-4 md:mt-0 justify-end mx-auto mt-8">
          <div className="font-light" dangerouslySetInnerHTML={{ __html: AboutPage?.content || '' }} />
        </div>
      </section>

      <div className="mt-20">
        <Timeline timelineRef={null} scrollPercentage={0} />
      </div>

      {/* Company Ownership Section */}
      <section className="mt-20 mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-blue-800 text-center uppercase">
          Company Ownership
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mx:px-8 sm:px-12 md:px-12 xl:px-24">
          {article2.map((item, index) => {
            const ImageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key=" + item.image?.url;
            return (
              <div key={index} className="bg-gray-200 rounded-2xl text-center hover:shadow-lg transition duration-300 hover:scale-95">
                <div className="relative w-full h-[300px]">
                  <Image
                    fill
                    src={ImageUrl || "/default-avatar.png"}
                    className="object-cover rounded-t-2xl"
                    alt={item._id}
                  />
                </div>
                <div className=" py-4">
                  <p className="text-gray-500 text-[16px] font-thin">{item.summary}</p>
                  <h1 className="text-[20px] text-black font-thin">{item.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Page;