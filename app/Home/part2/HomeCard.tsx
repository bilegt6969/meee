import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import HomeCardCount from "./HomeCardCount";
import { getKbArticlesByCode } from "@/lib/kb";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function HomeCard() {
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get("language")?.value ?? "ENG";

  // Your conditional content
  const { article } = await getKbArticlesByCode("HomePage");
  const Element = article.filter((item) => (item as any).code === (currentLanguage === "MNG" ? "1.1-MNG" : "1.1"));
  const Element2 = article.filter((item) => (item as any).code === (currentLanguage === "MNG" ? "1.5-MNG" : "1.5"));
  const Element3 = article.filter((item) => (item as any).code === "1.6");

  // Get language from cookies
  

  const rawContent = Element3[0].content.replace(/<\/?[^>]+(>|$)/g, "");
  const parsedContent = JSON.parse(rawContent);

  return (
    <div className="bg-[#f0f0f0] px-0 sm:px-0 py-8 pmd:py-12 lg:py-16">
      <section className="px-2 sm:px-6 md:px-12 xl:px-24">
        <div
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-bold uppercase"
          dangerouslySetInnerHTML={{ __html: Element[0].content }}
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-16 px-2 sm:px-6 md:px-12 xl:px-24">
        <HomeCardCount content={parsedContent} />

        <div className="lg:w-1/3 w-full px-2 sm:px-6 md:px-12 lg:px-0 flex flex-col justify-center space-y-4 md:pr-24">
          <div
            className="text-base sm:text-lg md:text-xl text-left text-black "
            dangerouslySetInnerHTML={{ __html: Element2[0].content }}
          />
          <div className="text-left mt-4">
            {/* <Link href="/contact-us">
              <Button
                className="text-blue-500 px-8 py-4 text-lg items-center justify-center"
                variant="outline"
              >
                Write us
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
