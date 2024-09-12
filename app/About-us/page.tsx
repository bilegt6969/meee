import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Timeline from "../../app/About-us/component/App";

function Page() {
  const teamsdata = [
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
    { img: "/person.png", name: "Ferdinand Metzler", position: "Founder, CEO" },
  ];

  return (
    <div>
      <section className="relative h-screen w-full">
        <Image
          className="relative object-cover top-[-4rem] w-full h-screen"
          height={900}
          width={1600}
          src="/bg.jpg"
          alt="Background"
        />
        <div className="absolute top-1/3 right-[10%] text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-8 tracking-tight text-white">
            ABOUT US
          </h1>
          <p className="font-thin text-lg md:text-2xl text-white leading-relaxed">
            We are driven by unyielding enthusiasm,
            <br />
            inspiration and a special attitude to everything
            <br />
            we do. These are our people and their stories.
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <Button className="rounded-xl border border-blue-500 text-blue-600 bg-white font-bold mx-auto justify-center hover:scale-105 hover:bg-white transition ease-in-out">
          Who We Are
        </Button>
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mx-auto max-w-6xl">
          Our team consists of{" "}
          <span className="text-blue-500">highly qualified</span>
          professionals specializing in{" "}
          <span className="text-blue-500">various areas</span>
        </h1>
        <Timeline />
      </section>

      <section className="mt-20">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-blue-700 text-center">
            TEAMS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-8 lg:mx-36">
            {teamsdata.map((data, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl text-center hover:shadow-lg transition"
              >
                <img
                  width={300}
                  height={300}
                  src={data.img || "/default-avatar.png"}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt={data.name}
                />
                <div className="mt-6">
                  <p className="text-gray-500 font-thin">{data.position}</p>
                  <h1 className="text-2xl font-semibold">{data.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mt-[9rem]">
        <div className="relative flex flex-col lg:flex-row lg:space-x-8 text-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-2xl">
          <div className="flex-1 text-white max-w-xl mx-auto justify-center items-center my-auto">
            <h4 className="block font-sans text-6xl font-bold leading-snug tracking-tight">
              INTERESTED IN JOINING US?
            </h4>
            <p className="block mt-2 font-sans font-light leading-relaxed text-xl">
              WE ARE always looking for motivated, keen people to join our teams
              and are driven by our employees’ success. Whatever stage you are
              at in your career, whether you are an apprentice or an experienced
              construction worker, we want to hear from you.
            </p>
          </div>

          <form className="flex-1 max-w-screen-lg mt-8 lg:mt-0 mb-2 w-full sm:w-96 lg:w-full p-6 bg-white text-black rounded-3xl shadow-lg">
            <div className="flex flex-col gap-6 mb-1 lg:grid lg:grid-cols-2 lg:gap-8">
              {/* First Name */}
              <div className="relative">
                <input
                  placeholder="First Name"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  placeholder="Last Name"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  placeholder="Email"
                  className="border-b-1 border-gray-300 peer w-full h-12 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                />
              </div>

              {/* Message */}
              <div className="relative lg:col-span-2">
                <textarea
                  placeholder="Your message here..."
                  className="peer w-full h-12 border-b-1 border-gray-300 bg-white/30 px-4 py-2 text-black placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40"
                ></textarea>
              </div>

              {/* CV Upload */}
              <div className="relative lg:col-span-2">
                <h6 className="block mb-1 font-sans text-base text-gray-500">
                  Upload Your CV
                </h6>
                <input
                  type="file"
                  className="peer w-full h-12 bg-white/30 px-4 py-2 text-black  placeholder-gray-500 outline-none transition-all duration-300 hover:bg-white/40 file:border-none file:text-black file:px-4 file:py-2 file:rounded-lg hover:file:bg-gray-300 ease-in-out"
                />
              </div>

              {/* Subscribe Checkbox */}
              <div className="relative flex items-center lg:col-span-2 h-12 bg-white/30 px-4 py-2  transition-all duration-300 hover:bg-white/40">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="h-5 w-5 rounded-md border border-black bg-transparent"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 font-sans text-sm text-black"
                >
                  Subscribe for daily letters
                </label>
              </div>
            </div>

            <button className="mt-6 w-full lg:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page;
