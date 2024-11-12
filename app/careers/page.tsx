import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getKbArticleDetail, getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";
import { getKbArticlesByCode3 } from "@/lib/kb3";
import { cookies } from 'next/headers';

// Update the interface definition
interface IArticle2 {
  code?: string; // Make code optional
  content: string;
}

interface IArticle3 {
  code?: React.ReactNode;
  content: string;
}

export default async function Page() {
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get('language')?.value ?? 'MNG';

  const { article } = await getKbArticlesByCode("CAREERS/HOME");
  const { article2 }: { article2: IArticle2[] } = await getKbArticlesByCode2(currentLanguage === "MNG" ? "Careers/body-MNG" : "Careers/body");
  const { article3 }: { article3: IArticle3[] } = await getKbArticlesByCode3(currentLanguage === "MNG" ? "Careers-MNG" : "Careers");

  const Element = article.filter((item) => (item as any).code === (currentLanguage === "MNG" ? "Careers-MNG" : "Careers"));

  // Add null check for Element
  const ImageUrl = Element.length > 0 && Element[0]?.image?.url 
    ? `https://khas-dayan.api.erxes.io/api/read-file?key=${Element[0].image.url}`
    : '/fallback-image.jpg'; // Replace with your fallback image path

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <Image
          width={1920}
          height={1080}
          src={ImageUrl}
          loading="lazy"
          alt="Background image"
          className="relative h-screen -top-16 w-full object-cover brightness-50"
        />
        <div className="absolute top-1/3 left-5 md:left-[10%] text-left">
          <div className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 text-white uppercase" dangerouslySetInnerHTML={{ __html: Element.length > 0 ? Element[0].title : '' }} />
          <div className="font-thin max-w-[85%] md:max-w-[70%] lg:max-w-[40%] text-base md:text-lg text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: Element.length > 0 ? Element[0].content : '' }} />
        </div>
      </section>

      {/* Dynamic Sections */}
      <section className="bg-[#f0f0f0] mt-[-4rem] text-black py-16 md:py-32 px-4 space-y-16">
        <div className="mx-auto max-w-7xl space-y-16">
          {article3 && article2 && article3.map((item3, index) => {
            const item2 = article2.find(i => (currentLanguage === "MNG" ? (i.code === item3.code?.toString().replace("-mng", "") + '_body-MNG') : (i.code === item3.code + '_body') ));
            if (item2) {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8"
                >
                  <div className="text-left flex flex-col items-center md:items-start md:w-1/2">
                    <div className="text-3xl md:text-5xl font-extrabold" dangerouslySetInnerHTML={{ __html: item3.content ?? '' }} />
                  </div>
                  <div className="text-base md:text-lg text-left md:w-1/2" dangerouslySetInnerHTML={{ __html: item2.content ?? '' }} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Footer Spacer */}
    </div>
  );
}
