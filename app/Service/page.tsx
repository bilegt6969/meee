// pages/index.js
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";
import CarouselComponent from '../Components/Carousel/page'
import type { CarouselProps } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className=" text-white">
      {/* Main Hero Section */}
      <section className="relative h-screen top-[-4rem]">
        <Image
          src="/bg-img-ser.png" // Add the background image path
          alt="Heating Plant"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl "
        />

        <div className="absolute top-[42rem] ml-[0rem] flex justify-start gap-12">
          {/* Box 1 */}
          <div className=" flex space-x-4 mx-auto justify-center gap-[6rem] items-center bg-gradient-to-tl from-blue-400 via-blue-500 to-sky-400 h-[19rem] w-[50rem] rounded-2xl shadow-lg">
            <div className="">
              <p className="text-2xl">
                Projects delivered <br /> on budget
              </p>

              <p className="text-7xl mt-4 font-bold">100%</p>
            </div>

            <div className="">
              <p className="text-2xl">
                Total manhours <br /> employed
              </p>

              <p className="text-7xl mt-4 font-bold">50+</p>
            </div>
          </div>
          {/* Box 2 */}
        </div>

        <div className="absolute right-[12rem] top-[15rem] flex flex-col bg-opacity-50 text-left">
          <h1 className="text-9xl font-bold mb-8 tracking-tight">
            HEATING <br /> PLANT
          </h1>
          <p className="text-2xl max-w-3xl">
            We aim to provide our customers and partners with the highest
            quality of service. The ultimate goal of our business is to ensure
            that our work is performed in a timely and safe manner.
          </p>
          <div className="flex font-thin items-center space-x-4">
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-fit">
              {" "}
              Write us <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-[4rem] font-thin text-2xl right-[26rem] ">
          <p>
            BE PART OF THE GLOBAL SHIFT
            <br />
            TOWARDS CLEAN, SUSTAINABLE ERNERGY SOURCES
          </p>
        </div>
      </section>

      {/* Info Section with Statistics */}
      <section className="mt-[-3rem] text-center space-x-[1rem]">
        <Image
          width={700}
          height={700}
          alt="bgimg"
          className="w-[49.6%]"
          src={"/bg-ser-2.png"}
        />
        <div className="bg-gradient-to-tl from-blue-400 via-blue-700 to-sky-400 absolute right-0 top-[62rem] w-[49.6%] rounded-3xl text-left p-[4rem] h-[45rem]">
          <h1 className="text-3xl text-extrabold mb-4">
            ENERGY
            <br />
            INDEPENDENCE
            <br />
            STARTS WITH US
          </h1>
          <p className="max-w-2xl text-xl leading-9 font-thin">
            As a third generation family owned and operated business, California
            Premier Energy is driven by an unparalleled understanding of the
            roofing, solar, and battery needs of today’s homes. We’re your
            trusted partner in sustainable energy solutions. With a passion for
            innovation and a commitment to excellence, we’re dedicated to
            transforming homes across Southern California into energy-efficient
            and eco-friendly spaces.
          </p>
        </div>
      </section>

      <section className="mt-[1rem]">
        <div className="p-6 bg-gradient-to-tl w-[40%] h-[10rem] rounded-3xl from-blue-400 via-blue-700 to-sky-400 ">
          <h1 className="text-white h-full text-3xl font-bold justify-center items-center mx-auto flex">
            WHY DO YOU NEED <br />A HOME BATTERY?
          </h1>
          <Image
            width={700}
            height={700}
            alt="bgimg"
            className="w-[59.6%] absolute right-0 top-[108rem]"
            src={"/bg-ser-3.png"}
          />
        </div>

        <div className="p-6 bg-gradient-to-tl mt-[1rem] w-[40%] h-[43.6rem] rounded-3xl from-blue-400 via-blue-700 to-sky-400 items-center justify-center my-auto">
          <ul className="text-white h-full text-xl font-thin flex flex-col space-y-[2rem] max-w-xl mx-auto">
            <li className="flex">
              <Check />
              Escape unfair time-of-use billing rates imposed by utility
              companies
            </li>
            <li className="flex">
              <Check />
              Enhance the energy capacity of your solar panels by storing solar
              energy generated during the day, utilizing it during peak hours to
              sidestep high electricity rates
            </li>
            <li className="flex">
              <Check />
              Secure backup power for critical appliances during blackouts
            </li>
            <li className="flex">
              <Check />
              Diminish reliance on the grid and mitigate the impact of potential
              rate hikes
            </li>
            <li className="flex">
              <Check />
              Save money on your electricity bills
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-[9rem]">
        <div className="">
          <h1 className="text-6xl font-bold text-blue-500 mx-auto flex items-center justify-center">
            Work Process
          </h1>
          <p className="text-black mt-[2rem] text-xl text-center max-w-3xl mx-auto">
            With Valmet’s proven and and reliable technology, you can produce
            heat or steam in a sustainable way. We offer heating plant solutions
            in the thermal capacity range from 10 to 150 MWth – all designed to
            meet customer needs and match the type of fuel available.
          </p>
        </div>
        <div className="flex mx-auto items-center justify-center">
          <div className="text-black mx-auto flex flex-col justify-center items-center">
            {" "}
            <Image
              src={"/img-1.png"}
              className="w-fit h-fit"
              alt="methods"
              width={200}
              height={200}
            />
            <h1 className="mx-auto text-2xl justify-center flex">Step 1</h1>
            <p className="max-w-[12rem] text-center">Hot water boilers for the production of district heat</p>
          </div>
          <div className="text-black mx-auto flex flex-col justify-center items-center">
            {" "}
            <Image
              src={"/img-2.png"}
              className="w-fit h-fit"
              alt="methods"
              width={200}
              height={200}
            />
            <h1 className="mx-auto text-2xl justify-center flex">Step 2</h1>
            <p className="max-w-[12rem] text-center">Hot water boilers for industrial needs</p>
          </div>
          <div className="text-black mx-auto flex flex-col justify-center items-center">
            {" "}
            <Image
              src={"/img-3.png"}
              className="w-fit h-fit"
              alt="methods"
              width={200}
              height={200}
            />
            <h1 className="mx-auto text-2xl justify-center flex">Step 3</h1>
            <p className="max-w-[12rem] text-center">Steam boiler plants for industrial process steam production, for example, in the food industry</p>
          </div><div className="text-black mx-auto flex flex-col justify-center items-center">
            {" "}
            <Image
              src={"/img-4.png"}
              className="w-fit h-fit"
              alt="methods"
              width={200}
              height={200}
            />
            <h1 className="mx-auto text-2xl justify-center flex">Step 4</h1>
            <p className="max-w-[12rem] text-center">Boilers and plants to be used during peak loads and as backup</p>
          </div>
        </div>
      </section>

      <section className="mt-[9rem] ml-[7rem]">
        <h1 className="text-6xl font-bold text-blue-700 mb-4">HEATING PLANT PROJECTS</h1>
        <p className="max-w-3xl text-black text-xl">With Valmet’s proven and and reliable technology, you can produce heat or steam in a sustainable way. We offer heating plant solutions in the thermal capacity range from 10 to 150 MWth – all designed to meet customer needs and match the type of fuel available.</p>

        <div className="">
        <CarouselComponent/>

        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
}
