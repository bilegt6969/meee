import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import HomeCardCount from './HomeCardCount'; // Import the client-side component
import { getKbArticlesByCode } from "@/lib/kb";

export const revalidate = 1;

export default async function HomeCard() {
  const { article } = await getKbArticlesByCode("Cola");

  // Extract the content as a string and remove HTML tags
  const rawContent = article[1].content.replace(/<\/?[^>]+(>|$)/g, "");

  // Parse the array from the string (assumes format "[100, 30000, 50]")
  const parsedContent = JSON.parse(rawContent);

  return (
    <div className="bg-[#f0f0f0] px-0 sm:px-0 py-8 pmd:py-12 lg:py-16">
      <section className="text-left px-2 sm:px-6 md:px-12 xl:px-36">
        <div
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase"
          dangerouslySetInnerHTML={{ __html: article[1].content }}
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-16 px-2 sm:px-6 md:px-12 xl:px-36">
        {/* Pass the parsed array to HomeCardCount */}
        <HomeCardCount content={parsedContent} />

        <div className="lg:w-1/3 w-full px-2 sm:px-6 md:px-12 lg:px-0 flex flex-col justify-center space-y-4 md:pr-24">
          <div className="text-base sm:text-lg md:text-xl text-left"           dangerouslySetInnerHTML={{ __html: article[0].content }}/>
          <div className="text-left mt-4">
            <Button
              className="text-blue-500 hover:text-blue-700 text-lg md:text-xl p-4 md:p-6 border-blue-600 px-8 md:px-12"
              variant="outline"
            >
              Write us
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
