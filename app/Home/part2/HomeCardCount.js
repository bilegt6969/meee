'use client';

import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

function HomeCardCount({ content }) {
  const [countState, setCountState] = useState({
    isCounting: false,
    isCompleted: false,
  });
  const ref = useRef(null);

  // Intersection Observer for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountState((prev) => ({ ...prev, isCounting: true }));
          if (ref.current) {
            observer.unobserve(ref.current); // Stop observing after it becomes visible
          }
        }
      },
      { threshold: 0.7 }
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

  return (
    <div
      ref={ref}
      className="w-full lg:w-2/3 flex flex-col md:flex-row md:justify-around items-center py-12 md:py-16 lg:py-20 rounded-2xl text-white custom-gradient text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl space-y-8 sm:space-y-0"
    >
      <div className="flex flex-col items-center space-y-0 md:space-y-2 lg:space-y-4">
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          Completed Projects
        </p>
        <span className="font-bold font-sans text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
          {countState.isCounting && (
            <CountUp start={0} end={content[0]} duration={2} separator="," />
          )}
        </span>
      </div>

      <div className="flex flex-col items-center space-y-0 md:space-y-2 lg:space-y-4">
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          LTI Free Manhours
        </p>
        <span className="font-bold font-sans text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
          {countState.isCounting && (
            <CountUp start={0} end={content[1]} duration={2} separator="," />
          )}
        </span>
      </div>

      <div className="flex flex-col items-center space-y-0 md:space-y-2 lg:space-y-4">
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          Total manhours employed
        </p>
        <div className="flex items-center">
          <span className="font-bold font-sans text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
            {countState.isCounting && (
              <CountUp
                start={0}
                end={content[2]}
                duration={2}
                separator=","
                onEnd={() => setCountState((prev) => ({ ...prev, isCompleted: true }))}
              />
            )}
          </span>

          {countState.isCompleted && (
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
  );
}

export default HomeCardCount;
