import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Card from "./Videocard";
import { getKbArticlesByCode } from "@/lib/kb";
import { getClient } from "@/lib/ssClient";
import { queries } from "@/app/graphql/kb";
import Link from "next/link";
import Carpage from './carpage'


export default async function VideoPage() {

  

  const { article } = await getKbArticlesByCode("Cola");
  const Element = article.filter((item) => item.code === "0623");
  const HomeElement = article.filter((item) => item.code === "HomeContent");

  return (
    <div className="flex items-center justify-center border-white md:border-r-8 mt-[-4rem] bg-[#f0f0f0]">
      <div className="relative w-full h-screen lg:h-full overflow-hidden clip-corner">
      <Carpage/>
      {/* Content Overlay */}
        <div className="absolute -bottom-2 -right-2 w-[99%] md:w-2/3 lg:w-3/6 xl:w-1/3 h-fit custom-gradient p-6 text-white border-[#F0F0F0] border-[0.5rem] rounded-3xl">
          {/* Decorative Elements */}
          <div className="bevel-inverted"></div>
          <div className="bevel"></div>
          <div className="bevel2-inverted"></div>
          <div className="bevel2"></div>

          <h1 className="text-4xl font-bold uppercase mb-2">
            {Element[0].title}
          </h1>
          <div
            className="font-thin mb-6"
            dangerouslySetInnerHTML={{ __html: Element[0].content }}

          />

          <div className="flex items-center w-full">
            <Link href="/contact-us">
            <Button
              className="text-blue-500 px-8 py-4 text-lg items-center justify-center"
              variant="outline"
            >
              Write us
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
