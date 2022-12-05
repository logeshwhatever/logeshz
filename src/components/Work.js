import React from "react";

export default function Work() {
  return (
    <>
      {/* <div className='p-10 grid justify-items-center'>
    <button className="text-white cursor-pointer text-6xl uppercase italic bold">random</button>
    </div> */}
      {/* <div className='grid justify-items-center'>
     <img src="ZNMD1.png" alt="" className='w-2/3 mt-16 h-auto '/> 
      
    </div> */}
      <div className="grid justify-items-center md:pt-20">
        <img src="ZNMD.png" alt="" className="w-full md:w-2/4"/>
        <div className="text-blue-200 text-2xl uppercase italic font-bold pr-0 md:pr-2 md:pt-16 lg:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6 text-right">
          Explore,
          <br />
          Not
          <br />
          Arrive.
        </div>
        <div className="text-gray-400 text-base uppercase font-bold italic pt-32 md:pt-60 sm:pl-20 md:pl-0 md:pt-60 md:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6">
          My work?
          <br /> Umm...Can't you see? 
        </div>
      </div>
      <div className="text-stone-800 text-center pt-80 italic">
        built in react using tailwind, designed in figma and canva.
      </div>
    </>
  );
}