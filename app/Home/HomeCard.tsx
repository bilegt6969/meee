import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import AvatarSection from '../Components/Avatar/page'

function HomeCard() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <section className="text-center mt-8 lg:mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
          WE OFFER A FULL RANGE OF{' '}
          <span className="text-blue-500">QUALITY SERVICES</span>{' '}
          ESSENTIAL TO DERISKING OUR CLIENTS' <span className="text-blue-500">PROJECTS.</span>
        </h1>
      </section>
      
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8 lg:mt-16">
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-around items-center bg-gradient-to-tl from-blue-400 via-blue-700 to-sky-400 p-6 lg:p-12 rounded-2xl text-white">
          <div className='flex flex-col items-center space-y-2 lg:space-y-4'>
            <p className='text-lg md:text-xl lg:text-2xl text-center'>Projects delivered <br/> on budget</p>
            <span className="font-bold text-4xl md:text-6xl lg:text-8xl">100%</span>
          </div>

          <div className='flex flex-col items-center space-y-2 lg:space-y-4'>
            <p className='text-lg md:text-xl lg:text-2xl text-center'>Projects delivered <br/> on time</p>
            <span className="font-bold text-4xl md:text-6xl lg:text-8xl">100%</span>
          </div>

          <div className='flex flex-col items-center space-y-2 lg:space-y-4'>
            <p className='text-lg md:text-xl lg:text-2xl text-center'>Total manhours <br/> employed</p>
            <span className="font-bold text-4xl md:text-6xl lg:text-8xl">50+</span>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col justify-center space-y-4">
          <p className="text-base md:text-lg lg:text-xl text-center">
            We aim to provide our customers and partners with the highest quality
            of service. The ultimate goal of our business is to ensure that our
            work is performed in a timely and safe manner.
          </p>
          <AvatarSection />
          <div className="text-center mt-4">
            <Button className="text-blue-500 text-lg md:text-xl p-4 md:p-6 border-blue-600 px-8 md:px-12" variant="outline">
              Write us
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeCard
