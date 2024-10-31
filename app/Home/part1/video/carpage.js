import React from 'react'
import { getKbArticlesByCode } from '@/lib/kb'
import VideoPlayer from './Videocard'
import Photocard from './Photocard'

export default async function Carpage() {
    const {article} = await getKbArticlesByCode("Cola");
    const HomeContent = article.filter((item) => item.code === "HomeContent");
    console.log(HomeContent[0].image.url);
  return (
    <div className="h-screen w-screen relative">
        {
            HomeContent[0]?.image?.url ? <Photocard HomeElement={HomeContent[0]} /> : <VideoPlayer HomeElement={HomeContent[0]} />
        }
        {
            HomeContent[0]?.video?.url ? <VideoPlayer HomeElement={HomeContent[0]} /> : <Photocard HomeElement={HomeContent[0]} />
        }
    </div>
  )
}
