import React from "react";
import { MapPin, Calendar, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import Image from "next/legacy/image";
import { getKbArticlesByCode } from "@/lib/kb";

// Define Promise types for Next.js 15
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  date: string;
  catCode: string;
}>;

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

export default async function Page({ params, searchParams }: PageProps) {
  // Await both params and searchParams
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Destructure the resolved values
  const { title, summary, content, imageUrl, date, catCode } = resolvedSearchParams;
  const { id } = resolvedParams;

  // Fetch the article data
  const { article } = await getKbArticlesByCode(catCode);

  console.log(article.length);


  return (
    <div className="custom-gradient bg-gray-100 md:p-2 mr-1">
      <section className="h-full">
        <div className="flex flex-col md:flex-row gap-2">
          {/* Left Section */}
          <div className="md:w-2/5 flex flex-col">
            {/* Project Title */}
            <div className="mb-2 bg-white p-4 md:p-16 rounded-xl shadow-lg">
              <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase">
                {title}
              </h1>
              <p className="font-normal text-black">Fit-Out Project</p>
            </div>

            {/* Location, Year, and Project Description */}
            <div className="bg-white p-4 md:p-16 rounded-xl shadow-lg flex flex-col space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="border rounded-xl p-3">
                    <MapPin className="text-blue-800 h-6 w-6" />
                  </div>
                  <p className="font-normal text-black">
                    {summary}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="border rounded-xl p-3">
                    <Calendar className="text-blue-800 h-6 w-6" />
                  </div>
                  <p className="font-normal text-black">{date ? new Date(date).toLocaleDateString() : 'N/A'}</p>
                </div>
              </div>

              <div className="font-light mt-8 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-3/5 flex-grow bg-white p-4 md:p-6 rounded-xl relative">
            <div className="relative w-full h-64 md:h-full bg-white rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="mx-auto mt-2">
        <div className="bg-white rounded-2xl p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 hover:text-blue-500">
            {article.map((item) => (
              <div
                key={item._id}
                className="relative hover:text-blue-500 group w-full h-0 pb-[90%] overflow-hidden border-[2vh] rounded-3xl border-[#F5F5F5] lalar"
              >
                {/* Image */}
                <Image
                  src={item.image?.url ? `https://khas-dayan.api.erxes.io/api/read-file?key=${item.image.url}` : '/placeholder.jpg'}
                  alt={item.title}
                  layout="fill" // Use fill to cover the square area
                  objectFit="cover" // Cover the area while maintaining aspect ratio
                  className="transition-transform duration-300 group-hover:scale-105 ring-4" // Updated line
                />

                {/* Overlay Text and Icon */}
                <div className="absolute inset-0 flex flex-col justify-between p-0 rounded-xl">
                  <div className="flex items-center justify-end ">
                    <div className="bevel13"></div>
                    <div className="bg-[#F5F5F5] pl-3 pb-3 rounded-bl-2xl">
                      <div className="bg-[#f5f5f5] group-hover:bg-blue-800 transition-colors duration-250 group-hover:border-blue-800 p-1 rounded-full border-gray-300 border-1">
                        <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </div>
                    </div>
                  </div>

                  

                  <div className="relative flex">
                    <div className="flex-col w-full">
                      <div className="bevel15"></div>
                      <div className="flex items-end">
                        <div className="bg-[#f5f5f5] w-4/6 rounded-tr-2xl flex p-2 pb-0 pl-0">
                          <p className="text-gray-800 font-semibold ">
                            {item.title}
                            <br />
                            {item.title}
                          </p>
                        </div>
                        <div className="bevel14"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
