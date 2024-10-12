import React from "react";
import Image from "next/image";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = [
    { href: "/about-us", label: "About us" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
  ];

  const services = [
    { href: "/service/heatingPlant", label: "Heating Plant" },
    { href: "/service/construction", label: "Construction" },
    { href: "/service/engineering", label: "Engineering" },
    { href: "/service/safety", label: "Safety" },
  ];

  return (
    <footer className="w-full bg-white border-t">
      <div className="mx-auto flex flex-col md:flex-row justify-between px-2 sm:px-6 md:px-12 lg:px-12 xl:px-36 py-5">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="border-2 p-4 rounded-2xl">
            <EnvelopeOpenIcon className="h-8 w-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg lg:text-xl">
              If you want to work with our company
            </h1>
            <p className="text-sm text-gray-500">
              Please leave your email address
            </p>
          </div>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <label
            htmlFor="email"
            className="relative block text-gray-400 focus-within:text-gray-600 w-full md:w-auto"
          >
            <EnvelopeIcon className="text-black w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4" />
            <input
              type="email"
              id="email"
              className="form-input w-full sm:w-[20rem] md:w-[10rem] xl:w-[30rem] text-sm pl-12 pr-4 py-3 rounded-md"
              placeholder="Enter your email address"
              required
            />
            <Button className="bg-blue-800 absolute top-1/2 transform -translate-y-1/2 right-1 px-4 py-2">
              Subscribe <ChevronRight />
            </Button>
          </label>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto px-2 sm:px-6 md:px-12 lg:px-12 xl:px-36">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="mb-10 col-span-1 lg:col-span-2 lg:mb-0">
              <a
                href="https://pagedone.io/"
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/LogoKhasuBlack.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </a>
              <p className="py-8 text-sm text-gray-500 lg:max-w-lg text-center lg:text-left">
                We aim to provide our customers and partners with the highest
                quality of service. The ultimate goal of our business is to
                ensure that our work is performed in a timely and safe manner.
              </p>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-bold mb-3">Company</h4>
              <ul className="text-sm transition-all duration-500">
                {links.map(({ href, label }) => (
                  <li className="mb-3" key={href}>
                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-bold mb-3">Service</h4>
              <ul className="text-sm transition-all duration-500">
                {services.map(({ href, label }) => (
                  <li className="mb-3" key={href}>
                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left lg:col-span-2 mx-auto">
              <h4 className="text-lg text-gray-900 font-bold mb-7">Contact Us</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6 flex items-center space-x-2">
                  <PhoneIcon className="h-6 text-blue-800" />
                  <a href="tel:75009999" className="text-gray-600 hover:text-gray-900">
                    7500-9999
                  </a>
                </li>
                <li className="mb-6 flex items-center space-x-2">
                  <EnvelopeIcon className="h-6 text-blue-800" />
                  <a href="mailto:info@hasudayan.com" className="text-gray-600 hover:text-gray-900">
                    Info@hasudayan.com
                  </a>
                </li>
                <li className="mb-6 flex items-start space-x-2">
                  <MapPinIcon className="h-6 text-blue-800" />
                  <a
                    href="https://www.google.com/maps?q=#304, 304/3 building, Nisekh 3, Ikh Uul, 6th bag Dalanzadgad soum, Umnugobi province 46082, Mongolia"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    #304, 304/3 building, Nisekh 3, Ikh Uul, 6th bag Dalanzadgad soum, Umnugobi province 46082, Mongolia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
