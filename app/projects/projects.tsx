import React from "react";
import { getKbArticlesByCode } from "@/lib/kb";
import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from 'next/cache';

// Store code in memory with a default value
let currentCode = 'id1_projects';

// Optimize the server action to be more responsive
async function updateCode(formData: FormData) {
  'use server';
  const newCode = formData.get('code') as string;
  currentCode = newCode;
  // Only revalidate the content area
  revalidatePath('/projects', 'layout');
}

// Separate the content component for faster updates
async function ProjectContent({ currentCode }: { currentCode: string }) {
  const { article } = await getKbArticlesByCode(currentCode);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
      {article.map((item, index) => {
        const imageUrl = "https://khas-dayan.api.erxes.io/api/read-file?key=" + item.image?.url;
        return (
          <div key={index} className="relative group overflow-hidden border-r border-b border-gray-200 last:border-r-0">
            <div className="relative group overflow-hidden">
              <Link
                key={item._id} 
                href={{
                  pathname: `/projects/${item._id}`,
                  query: { 
                    catCode: "id1_projects",
                    title: item.title,
                    summary: item.summary,
                    content: item.content,
                    imageUrl: imageUrl,
                    date: item.forms?.[0]?.formId||"Nan"
                  }
                }}
              >
                <div className="relative w-full h-0 pb-[100%] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={item._id}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 p-0 md:p-4"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full md:hidden">
                    <div className="bg-gradient-to-t from-black/80 to-transparent p-6 backdrop-blur-sm">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-white text-xl font-bold uppercase tracking-wide line-clamp-1">
                          {item.title}
                        </h1>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400 text-sm">
                            {item.forms?.[0]?.formId || "Nan"}
                          </span>
                          <span className="h-1 w-1 bg-yellow-400 rounded-full"></span>
                          <p className="text-gray-200 text-sm font-light line-clamp-1">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="md:block hidden absolute bottom-4 left-5 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-lg font-thin">{item.summary}</p>
                  <p className="text-xl font-medium uppercase">{item.title}</p>
                  <p className="text-sm font-light">{item.forms?.[0]?.formId||"Nan"}</p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

async function Projects() {
  return (
    <div className="p-4 md:p-8 px-6 mx:px-8 sm:px-12 md:px-12 xl:px-24 pt-12 md:pt-24 bg-[#f0f0f0] rounded-tr-3xl mx-3 divide-y">
      <div>
        {/* Title Section */}
        <div className="bg-blue-800 text-white font-bold text-center rounded-t-xl">
          <div className="p-4">
            <h2 className="text-2xl">All Projects</h2>
          </div>
        </div>

        {/* Desktop Layout (MD and above) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 divide-x border border-gray-300 divide-gray-300 text-center bg-white font-medium">
            <form action={updateCode}>
              <input type="hidden" name="code" value="id1_projects" />
              <button 
                type="submit" 
                className={`col-span-1 w-full p-4 transition-colors duration-300 
                  ${currentCode === 'id1_projects' 
                    ? 'bg-gray-300 text-white' 
                    : 'hover:bg-gray-200'
                  }`}
              >
                Heating Plant
              </button>
            </form>
            <form action={updateCode}>
              <input type="hidden" name="code" value="id2_projects" />
              <button 
                type="submit" 
                className={`col-span-1 w-full p-4 transition-colors duration-300 
                  ${currentCode === 'id2_projects' 
                    ? 'bg-gray-300 text-white' 
                    : 'hover:bg-gray-200'
                  }`}
              >
                Construction
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-3 divide-x bg-white divide-gray-300 text-center font-medium border-gray-300 border">
            <form action={updateCode}>
              <input type="hidden" name="code" value="id3_projects" />
              <button 
                type="submit" 
                className={`w-full p-4 transition-colors duration-300 
                  ${currentCode === 'id3_projects' 
                    ? 'bg-gray-300 text-white' 
                    : 'hover:bg-gray-200'
                  }`}
              >
                Engineering and Technical Service
              </button>
            </form>
            <form action={updateCode}>
              <input type="hidden" name="code" value="id4_projects" />
              <button 
                type="submit" 
                className={`w-full p-4 transition-colors duration-300 
                  ${currentCode === 'id4_projects' 
                    ? 'bg-gray-300 text-white' 
                    : 'hover:bg-gray-200'
                  }`}
              >
                Mine Contracting
              </button>
            </form>
            <form action={updateCode}>
              <input type="hidden" name="code" value="id5_projects" />
              <button 
                type="submit" 
                className={`w-full p-4 transition-colors duration-300 
                  ${currentCode === 'id5_projects' 
                    ? 'bg-gray-300 text-white' 
                    : 'hover:bg-gray-200'
                  }`}
              >
                Construction
              </button>
            </form>
          </div>

          <div className="grid grid-cols-4 divide-x bg-white divide-gray-300 text-center font-medium border-gray-300 border">
            {[
              { code: 'id6_projects', label: 'Engineering and Technical Service' },
              { code: 'id7_projects', label: 'Mine Contracting' },
              { code: 'id8_projects', label: 'Construction' },
              { code: 'id9_projects', label: 'Construction' }
            ].map((item) => (
              <form key={item.code} action={updateCode}>
                <input type="hidden" name="code" value={item.code} />
                <button 
                  type="submit" 
                  className={`w-full p-4 transition-colors duration-300 
                    ${currentCode === item.code 
                      ? 'bg-gray-300 text-white' 
                      : 'hover:bg-gray-200'
                    }`}
                >
                  {item.label}
                </button>
              </form>
            ))}
          </div>
        </div>

        {/* Mobile Layout (Below MD) */}
        <div className="md:hidden space-y-3 p-4">
          {/* Main Categories */}
          <div className="grid grid-cols-2 gap-3">
            <form action={updateCode}>
              <input type="hidden" name="code" value="id1_projects" />
              <button 
                type="submit" 
                className={`w-full h-24 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center px-4
                  ${currentCode === 'id1_projects' 
                    ? 'bg-red-500 text-white transform scale-110' 
                    : 'bg-white hover:bg-gray-50'
                  }`}
              >
                <span className="text-base font-semibold text-center line-clamp-2">Heating Plant</span>
              </button>
            </form>
            <form action={updateCode}>
              <input type="hidden" name="code" value="id2_projects" />
              <button 
                type="submit" 
                className={`w-full h-24 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center px-4
                  ${currentCode === 'id2_projects' 
                    ? 'bg-red-500 text-white transform scale-110' 
                    : 'bg-white hover:bg-gray-50'
                  }`}
              >
                <span className="text-base font-semibold text-center line-clamp-2">Construction</span>
              </button>
            </form>
          </div>

          {/* Secondary Categories */}
          <div className="grid grid-cols-1 gap-3">
            {[
              { code: 'id3_projects', label: 'Engineering and Technical Service' },
              { code: 'id4_projects', label: 'Mine Contracting' },
              { code: 'id5_projects', label: 'Construction' }
            ].map((item) => (
              <form key={item.code} action={updateCode}>
                <input type="hidden" name="code" value={item.code} />
                <button 
                  type="submit" 
                  className={`w-full h-20 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center px-4
                    ${currentCode === item.code 
                      ? 'bg-red-500 text-white transform scale-110' 
                      : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  <span className="text-base font-semibold text-center line-clamp-2">{item.label}</span>
                </button>
              </form>
            ))}
          </div>

          {/* Additional Categories */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { code: 'id6_projects', label: 'Engineering and Technical Service' },
              { code: 'id7_projects', label: 'Mine Contracting' },
              { code: 'id8_projects', label: 'Construction' },
              { code: 'id9_projects', label: 'Construction' }
            ].map((item) => (
              <form key={item.code} action={updateCode}>
                <input type="hidden" name="code" value={item.code} />
                <button 
                  type="submit" 
                  className={`w-full h-24 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center px-4
                    ${currentCode === item.code 
                      ? 'bg-red-500 text-white transform scale-110' 
                      : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  <span className="text-base font-semibold text-center line-clamp-2">{item.label}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>

      <ProjectContent currentCode={currentCode} />
    </div>
  );
}

export default Projects;



      



      
  