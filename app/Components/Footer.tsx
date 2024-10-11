import React from "react";
import Image from "next/image";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Footer() {
  return (
    <div>
      <footer className="w-full bg-white border-t">
        <div className="mx-auto justify-between flex flex-col md:flex-row max-w-[110rem] px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-start items-center space-x-4 mb-6 md:mb-0">
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

          <div className="flex justify-end items-center w-full md:w-auto">
            <label
              htmlFor="email"
              className="relative block text-gray-400 focus-within:text-gray-600 w-full md:w-auto"
            >
              <EnvelopeIcon className="text-black w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4" />
              <input
                type="email"
                className="form-input w-full sm:w-[20rem] md:w-[30rem] text-sm pl-12 pr-4 py-3 rounded-md"
                placeholder="Enter your email address"
              />
              <Button className="bg-blue-800 absolute transform top-1/2 -translate-y-1/2 right-1 px-4 py-2">
                Subscribe <ChevronRight />
              </Button>
            </label>
          </div>
        </div>

        <div className="border-t">
          <div className="mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
              <div className="mb-10 lg:col-span-2 lg:mb-0">
                <a
                  href="https://pagedone.io/"
                  className="flex justify-center lg:justify-start"
                >
                  <Image
                    src={"/LogoKhasuBlack.svg"}
                    alt={"Logo"}
                    width={100}
                    height={100}
                  />
                </a>
                <p className="py-8 text-sm text-gray-500 lg:max-w-lg text-center lg:text-left">
                  We aim to provide our customers and partners with the highest
                  quality of service. The ultimate goal of our business is to
                  ensure that our work is performed in a timely and safe manner.
                </p>
                <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                  {/* Social Icons */}
                </div>
              </div>
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-bold mb-7">
                  Company
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                      About us
                    </a>
                  </li>
                  {/* More Links */}
                </ul>
              </div>
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-bold mb-7">
                  Service
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                      Heating Plant
                    </a>
                  </li>
                  {/* More Links */}
                </ul>
              </div>
              <div className="text-left lg:col-span-2">
                <h4 className="text-lg text-gray-900 font-bold mb-7">
                  Contact Us
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6 flex items-center space-x-2">
                    <PhoneIcon className="size-6 text-blue-800" />
                    <a href="javascript:;" className="text-gray-600 hover:text-gray-900">
                      7500-9999
                    </a>
                  </li>
                  {/* More Contacts */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
