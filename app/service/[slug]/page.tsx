import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Body from "./body";
import { getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";
import { cookies } from 'next/headers';

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get('language')?.value ?? 'MNG';
  const { article } = await getKbArticlesByCode(String(slug + (currentLanguage === "MNG" ? "Data-MNG" : "Data")));
  const Heading = article.filter((item: any) => item.code === slug + (currentLanguage === "MNG" ? "_Heading-MNG" : "_Heading"));
  const NotHeading = article.filter((item: any) => item.code !== slug + (currentLanguage === "MNG" ? "_Heading-MNG" : "_Heading"));
  const { article2 } = await getKbArticlesByCode2(String(slug) + ".Steps");
  const HEADING = article2.filter((item) => item.code === "Heading-" + slug)
  const Steps = article2.filter((item) => item.code !== "Heading-" + slug);

  console.log(HEADING)

  let Alength = Steps.length

  // Create a new array and sort it based on the step number extracted from the code
  const sortedArticle2 = [...Steps].sort((a, b) => {
    const stepA = parseInt(a.code.replace(/\D/g, '')); // Extract step number
    const stepB = parseInt(b.code.replace(/\D/g, '')); // Extract step number
    return stepA - stepB; // Sort in ascending order
  });

  const ImageUrl = Heading?.[0]?.image?.url
    ? `https://khas-dayan.api.erxes.io/api/read-file?key=${Heading[0].image.url}`
    : '/1.png';

  return (
    <div className="text-white custom-gradient mt-[-4rem] relative">
      {/* Hero Section */}
      <section className="relative w-full h-screen mx-[4px] md:mx-2 border-white border-[4px] border-r-0 md:border-r-8 border-t-0 md:border-8 md:border-t-0 rounded-3xl rounded-t-none rounded-br-none md:rounded-br-3xl md:rounded-bl-none bg-white">
        <Image
          src={ImageUrl}
          alt="Heating Plant"
          layout="fill"
          loading="lazy"
          objectFit="cover"
          className="rounded-b-3xl sm:rounded-br-3xl rounded-br-none"
          style={{ filter: 'brightness(50%)' }} // Darken the image for better text readability
        />

        {/* Main Heading Section */}
        <div className="absolute top-1/2 lg:right-0 transform -translate-y-1/2 w-full md:w-4/5 lg:w-[60%] xl:w-1/2 flex flex-col space-y-4 md:space-y-8 text-left p-4 md:p-8">
          {article && (
            <>
              <h1 className="text-white text-left text-5xl sm:text-6xl md:text-8xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight max-w-2xl">
                {Heading[0].summary}
              </h1>
              <div
                className="text-white text-left text-base md:text-lg lg:text-xl font-normal max-w-xl"
                dangerouslySetInnerHTML={{ __html: Heading[0].content }}
              />
            </>
          )}
          <Button className="mt-4 md:mt-8 w-fit bg-blue-800 hover:bg-blue-900 text-white rounded-xl">
            Write us
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
        </div>

        {/* "Be Part" Section */}
        <div className="absolute bottom-16 right-0 hidden md:flex items-start transform translate-x-1/2 md:translate-x-0 w-full lg:w-[60%] xl:w-1/2 text-left px-4 md:px-8 text-white md:text-lg lg:text-xl font-light">
          <p className="text-left max-w-xl">
            {currentLanguage === "MNG" ? "ДЭЛХИЙН ЦЭВЭР, ТОГТВОРТОЙ ЭРЧИМ ХҮЧНИЙ ЭХ ҮҮСВЭР ЭРҮҮЛЭХ ДЭЛХИЙН ХЭСЭГ БОЛООРОЙ." : "BE PART OF THE GLOBAL SHIFT TOWARDS CLEAN, SUSTAINABLE ENERGY SOURCES"}
          </p>
        </div>
      </section>

      {/* Info Section */}
      <Body slug={slug} />

      {/* Conditional Section based on body length */}
      <section
        className={`md:ml-2 md:mt-0 mt-1 ml-1 pt-9 bg-[#f0f0f0] ${NotHeading && NotHeading.length % 2 === 0 ? "rounded-tl-3xl" : "rounded-tl-none rounded-tr-3xl lg:mr-0"}`}
      >
        <div className="mt-8 md:mt-16 pb-16 md:pb-24 px-4 md:px-8 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800">
            {currentLanguage === "MNG" ? "Ажлын Үйл Явц" : "Work Process"}
          </h1>
          <p className="text-black mt-4 md:mt-8 text-lg md:text-xl max-w-3xl mx-auto">
            {currentLanguage === "MNG" ? <span dangerouslySetInnerHTML={{ __html: HEADING[0].content }} /> : HEADING[0].summary}
          </p>

          {/* Using grid here for layout */}
          <div className={`grid grid-cols-1 sm:grid-cols-${Alength} md:grid-cols-${Alength} justify-between mt-8 px-18`}>
            {sortedArticle2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-black"
              >
                <Image
                  src={ImageUrl}
                  width={200}
                  height={200}
                  alt={item._id}
                  loading="lazy"
                  className="w-auto h-auto"
                />
                <h1 className="text-2xl text-blue-800 font-semibold mt-4">
                  {item.title}
                </h1>
                <p className="max-w-[17rem] text-center font-light">
                  {currentLanguage === "MNG" ? 
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                    : 
                    item.summary
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
