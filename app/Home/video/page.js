'use client';
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';


function VideoPage() {
  const [mute, setMute] = useState(false); // Initially muted
  const videoRef = useRef(null); // Reference to control the video element

  const handleMuteToggle = () => {
    setMute((prevMute) => !prevMute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Mute or unmute the video
    }
  };

  return (
    <div className='items-center'>
    <div className="relative object-cover lg:h-full h-screen w-full clip-corner overflow-hidden">
      <video
          ref={videoRef}
          autoPlay
          loop
          muted={mute}
          className="object-cover h-full w-full"
        >
          
          <source
            src="./background.mp4"
            type="video/mp4"
          />
        </video>
        <div>
        <button
          onClick={handleMuteToggle}
          className="absolute lg:mt-[-5rem] mt-[-20rem] lg:ml-[3rem] ease bg-opacity-60 p-2 rounded-full"
        >
          {mute ? (
            <SpeakerXMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <SpeakerWaveIcon className="h-6 w-6 text-white" />
          )}
        </button>
        </div>
        

        {/* Mute Button */}


        <div className="absolute bottom-0 right-0 w-full md:w-1/3 bg-gradient-to-bl from-sky-700 via-blue-700 to-sky-400 p-6 rounded-tl-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-4">
          Welcome To, <br /> Khasu Dayan
        </h1>
        <p className='text-sm md:text-base font-semibold mb-4'>
          We aim to provide our customers and partners with the highest
          quality of service. The ultimate goal of our business is to ensure
          that our work is performed in a timely and safe manner.
        </p>
        <Button className="text-blue-500 text-base md:text-xl p-4 md:p-6" variant="outline">
          Write us
          <ChevronRightIcon className="h-4 w-4 text-blue-500" />
        </Button>
      </div>

        
      </div>
      {/* Content Overlay */}
      
      </div>
      
  );
}

export default VideoPage;

