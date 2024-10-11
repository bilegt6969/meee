import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckIcon, ArrowDown } from "lucide-react";
import CarouselComponent from "../../app/Components/Carousel/page";

export default function Home() {
  return (
    <div className="text-white custom-gradient mt-[-4rem] relative">

      {/* Hero Section */}
      <section className="relative w-full top-[0rem] h-screen mx-2 border-white border-8 border-t-0 rounded-3xl rounded-t-none rounded-bl-none bg-white">
        <Image
          src="/bgimg.png"
          alt="Heating Plant"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl"
        />
        <div className="absolute w-1/3 top-[30%] md:top-[30%] ml-4 md:ml-8 lg:right-[10%] flex flex-col space-y-4 md:space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold tracking-tight">
          SAFETY AND TRAINING
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl">
          Statutory State required GASI trainings certifications and refresh courses, Skilled trades training courses in common trades in the energy operation, construction and metal forming fabrication industry with practical components conducted in a safe controlled environment, classrooms, simulators and facility, under experienced and qualified expert supervision. Qualification testing and certification in compliance with standard and state regulation.
</p>
          <Button className="mt-8 w-fit bg-blue-700 hover:bg-blue-800 text-white rounded-xl">
            Write us
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute bottom-8 right-[5%] text-lg md:text-2xl font-thin flex flex-col md:flex-row items-end">
          <p className="text-left mb-2 md:mb-0">
            BE PART OF THE GLOBAL SHIFT <br /> TOWARDS CLEAN, SUSTAINABLE ENERGY SOURCES
          </p>
          <Button className="bg-transparent hover:bg-transparent text-white rounded-xl ml-4">
            Explore more
            <ArrowDown className="w-6 h-6 ml-4" />
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full mt-[-0rem]">
        <div className="mx-2">
          <div className="flex flex-col md:flex-row text-center space-x-0 w-full h-full">
            <div className="w-1/2 border-white rounded-3xl rounded-b-none rounded-tl-none bg-white">
            <Image
              width={900}
              height={900}
              alt="Heating Facility"
              className="w-full h-full rounded-3xl border-white border-8 border-t-0"
              src="/img-76.png"
            />
            </div>
            <div className="bevel5"></div>
            <div className="bevel6"></div>
            
            <div className="md:p-8 md:w-1/2 text-left mt-2">
              <h1 className="text-2xl md:text-4xl font-extrabold mb-4">OPERATION & MAINTENANCE SERVICES</h1>
              <p className="text-base md:text-xl leading-7 font-thin">
                Complex Heating Facility, Central Heating Plant...
              </p>
              <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> FULL SERVICE of Heating facilities...
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2" /> On demand additional...
                </li>
              </ul>
            </div>
            <div className="bevel11"></div>
          </div>
        </div>
      </section>

      {/* Maintenance Services Section */}
      

      {/* Work Process Section */}
      <section className="ml-2 -mt-2 pt-9 bg-[#f0f0f0] rounded-tr-3xl">
        <div className="mt-8 md:mt-16 pb-16 md:pb-24 px-4 text-center max-w-[1300px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800">Work Process</h1>
          <p className="text-black mt-4 md:mt-8 text-lg md:text-xl max-w-3xl mx-auto">
            With Valmet’s proven technology, you can produce heat in a sustainable way...
          </p>
          <div className="flex flex-wrap justify-between gap-4 md:gap-8 mt-8">
            {[
              { img: "/img-1.png", step: "Step 1", text: "Hot water boilers for district heat" },
              { img: "/img-2.png", step: "Step 2", text: "Hot water boilers for industrial needs" },
              { img: "/img-3.png", step: "Step 3", text: "Steam boiler plants for industrial processes" },
              { img: "/img-4.png", step: "Step 4", text: "Boilers for peak loads" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-black">
                <Image src={item.img} width={200} height={200} alt={`Step ${index}`} className="w-fit h-fit" />
                <h1 className="text-2xl text-blue-800 font-semibold mt-4">{item.step}</h1>
                <p className="max-w-[17rem] text-center font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heating Plant Projects Section */}
      <section className="px-48 pt-16 w-full bg-white mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800">HEATING PLANT PROJECTS</h1>
        <div className="mt-8">
          <CarouselComponent />
        </div>
      </section>

      <div className="pb-36 custom-gradient"></div>
    </div>
  );
}
