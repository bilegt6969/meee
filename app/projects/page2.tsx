import React from "react";
import CounterSection from "./components/CounterSection";
import { getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";
import { cookies } from 'next/headers';


// Define the IAttachment interface if not already defined
interface IAttachment {
  url?: string;
}

// Define the structure of your article items
interface ArticleItem {
  _id: string;
  code: string;
  title: string;
  summary: string;
  content: string;
  createdDate: string;
  forms: any[];
  form: string;
  image?: IAttachment;
  attachments?: IAttachment[];
}

// Define the Statistic type that CounterSection expects
interface Statistic {
  summary: string;
  content?: string;
  [key: string]: any;
}

export default async function Page() {
  const {article} = await getKbArticlesByCode("PROJECTS");
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get('language')?.value ?? 'MNG';
  const {article2} = await getKbArticlesByCode2('a');

  const Heading = article.filter((item) => item.code === "Heading")[0];
  const HeadingMNG = article.filter((item) => item.code === "Heading-MNG")[0];

  const Statistic_1 = article.filter((item) => item.code === "Statistic_1")[0];
  const Statistic_2 = article.filter((item) => item.code === "Statistic_2")[0];
  const Statistic_3 = article.filter((item) => item.code === "Statistic_3")[0];

  // Create clean statistic objects with only the needed properties
  const cleanStatistics = {
    Statistic_1: {
      summary: Statistic_1?.summary || '',
      content: Statistic_1?.content || ''
    },
    Statistic_2: {
      summary: Statistic_2?.summary || '',
      content: Statistic_2?.content || ''
    },
    Statistic_3: {
      summary: Statistic_3?.summary || '',
      content: Statistic_3?.content || ''
    }
  };

  return (
    <div className="h-full w-full custom-gradient mt-[-4rem]">
      <section className="relative top-[-4rem] flex-grow flex h-screen">
        <div className="items-end flex">
          <div className="relative bottom-[-4rem] left-3 px-6 mx:px-8 sm:px-12 md:px-12 pt-6 md:pt-12 w-full max-w-[80%] md:w-[40%] rounded-t-2xl rounded-tr-2xl bg-[#f0f0f0] flex flex-col justify-between">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[#1845AD]" 
                 dangerouslySetInnerHTML={{ __html: currentLanguage === 'MNG' ? HeadingMNG.summary || '' : Heading.summary || '' }} />
            
            <div className="mt-6 font-light text-black leading-relaxed px-2" dangerouslySetInnerHTML={{ __html: currentLanguage === 'MNG' ? HeadingMNG.content || '' : Heading.content || '' }} />

          </div>
          <div className="bevel4"></div>

          <CounterSection statistics={cleanStatistics} />
        </div>
      </section>

      <section className="">
      </section>
    </div>
  );
}
