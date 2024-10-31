// VideoPlayer.js
'use client'; // This component will use hooks

import React, { useState, useRef } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

const VideoPlayer = ({HomeElement}) => {
  const [mute, setMute] = useState(true); // Initially muted
  const videoRef = useRef(null); // Reference for the video element

  const handleMuteToggle = () => {
    setMute(prevMute => !prevMute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Mute or unmute the video
    }
  };


  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        preload='auto'
        playsInline
        muted={mute}
        className="object-cover h-screen w-full"
      >
        <source src={"https://khas-dayan.api.erxes.io/api/read-file?key="+HomeElement?.video?.url || ""} type="video/mp4" />
      </video>

      <button
        onClick={handleMuteToggle}
        className="absolute bottom-16 left-28 bg-opacity-60 p-2 rounded-full justify-start hidden sm:block"
      >
        {mute ? (
          <SpeakerXMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <SpeakerWaveIcon className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Mute Button Positioned Relatively to the Card */}
      <button
        onClick={handleMuteToggle}
        className="absolute block sm:hidden -top-16 right-4 bg-opacity-60 p-2 rounded-full"
      >
        {mute ? (
          <SpeakerXMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <SpeakerWaveIcon className="h-8 w-8 text-white" />
        )}
      </button>
    </>
  );
};

export default VideoPlayer;
