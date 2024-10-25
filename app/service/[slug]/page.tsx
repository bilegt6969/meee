import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import CarouselComponent from "../../Components/Carousel/page";
import Body from "./body";
import { getKbArticlesByCode } from "@/lib/kb";
import { getKbArticlesByCode2 } from "@/lib/kb2";
export const revalidate = 1;

// Define the interface for the expected data structure
interface DataType {
  title: {
    heading: string;
    description: string;
  };
  body: Array<any>; // You can replace 'any' with the specific structure if known
}

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object
  const { slug } = await params;

  const { article } = await getKbArticlesByCode(String(slug));
  const { article2 } = await getKbArticlesByCode2(String(slug) + ".Steps");

  const ImageUrl = article?.[0]?.image?.url
    ? `https://khas-dayan.api.erxes.io/api/read-file?key=erxes-saas/${article[0].image.url}`
    : '/1.png';

  console.log(slug);

  return (
    <div className="text-white custom-gradient mt-[-4rem] relative">
      {/* Hero Section */}
      <section className="relative w-full h-screen mx-[4px] md:mx-2 border-white border-[4px] border-r-0 md:border-r-8 border-t-0 md:border-8 md:border-t-0 rounded-3xl rounded-t-none rounded-br-none md:rounded-br-3xl md:rounded-bl-none bg-white">
        <Image
          src="/bgimg.png"
          alt="Heating Plant"
          fill
          className="rounded-b-3xl object-cover rounded-br-none md:rounded-br-3xl "
          style={{ filter: "brightness(50%)" }} // Darken the image for better text readability
        />

        {/* Main Heading Section */}
        <div className="absolute top-1/2 lg:right-0 transform -translate-y-1/2 w-full md:w-4/5 lg:w-[60%] xl:w-1/2 flex flex-col space-y-4 md:space-y-8 text-left p-4 md:p-8">
          {article && (
            <>
              <h1 className="text-white text-left text-5xl sm:text-6xl md:text-8xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight max-w-2xl">
                {article[0].title}
              </h1>
              <div
                className="text-white text-left text-base md:text-lg lg:text-xl font-normal max-w-xl"
                dangerouslySetInnerHTML={{ __html: article[0].content }}
              />
            </>
          )}
          <Button className="mt-4 md:mt-8 w-fit bg-blue-800 hover:bg-blue-900 text-white rounded-xl">
            Write us
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
        </div>

        {/* "Be Part" Section */}
        {/* "Be Part" Section */}
        <div className="absolute bottom-16 right-0 hidden md:flex items-start transform translate-x-1/2 md:translate-x-0 w-full lg:w-[60%] xl:w-1/2 text-left px-4 md:px-8 text-white  md:text-lg lg:text-xl font-light">
          <p className="text-left max-w-xl">
            BE PART OF THE GLOBAL SHIFT TOWARDS CLEAN, SUSTAINABLE ENERGY
            SOURCES
          </p>
          <Button className="bg-transparent hover:bg-white hover:text-black transition-color duration-300 text-white rounded-xl mt-4">
            Explore more
            <ArrowDown className="w-6 h-6 ml-4" />
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <Body slug={slug} />

      {/* Conditional Section based on body length */}
      <section
        className={`md:ml-2 md:mt-0 mt-1 ml-1  pt-9 bg-[#f0f0f0] ${article && article.length % 2 === 0 ? "rounded-tl-3xl" : "rounded-tl-none rounded-tr-3xl lg:mr-0"}`}
      >
        <div className="mt-8 md:mt-16 pb-16 md:pb-24 px-4 md:px-8 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800">
            Work Process
          </h1>
          <p className="text-black mt-4 md:mt-8 text-lg md:text-xl max-w-3xl mx-auto">
            With Valmet’s proven technology, you can produce heat in a
            sustainable way...
          </p>

          {/* Using grid here for layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 justify-between mt-8 px-18">
            {article2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-black"
              >
                <Image
                  src={ImageUrl}
                  width={200}
                  height={200}
                  alt={item._id}
                  className="w-auto h-auto"
                />
                <h1 className="text-2xl text-blue-800 font-semibold mt-4">
                  {item.title}
                </h1>
                <p className="max-w-[17rem] text-center font-light">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heating Plant Projects Section */}
      <section className="px-4 md:px-16 pt-16 w-full bg-white mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800">
          HEATING PLANT PROJECTS
        </h1>
        <div className="mt-8">
          <CarouselComponent />
        </div>
      </section>

      <div className="pb-36 custom-gradient"></div>
    </div>
  );
}
