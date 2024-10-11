import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function carousel() {
  return (
    <div>
      <Carousel
              showArrows
              showIndicators={false}
              showThumbs={false}
              infiniteLoop
              emulateTouch
              className="relative h-full" // Make sure carousel fills its container
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    onClick={onClickHandler}
                    className="absolute left-2 top-1/2 z-10 "
                  >
                    <ChevronLeft className="text-white h-8 w-8"/>

                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    onClick={onClickHandler}
                    className="absolute right-2 top-1/2 z-10"
                  >
                    <ChevronRight className="text-white h-8 w-8"/>
                  </button>
                )
              }
            >
              {item_1.image.map((image, index) => (
                <div className="h-auto w-full object-fill" key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={600} // Adjust width for full responsiveness
                    height={400} // Adjust height for proper scaling
                    objectFit="fill"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
    </div>
  )
}

export default carousel
