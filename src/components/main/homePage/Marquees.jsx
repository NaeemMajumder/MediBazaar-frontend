import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = () => {

  let images = ["marquee1","marquee2","marquee3","marquee4","marquee5","marquee6",]

  // console.log(images)


  return (
    <>
      <Marquee>
      {
         images.map((image, index) => {
          return (
            <div key={index} className="flex items-center justify-center px-4 md:px-8 lg:px-12">
              <img 
                src={`/images/${image}.png`} 
                alt={`Marquee image ${index + 1}`} 
                className="max-w-full h-auto rounded-lg" 
              />
            </div>
          );
        })
        }
      </Marquee>
    </>
  );
};

export default Marquees;
