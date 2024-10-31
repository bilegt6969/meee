import React from "react";
import { getKbArticlesByCode } from "@/lib/kb";
export const revalidate = 1;
import Image from "next/image";
import { CheckIcon } from "lucide-react"; // Importing CheckIcon from lucide-react

interface BodyProps {
  slug: string;
}

export default async function Body({ slug }: BodyProps) {
  const { article } = await getKbArticlesByCode(slug + "Data");
  const NotHeading = article.filter((item: any) => item.code !== slug + "_Heading");
  const lastItem = NotHeading.length - 1;

  function renderContentWithIcons(contentHtml: string) {
    const paragraphRegex = /<p>(.*?)<\/p>/g;
    const matches = [];
    let match;

    while ((match = paragraphRegex.exec(contentHtml)) !== null) {
      // Remove all HTML tags from the captured text
      const textContent = match[1].replace(/<[^>]+>/g, "");
      matches.push(textContent);
    }

    return matches.map((text, index) => (
      <li key={index} className="flex items-center">
        <div className="mr-2">
          <CheckIcon className="w-4 h-4" />
        </div>
        <div className="text-left">{text}</div>
      </li>
    ));
  }



  return (
    <div>
      {NotHeading &&
        NotHeading.map((item, index) => {
          const imageUrl = item?.image?.url
            ? `https://khas-dayan.api.erxes.io/api/read-file?key=${item.image.url}`
            : "/1.png";
          if (index === 0 && index !== lastItem) {
            return (
              // img | text
              <section key={item._id} className="mt-[-0.5rem] md:mt-[-0.5rem]">
                <div className="md:mx-2 ml-1 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row w-full">
                    {/* Left Side (Image Section) */}
                    <div className="flex w-full md:w-1/2 items-stretch">
                      <div className="w-full border-[#f0f0f0] md:border-white rounded-3xl md:rounded-b-3xl rounded-b-none md:rounded-t-none bg-[#f0f0f0] md:bg-white flex-grow">
                        <Image
                          width={900}
                          height={900}
                          alt="Heating Facility"
                          className="w-full h-full object-cover rounded-3xl md:rounded-tr-3xl rounded-tr-none  border-4 md:border-8 border-[#f0f0f0] md:border-white"
                          src={imageUrl}
                        />
                      </div>
                    </div>
                    <div className="bevel6 md:block hidden"></div>

                    {/* Right Side (Text Section) */}
                    <div className="flex w-full md:w-1/2 text-left mt-0 md:mt-2 max-w-4xl lg:pt-0 flex-grow bg-[#f0f0f0] rounded-b-3xl md:rounded-b-none text-black md:bg-transparent md:text-white rounded-bl-none md:rounded-bl-3xl">
                      <div className="px-3 pb-4 py-4 md:px-8 md:pb-0 md:py-8 flex flex-col h-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-xl">
                          {item.title}
                        </h1>
                        <p className="text-base mt-4 md:text-xl leading-7 font-thin">
                          {item.summary}
                        </p>
                        <ul className="mt-8 md:mb-6 space-y-2 text-base md:text-xl font-thin">
                          {renderContentWithIcons(item.content)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          if (index !== 0 && index % 2 === 1 && index !== lastItem) {
            return (
              // text | img
              <section
                key={item._id}
                className="flex flex-col md:flex-row space-x-0 md:space-x-0 mt-2 mx-1 md:mx-2 w-full rounded-tl-none md:rounded-tl-3xl bg-[#f0f0f0] md:bg-transparent md:text-white text-black md:rounded-none rounded-3xl"
              >
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                    {item.title}
                  </h1>
                  <p className="text-base md:text-xl leading-7 font-thin">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {renderContentWithIcons(item.content)}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 border-[#f0f0f0] md:border-white rounded-3xl md:rounded-b-3xl rounded-b-3xl md:rounded-t-3xl bg-[#f0f0f0] md:bg-white flex-grow">
                  <Image
                    width={900}
                    height={900}
                    alt="Heating Facility"
                    className="w-full h-full object-cover rounded-3xl rounded-br-none md:rounded-br-3xl border-4 md:border-8 border-[#f0f0f0] md:border-white"
                    src="/img-76.png"
                  />
                </div>
              </section>
            );
          }

          if (index !== 0 && index % 2 === 0 && index !== lastItem) {
            return (
              // img | text
              <section
                key={item._id}
                className="flex flex-col md:flex-row space-x-0 md:space-x-0 mt-2 mx-1 md:mx-2 w-full rounded-tl-none md:rounded-tl-3xl bg-[#f0f0f0] md:bg-transparent md:text-white text-black md:rounded-none rounded-3xl"
              >
                <div className="w-full md:w-1/2 border-[#f0f0f0] md:border-white rounded-3xl md:rounded-b-3xl rounded-b-3xl md:rounded-t-3xl bg-[#f0f0f0] md:bg-white flex-grow">
                  <Image
                    width={900}
                    height={900}
                    alt="Heating Facility"
                    className="w-full h-full object-cover rounded-3xl rounded-br-none md:rounded-br-3xl border-4 md:border-8 border-[#f0f0f0] md:border-white"
                    src="/img-76.png"
                  />
                </div>
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
                    {item.title}
                  </h1>
                  <p className="text-base md:text-xl leading-7 font-thin">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {renderContentWithIcons(item.content)}
                  </ul>
                </div>
              </section>
            );
          }
          if (index === lastItem && index % 2 === 0 && index !== 0) {
            return (
              // img | text
              <section key={item._id} className="-mt-2 md:mt-1 ml-1 md:ml-0">
                <div className="md:mx-2 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row w-full items-stretch">
                    <div className="items-end flex flex-col md:flex-row relative">
                      {/* Left Side (Image Section) */}
                      <div className="flex w-full md:w-1/2 h-full items-stretch">
                        <div className="w-full border-[#f0f0f0] md:border-white rounded-3xl rounded-tr-none md:rounded-tr-3xl rounded-b-none bg-[#f0f0f0] md:bg-[#f0f0f0] flex-grow h-full">
                          <Image
                            width={900}
                            height={900}
                            alt="Heating Facility"
                            className="w-full h-full object-cover rounded-3xl border-4 md:border-8 rounded-tr-none md:rounded-tr-3xl border-b-2 border-[#f0f0f0] md:border-[#f0f0f0]"
                            src="/img-76.png"
                          />
                        </div>
                      </div>

                      <div className="bevel8 md:block hidden"></div>

                      {/* Right Side (Text Section) */}
                      <div className="flex w-full md:w-1/2 rounded-bl-none md:rounded-bl-3xl h-full text-left mt-0 md:mt-2 max-w-4xl lg:pt-0 flex-grow bg-[#f0f0f0] rounded-b-3xl md:rounded-b-none text-black md:bg-transparent md:text-white">
                        <div className="px-3 pb-4 py-4 md:px-8 md:pb-0 md:py-8 flex flex-col h-full">
                          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-xl">
                            {item.title}
                          </h1>
                          <p className="text-base mt-4 md:text-xl leading-7 font-thin">
                            {item.summary}
                          </p>
                          <ul className="mt-8 md:mb-6 space-y-2 text-base md:text-xl font-thin">
                            {renderContentWithIcons(item.content)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          if (index === lastItem && index % 2 === 1) {
            return (
              // img | text
              <section
                key={item._id}
                className="-mt-2 md:mt-1 ml-1 md:ml-0 w-full"
              >
                <div className="md:mx-0 mt-4 md:mt-0 w-full">
                  <div className="flex flex-col md:flex-row w-full items-stretch">
                    <div className="flex flex-col md:flex-row w-full items-end">
                      {/* Left Side (Text Section) */}
                      <div className="flex w-full md:w-1/2 h-full text-left mt-0 md:mt-2 max-w-full lg:pt-0 flex-grow bg-[#f0f0f0] rounded-tr-3xl md:rounded-tr-none text-black md:bg-transparent md:text-white ">
                        <div className="px-3 pb-4 py-4 md:px-8 md:pb-0 md:py-8 flex flex-col h-full">
                          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-xl">
                            {item.title}
                          </h1>
                          <p className="text-base mt-4 md:text-xl leading-7 font-thin">
                            {item.summary}
                          </p>
                          <ul className="mt-8 md:mb-6 space-y-2 text-base md:text-xl font-thin">
                            {renderContentWithIcons(item.content)}
                          </ul>
                        </div>
                      </div>

                      {/* Bevel Divider */}
                      <div className="bevel10 hidden md:block"></div>

                      {/* Right Side (Image Section) */}
                      <div className="flex w-full md:w-1/2 h-full">
                        <div className="w-full h-full border-[#f0f0f0] md:border-white rounded-3xl rounded-t-none md:rounded-t-3xl rounded-bl-3xl md:rounded-bl-none rounded-b-none  bg-[#f0f0f0] md:bg-[#f0f0f0] flex-grow">
                          <Image
                            width={900}
                            height={900}
                            alt="Heating Facility"
                            className="w-full h-full object-cover rounded-3xl border-4 md:border-8 rounded-tr-none md:rounded-tr-3xl border-b-2 border-[#f0f0f0] md:border-[#f0f0f0]"
                            src={imageUrl}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          if(index === lastItem && index === 0){
            return (
              <section key={item._id} className="mt-[-0.5rem] md:mt-[-0.5rem]">
                <div className="md:mx-2 ml-1 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row w-full">
                    {/* Left Side (Image Section) */}
                    <div className="flex w-full md:w-1/2 items-stretch">
                      <div className="w-full  border-[#f0f0f0] md:border-[#f0f0f0] rounded-3xl rounded-b-none md:rounded-t-none bg-[#f0f0f0] md:bg-[#f0f0f0] flex-grow">
                        <Image
                          width={900}
                          height={900}
                          alt="Heating Facility"
                          className="w-full h-full object-cover rounded-3xl md:rounded-tr-3xl rounded-tr-none  border-4 md:border-8 md:border-b-2 border-[#f0f0f0] md:border-[#f0f0f0]"
                          src="/img-76.png"
                        />
                      </div>
                    </div>
                    <div className="bevel6 md:block hidden"></div>

                    {/* Right Side (Text Section) */}
                    <div className="flex w-full md:w-1/2 text-left mt-0 md:mt-2 max-w-4xl lg:pt-0 flex-grow bg-[#f0f0f0] rounded-b-3xl md:rounded-b-none text-black md:bg-transparent md:text-white rounded-bl-none md:rounded-bl-3xl">
                    <div className="flex-col">

                      <div className="px-3 pb-4 py-4 md:px-8 md:pb-0 md:py-8 flex flex-col h-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-xl">
                          {item.title}
                        </h1>
                        <p className="text-base mt-4 md:text-xl leading-7 font-thin">
                          {item.summary}
                        </p>
                        <ul className="mt-8 md:mb-6 space-y-2 text-base md:text-xl font-thin">
                            {renderContentWithIcons(item.content)}
                          </ul>
                      </div>
                      <div className="bevel11 md:block hidden"></div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>
            )

          }
        })}
    </div>
  );
}
