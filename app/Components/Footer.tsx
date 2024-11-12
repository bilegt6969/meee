import React from "react";
import Image from "next/legacy/image";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";

const Footer = async () => {
  const cookieStore = await cookies();
  const currentLanguage = cookieStore.get("language")?.value ?? "MNG";

  // Language mapping for links and services
  const languageText = {
    MNG: {
      links: [
        { href: "/about-us", label: "Бидний тухай" },
        { href: "/projects", label: "Төсөл" },
        { href: "/careers", label: "Ажлын байр" },
      ],
      services: [
        { href: "/service/heatingPlant", label: "Дулааны станц" },
        { href: "/service/construction", label: "Барилга" },
        { href: "/service/engineering", label: "Инженерчлэл" },
        { href: "/service/safety", label: "Аюулгүй байдал" },
      ],
      contactUs: "Холбоо барих",
      company: "Компани",
      service: "Үйлчилгээ",
      description: "Бид үйлчлүүлэгч, түншүүддээ дээд зэргийн чанартай үйлчилгээг үзүүлэхийг зорьж байна. Бидний бизнесийн эцсийн зорилго бол ажлаа цаг тухайд нь аюулгүй гүйцэтгэх явдал юм.",
    },
    ENG: {
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/projects", label: "Projects" },
        { href: "/careers", label: "Careers" },
      ],
      services: [
        { href: "/service/heatingPlant", label: "Heating Plant" },
        { href: "/service/construction", label: "Construction" },
        { href: "/service/engineering", label: "Engineering" },
        { href: "/service/safety", label: "Safety" },
      ],
      contactUs: "Contact us",
      company: "Company",
      service: "Service",
      description: "We aim to provide our customers and partners with the highest quality of service. The ultimate goal of our business is to ensure that our work is performed in a timely and safe manner.",
    },
  };

  return (
    <footer className="w-full bg-white border-t">
      <div className="border-t">
        <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid grid-rows-2 md:grid-rows-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">
            <div className="mb-10 col-span-1 lg:mb-0">
              <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                <img src="/LogoKhasuBlack.svg" alt="Logo" className="h-50 w-50" loading="lazy" />
              </a>
              <p className="py-8 text-sm text-gray-500 md:w-2/3 lg:max-w-lg text-center sm:text-left">
                {languageText[currentLanguage as keyof typeof languageText].description}
              </p>
            </div>
            <div className="text-left ">
              <h4 className="text-lg text-gray-900 font-bold mb-3">{languageText[currentLanguage as keyof typeof languageText].company}</h4>
              <ul className="text-sm transition-all duration-500">
                {languageText[currentLanguage as keyof typeof languageText].links.map(({ href, label }: { href: string; label: string }) => (
                  <li className="mb-3" key={href}>
                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg text-gray-900 font-bold mb-3">{languageText[currentLanguage as keyof typeof languageText].service}</h4>
              <ul className="text-sm transition-all duration-500">
                {languageText[currentLanguage as keyof typeof languageText].services.map(({ href, label }: { href: string; label: string }) => (
                  <li className="mb-3" key={href}>
                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left col-span-1 mx-auto">
              <h4 className="text-lg text-gray-900 font-bold mb-7">{languageText[currentLanguage as keyof typeof languageText].contactUs}</h4>
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
                    href="https://www.google.com/maps?q=#304,304/3 building, Nisekh 3, Ikh Uul, 6th bag Dalanzadgad soum, Umnugobi province 46082, Mongolia"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {currentLanguage === "MNG" ? "Өмнөговь аймаг, Даланзадгад сум, Их уул 6-р баг, Нисэх 3, 304/3 байр №304, 46082, Монгол улс" : "#304, 304/3 building, Nisekh 3, Ikh Uul, 6th bag Dalanzadgad soum, Umnugobi province 46082, Mongolia"}
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
