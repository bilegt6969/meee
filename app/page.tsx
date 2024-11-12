import React from 'react';
import VideoPage from './Home/part1/video/page';
import HomeCard from './Home/part2/HomeCard';
import TabComponents from './Home/part3/FeaturedProjects'
import News from './Home/part4/NewsCarouselParent'
import { getKbArticlesByCode } from "@/lib/kb";
import { cookies } from "next/headers";
import { getKbArticlesByCode2 } from "@/lib/kb2";

const Page = async () => {
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get("language")?.value ?? "MNG";
  const { article } = await getKbArticlesByCode(currentLanguage === "MNG" ? "Service-MNG" : "Service") ?? { article: [] };
  
  // Add null checks and defensive programming
  if (!article || article.length === 0) {
    return <div>Loading...</div>;
  }

  // Safely access content with fallback
  const content = article[0]?.content ?? '';

  const { article2 } = await getKbArticlesByCode2(currentLanguage === "MNG" ? "Projects-MNG" : "Projects");

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
