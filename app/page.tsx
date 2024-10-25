import React from 'react';
import VideoPage from './Home/part1/video/page';
import HomeCard from './Home/part2/HomeCard';
import TabComponents from './Home/part3/FeaturedProjects'
import News from './Home/part4/NewsCarouselParent'
import { getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";

async function Page(){
  const {article} = await getKbArticlesByCode("Service")
  const {article2} = await getKbArticlesByCode2("Projects")
  return (
    <div className="bg-[#f0f0f0]">
      <VideoPage />
      <HomeCard/>
      <TabComponents ServiceArticle={article} ProjectsArticle={article2}/>
      <News/>

      
    </div>
  );
};

export default Page;
