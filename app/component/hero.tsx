import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="my-[66px] md:w-[1030px] md:h-[308px]  flex-col-reverse md:flex-row mx-auto flex items-center 
    justify-between p-6">
      <div className=" w-[95%] md:[521px] md:h-[305px] flex flex-col justify-center items-start  
      md:justify-evenly md:items-start">
        <h1
          className={`${heebo.className} text-[27px] md:text-[48px] mt-8 font-black text-myblack`}
        >
          Hi, I am John, Creative Technologist
        </h1>
        <br />
        <p
          className={`${heebo.className} text-myblack text-[16px] font-medium`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} text-[18px] font-medium w-[205px] h-[50px] bg-mypink text-white rounded-sm shadow-md shadow-black/90 my-7 p-5 flex justify-center items-center`}
        >
          Download Resume
        </button>
        {/* Image div */}
      </div>
      <div className="w-[292px] h-[299px] relative">
        <Image
          alt="hero-iamge"
          src={"/assets/hero-image.png"}
          width={292}
          height={299}
        />

        <div className="bg-bgellipse rounded-full absolute" />
      </div>
    </div>
  );
};

export default Hero;
