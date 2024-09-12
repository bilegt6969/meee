import React from 'react';
import VideoPage from './Home/video/page';
import HomeCard from './Home/HomeCard';
import FeaturedProjects from './Home/FeaturedProjects'
import News from './Home/News'

const Page = () => {
  return (
    <div className="mt-[-10rem]">
      <VideoPage />
      <HomeCard/>
      <FeaturedProjects/>
      <News/>
      
      
    </div>
  );
};

export default Page;
