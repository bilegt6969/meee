import React from 'react';

const Timeline = () => {
  const events = [
    { 
      year: 'July 2018', 
      description: 'Power plants are increasingly prioritizing renewable energy sources. Solar, wind, hydro, and geothermal are now dominant in new power generation projects.', 
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    { 
      year: 'June 2019', 
      description: 'Energy storage has become a key component of power plant operations. Advanced battery technologies are deployed to store excess energy generated during peak production times.', 
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      year: 'June 2021', 
      description: 'This helps balance supply and demand, ensuring reliable energy supply even when renewable sources are intermittent.', 
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      year: 'August 2018', 
      description: 'In 2018, Alessandro Volta created the first chemical battery, known as the voltaic pile, a crucial development in electrical science.', 
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
      year: 'May 2020', 
      description: 'Power plants are integrated into smart grids that use digital technology to monitor and manage the distribution of electricity.', 
      image: 'https://via.placeholder.com/300x200', 
    },
    { 
        year: 'May 2020', 
        description: 'Power plants are integrated into smart grids that use digital technology to monitor and manage the distribution of electricity.', 
        image: 'https://via.placeholder.com/300x200', 
      }, { 
        year: 'May 2020', 
        description: 'Power plants are integrated into smart grids that use digital technology to monitor and manage the distribution of electricity.', 
        image: 'https://via.placeholder.com/300x200', 
      }, { 
        year: 'May 2020', 
        description: 'Power plants are integrated into smart grids that use digital technology to monitor and manage the distribution of electricity.', 
        image: 'https://via.placeholder.com/300x200', 
      },
  ];

  return (
    <div className="overflow-x-auto py-8 text-black">
      <div className="relative flex space-x-12 px-8 min-w-max">
        {/* Timeline with alternating heights */}
        {events.map((event, index) => (
          <div key={index} className="relative flex flex-col items-center min-w-[300px]">
            {/* Alternating vertical positioning with larger difference */}
            <div className={`relative ${index % 2 === 0 ? 'mt-[20rem]' : 'mb-[2rem]'} w-[300px] text-left`}>
              {/* Event year */}
              <span className="text-center text-3xl font-extrabold mb-4">{event.year}</span>

              {/* Event card */}
              <p className="text-md">{event.description}</p>
              <img 
                src={event.image} 
                alt={event.description} 
                className="w-full h-32 object-cover rounded-lg mb-4 mt-[1rem]"
              />
            </div>

            {/* Circle connector */}
            {index < events.length - 1 && (
              <div className="absolute top-[50%] left-[100%] flex items-center transform -translate-y-1/2">
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
