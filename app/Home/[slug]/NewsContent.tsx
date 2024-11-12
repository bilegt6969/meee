import React from 'react';
import Image from 'next/image';
import { CalendarIcon } from "@heroicons/react/24/solid";
import { getKbArticlesByCode } from "@/lib/kb";
import { cookies } from "next/headers";


// Separate data fetching component
async function getNewsData(slug: string) {
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get("language")?.value ?? "MNG";
  const articles = await getKbArticlesByCode(currentLanguage==="MNG" ? "News-MNG" : "News");
  return articles.article.find((item) => item._id === slug);
}

export default async function NewsContent({ slug }: { slug: string }) {
  const IndividualNews = await getNewsData(slug);

  if (!IndividualNews) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{IndividualNews.title}</h1>
        <div className="flex items-center text-gray-500 mb-4">
          <CalendarIcon className="h-5 w-5 mr-2" />
          {new Date(IndividualNews.createdDate || IndividualNews._id).toLocaleDateString()}
        </div>
        <div className="relative w-full aspect-[16/9] mb-6">
          <Image
            src={IndividualNews.image?.url 
              ? `https://khas-dayan.api.erxes.io/api/read-file?key=${IndividualNews.image.url}` 
              : '/placeholder.jpg'
            }
            alt={IndividualNews.title || 'News Image'}
            loading="lazy"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
          />
        </div>
        <div 
          className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: IndividualNews.content }} 
        />
      </div>
    </div>
  );
} 