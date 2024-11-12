'use client'
import React, { useEffect, useState, useRef, ReactNode } from "react";
import CountUp from "react-countup";
import Cookies from 'js-cookie'; // Import js-cookie

interface Statistic {
  [x: string]: ReactNode;
  summary: string;
  content?: string;
}

interface CounterSectionProps {
  statistics: {
    Statistic_1: Statistic;
    Statistic_2: Statistic;
    Statistic_3: Statistic;
  };
}

const cleanNumber = (value: string) => {
  return Number(value.replace(/[^0-9.]/g, ''));
};

const CounterSection: React.FC<CounterSectionProps> = ({ statistics }) => {
  const [countState, setCountState] = useState({
    isCounting: false,
    isCompleted: false,
  });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountState((prev) => ({ ...prev, isCounting: true }));
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



  const shouldShowPlus = (value: string) => {
    return /[^0-9.]/.test(value);
  };
  const currentLanguage = Cookies.get("language") || "MNG"; // Default to "MNG"
  return (
    <div
      ref={ref}
      className="hidden md:block relative bottom-[0rem] flex-1 w-full rounded-2xl text-white items-end"
    >
      <div className="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-around lg:items-start px-6 py-0 rounded-2xl text-white">


        <div className="flex flex-col items-center space-y-2 lg:space-y-4">
          <p className="text-lg md:text-xl lg:text-2xl text-center max-w-[10rem]">
          {currentLanguage === "MNG" ? "Дууссан Төслүүд" : "Completed Projects"}
          </p>
          <div className="flex items-center">
            <span className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
              {countState.isCounting && (
                <CountUp
                  className="account-balance"
                  start={0}
                  end={cleanNumber(statistics.Statistic_1.summary)}
                  duration={2}
                  useEasing={true}
                  separator=","
                  onEnd={() => setCountState(prev => ({ ...prev, isCompleted: true }))}
                />
              )}
            </span>
            {shouldShowPlus(statistics.Statistic_1.summary) && countState.isCompleted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus transition-transform duration-500 ease-out transform scale-100 opacity-100"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 lg:space-y-4">
          <p className="text-lg md:text-xl lg:text-2xl text-center max-w-[10rem]">
          {currentLanguage === "MNG" ? "LTI Ажлын Цаг" : "LTI Free Manhours"}
          </p>
          <span className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
            {countState.isCounting && (
              <CountUp
                className="account-balance"
                start={0}
                end={Number(statistics.Statistic_2.summary)}
                duration={2}
                useEasing={true}
                separator=","
                onEnd={() => setCountState(prev => ({ ...prev, isCompleted: true }))}
              />
            )}
          </span>
          <div className="">
            {shouldShowPlus(statistics.Statistic_2.summary) && countState.isCompleted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus transition-transform duration-500 ease-out transform scale-100 opacity-100"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-0 md:space-y-2 lg:space-y-4">
        <p className="text-lg md:text-xl lg:text-2xl text-center max-w-[10rem]">
        {currentLanguage === "MNG" ? "Ажилласан нийт хүн цаг" : "Total manhours employed"}
        </p>
        <div className="flex items-center">
        <span className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
        {countState.isCounting && (
              <CountUp
                start={0}
                end={cleanNumber(statistics.Statistic_3.summary)}
                duration={2}
                separator=","
                onEnd={() => setCountState((prev) => ({ ...prev, isCompleted: true }))}
              />
            )}
          </span>

          {shouldShowPlus(statistics.Statistic_3.summary) && countState.isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-plus transition-transform duration-500 ease-out transform ${
                countState.isCompleted ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9`}
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CounterSection; 