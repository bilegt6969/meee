'use client';
import React, { useEffect, useState } from "react"; // Importing React and hooks
import Image from "next/image"; // Importing Next.js Image component
import { CheckIcon } from "lucide-react"; // Importing CheckIcon from lucide-react
import { useParams } from 'next/navigation'; // Importing useParams from next/navigation

// Define the shape of the Heating Plant Data
interface HeatingPlantItem {
  id: number; // Ensure id is a number
  heading: string;
  description: string;
  list: (string | number | boolean)[];
}

interface HeatingPlantData {
  body: HeatingPlantItem[];
}

function Body() {
  const { slug } = useParams(); // Getting the slug from the URL
  const [heatingPlantData, setHeatingPlantData] = useState<HeatingPlantData | null>(null); // Set state to hold heating plant data

  useEffect(() => {
    // Dynamically import the HeatingPlant data based on the slug
    const loadHeatingPlantData = async () => {
      try {
        const HeatingPlant = await import(`@/lib/datas/${slug}`);
        setHeatingPlantData(HeatingPlant.default || HeatingPlant); // Adjust based on how you export HeatingPlant
      } catch (error) {
        console.error("Error loading heating plant data:", error);
      }
    };

    loadHeatingPlantData();
  }, [slug]); // Dependency array to run the effect when slug changes

  // Optionally render loading state or error handling here
  if (!heatingPlantData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Mapping over the heatingPlantData.body array to create sections for each item */}
      {heatingPlantData.body.map((item, index) => {
        const isLastItem = index === heatingPlantData.body.length - 1; // Checking if the current item is the last in the array

        // Special case: both last item and id === 1
        if (isLastItem && item.id === 1) {
          return (
            <section className="w-full mt-[0rem]">
        <div className="mx-2 -mb-2">
          <div className="flex flex-col md:flex-row text-center space-x-0 w-full h-full">
          <div className="flex w-1/2">
            <div className=" border-[#f0f0f0] mt-[-0.5rem] rounded-tr-none rounded-b-none rounded-tl-none bg-[#f0f0f0]">
            <Image
              width={900}
              height={900}
              alt="Heating Facility"
              className="w-full h-full rounded-3xl border-[#f0f0f0] border-8"
              src="/img-76.png"
            />
            </div>
            <div className="bevel6"></div>
            </div>

            

            <div className="flex items-end md:w-1/2">
            <div className="bevel11"></div>

            <div className="text-left mt-2  md:p-8 ">
              <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{item.heading}</h1>
              <p className="text-base md:text-xl leading-7 font-thin">
              {item.description}
              </p>
              <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="mr-2" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                  
            </div>
            </div>

            
            
          </div>
        </div>
      </section>
          );
        }

        // For even id items
        if (item.id % 2 === 0) {
          if (isLastItem) {
            // For the last even item
            return (
              <section className="w-full flex flex-col md:flex-row space-x-0 mt-2" key={item.id}>
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{item.heading}</h1>
                  <p className="text-base md:text-xl leading-7 font-thin">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="mr-2" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 items-end flex">
                <div className="bevel9"></div>
                <div className="bevel10"></div>

                <div className="bg-[#f0f0f0] rounded-3xl rounded-br-none w-full">
                <Image
                  width={700}
                  height={700}
                  alt="Maintenance Services"
                  className="w-full  border-[#f0f0f0] bg-white rounded-3xl border-8"
                  src="/1.png"
                />
                </div>
                </div>
              </section>
            );
          } else {
            // For non-last even items
            return (
              <section key={item.id} className="flex flex-col md:flex-row space-x-0 md:space-x-0 mt-2 mx-2">
                <div className="p-4 md:p-8 w-full md:w-1/2 text-left">
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{item.heading}</h1>
                  <p className="text-base md:text-xl leading-7 font-thin">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="mr-2" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  width={700}
                  height={700}
                  alt="Maintenance Services"
                  className="w-full md:w-1/2 bg-[#f0f0f0] border-[#f0f0f0] rounded-3xl border-8 ml-2"
                  src="/1.png"
                />
              </section>
            );
          }
        } else {
          // Handling for odd id items (excluding id === 1, as handled above)
          if (item.id === 1) {
            return (
              <section key={item.id} className="mt-[-0.5rem]">
                <div className="mx-2">
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="items-start flex w-1/2">
                    <div className=" border-white rounded-3xl rounded-t-none bg-white">
                      <Image
                        width={900}
                        height={900}
                        alt="Heating Facility"
                        className="w-full h-full rounded-3xl border-white border-8"
                        src="/img-76.png"
                      />
                    </div>
                    <div className="bevel6"></div>
                    </div>
                    
                    

                    <div className="md:p-8 md:w-1/2 text-left mt-2">
                      <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{item.heading}</h1>
                      <p className="text-base md:text-xl leading-7 font-thin">{item.description}</p>
                      <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                        {item.list.map((listItem, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckIcon className="mr-2" />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          } else {
            // Handling other odd id items
            if (isLastItem) {
              return (
                <section key={item.id} className="flex mx-2 flex-col md:flex-row mt-2 space-x-0">
                  <div className="flex w-1/2 items-end"><div className="w-full border-[#f0f0f0] bg-[#f0f0f0] rounded-bl-none rounded-3xl border-8 mb-">
                    <Image
                      width={700}
                      height={700}
                      alt="Electric Systems"
                      className="w-full rounded-3xl ml-0"
                      src="/1.png"
                    />
                  </div>
                  <div className="bevel7"></div>
                  <div className="bevel8"></div></div>
                  

                  <div className="rounded-bl-3xl p-4 md:p-8 w-full md:w-1/2 text-left">
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-4">{item.heading}</h1>
                    <p className="text-base md:text-xl leading-7 font-thin">{item.description}</p>
                    <ul className="mt-4 space-y-2 text-base md:text-xl font-thin">
                      {item.list.map((listItem, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckIcon className="mr-2" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            }
          }
        }
      })}
    </div>
  );
}

export default Body;
