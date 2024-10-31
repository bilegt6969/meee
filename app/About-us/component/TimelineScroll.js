'use client';
import React, { useState, useEffect, useRef } from 'react';
import TimelinePresentation from './TimelinePresentation';

const TimelineScroll = () => {
  const [scrollXValue, setScrollXValue] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        setScrollXValue(timelineRef.current.scrollLeft);
        setMaxScrollX(timelineRef.current.scrollWidth - timelineRef.current.clientWidth);
      }
    };

    const currentRef = timelineRef.current;
    if (currentRef) {
      setMaxScrollX(currentRef.scrollWidth - currentRef.clientWidth);
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollPercentage = maxScrollX > 0 ? scrollXValue / maxScrollX : 0;

  return <TimelinePresentation 
    timelineRef={timelineRef}
    scrollPercentage={scrollPercentage}
  />;
};

export default TimelineScroll; 