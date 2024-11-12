"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useAtom } from "jotai";
import Cookies from 'js-cookie'; // Import js-cookie
import {
  Bars2Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import LogoKhasuBlack from "../Navbar/LogoKhasuBlack.svg";
import LogoKhasu from "../Navbar/LogoKhasu.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { LanguageAtom, changeLanguageWithLoading } from '../../atoms/languageAtom'
import { useRouter } from 'next/navigation'
import { loadingAtom } from '@/app/atoms/loadingAtom'
import LoadingScreen from '../LoadingScreen'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [Language, setLanguage] = useAtom(LanguageAtom);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  let pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 2 && (pathSegments[0] === 'projects' || pathSegments[0] === 'Home')) {
      setNavBackground(true);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const xIconVariants = {
    closed: { rotate: -45 },
    open: { rotate: 0 },
  };

  const smoothDropdownAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const currentLanguage = Cookies.get("language") || "ENG"; // Default to "MNG"


  const handleLanguageChange = async (newLang) => {
    if (newLang === Language) {
      return; // No need to change if the language is the same
    }

    setIsLoading(true);
    
    try {
      await changeLanguageWithLoading(setLanguage, setIsLoading, newLang);
      router.refresh(); // Refresh the router to apply changes
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Language mapping for the "Services" text
  const languageText = {
    MNG: {
      services: "Үйлчилгээ",
      heatingPlant: "Дулааны станц",
      construction: "Барилга",
      engineering: "Инженерчлэл",
      safety: "Аюулгүй байдал",
      projects: "Төсөл",
      careers: "Ажлын байр",
      aboutUs: "Бидний тухай",
      contact: "Холбоо барих",
    },
    ENG: {
      services: "Services",
      heatingPlant: "Heating Plant",
      construction: "Construction",
      engineering: "Engineering",
      safety: "Safety",
      projects: "Projects",
      careers: "Careers",
      aboutUs: "About Us",
      contact: "Contact",
    },
  };

  const [isLanguageSubmenuOpen, setIsLanguageSubmenuOpen] = useState(false);

  const toggleLanguageSubmenu = (e) => {
    e.stopPropagation();
    setIsLanguageSubmenuOpen(!isLanguageSubmenuOpen);
  };

  const handleLogoClick = () => {
    // Do not change the language when clicking the logo
    // Instead, just navigate to the home page
    router.push('/'); // Navigate to home
  };

  return (
    <div
      className={`z-[400] sticky top-0 transition-colors duration-500 ${
        pathname === "/shaft" ? "bg-white shadow-md" : navBackground ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a onClick={handleLogoClick}>
              <Image
                src={navBackground ? LogoKhasuBlack : LogoKhasu}
                alt="Logo"
                loading="lazy"
                width={100}
                height={50}
                className="w-[100px] h-auto mx-2"
              />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light">
                  <p className={`text-base ${navBackground ? "text-black" : "text-white"}`}>
                  {languageText[Language].services}
                  </p>
                  <ChevronDownIcon
                    className={`${navBackground ? "text-black" : "text-white"} h-4 w-4`}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem href="/service/heatingPlant" key="edit1">
                {languageText[Language].heatingPlant}
                </DropdownItem>
                <DropdownItem href="/service/construction" key="edit2">
                {languageText[Language].construction}
                </DropdownItem>
                <DropdownItem href="/service/engineering" key="edit3">
                {languageText[Language].engineering}
                </DropdownItem>
                <DropdownItem href="/service/safety" key="edit4">
                {languageText[Language].safety}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div
              className={`flex ${navBackground ? "text-black" : "text-white"} items-center space-x-4`}
            >
              <Link
                href="/projects"
                className="hover:text-gray-400 transition px-3 py-2 whitespace-nowrap rounded-md text-base"
              >
                  {languageText[Language].projects}
                  </Link>
              <Link
                href="/careers"
                className="hover:text-gray-400 transition px-3 py-2 whitespace-nowrap rounded-md text-base"
              >
                  {languageText[Language].careers}
                  </Link>
              <Link
                href="/about-us"
                className="hover:text-gray-400 transition px-3 py-2 whitespace-nowrap rounded-md text-base"
              >
                  {languageText[Language].aboutUs}
                  </Link>
            </div>
          </div>
          <div className="items-center gap-4 hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <Dropdown className="border-none" backdrop="blur">
              <DropdownTrigger>
                <Button variant="">
                  <GlobeAsiaAustraliaIcon
                    className={`h-14 w-14 ${navBackground ? "text-black" : "text-white"}`}
                  />
                  <p className={`${navBackground ? "text-black" : "text-white"}`}>
                    {currentLanguage}
                  </p>
                  <ChevronDownIcon className={`${navBackground ? "text-black" : "text-white"}`} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                {currentLanguage !== 'MNG' && (
                  <DropdownItem key="editMng" onClick={() => handleLanguageChange('MNG')}>
                    MNG
                  </DropdownItem>
                )}
                {currentLanguage !== 'ENG' && (
                  <DropdownItem key="editEng" onClick={() => handleLanguageChange('ENG')}>
                    ENG
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
            <Link className="" href='/contact-us'>

            <button className="flex items-center gap-2 bg-blue-700 px-5 py-2 text-white text-[1rem] rounded-md hover:bg-blue-600 whitespace-nowrap transition">
              <PhoneIcon className="text-white h-4 w-4 font-bold" />
              <p className="font-semibold">                  {languageText[Language].contact}
              </p>
            </button>
            </Link>

          </div>
          <div className="-mr-2 flex items-center sm:flex md:flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <motion.span
                className="h-6 w-6 z-50"
                variants={isOpen ? xIconVariants : menuIconVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </motion.span>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: { height: 0, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
          visible: { height: "100vh", opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
        }}
        className={`${isOpen ? "block" : "hidden"} fixed sm:flex md:flex lg:flex top-0 left-0 w-full bg-[#161617] shadow-lg`}
      >
        {isOpen && (
          <motion.div
            className="px-9 pt-[10rem] pb-3 space-y-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex items-center" onClick={toggleSubmenu}>
              <div
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              >
                Services
              </div>
              <motion.div
                className="ml-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSubmenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </motion.div>
            </div>
            <motion.div
              variants={smoothDropdownAnimation}
              initial="hidden"
              animate={isSubmenuOpen ? "visible" : "hidden"}
              className="pl-4"
            >
              <Link
                href="/service/heatingPlant"
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                onClick={closeNavbar}
              >
                Heating Plant
              </Link>
              <Link
                href="/service/construction"
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                onClick={closeNavbar}
              >
                Construction
              </Link>
              <Link
                href="/service/engineering"
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                onClick={closeNavbar}
              >
                Engineering
              </Link>
              <Link
                href="/service/Safety"
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                onClick={closeNavbar}
              >
                Safety
              </Link>
            </motion.div>

            <Link
              href="/about-us"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              onClick={closeNavbar}
            >
              About us
            </Link>
            <Link
              href="/careers"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              onClick={closeNavbar}
            >
              Careers
            </Link>
            <Link
              href="/projects"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              onClick={closeNavbar}
            >
              Projects
            </Link>

            <div className="flex items-center" onClick={toggleLanguageSubmenu}>
              <div
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              >
                Language
              </div>
              <motion.div
                className="ml-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: isLanguageSubmenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </motion.div>
            </div>
            <motion.div
              variants={smoothDropdownAnimation}
              initial="hidden"
              animate={isLanguageSubmenuOpen ? "visible" : "hidden"}
              className="pl-4"
            >
              {Language !== 'MNG' && (
                <div
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                  onClick={() => handleLanguageChange('MNG')}
                >
                  MNG
                </div>
              )}
              {Language !== 'ENG' && (
                <div
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl"
                  onClick={() => handleLanguageChange('ENG')}
                >
                  ENG
                </div>
              )}
            </motion.div>

            <Link
              href="/contact-us"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl"
              onClick={closeNavbar}
            >
              Contact us
            </Link>
          </motion.div>
        )}
      </motion.div>
      {isLoading && <LoadingScreen />}
    </div>
  );
};

export default Navbar;
