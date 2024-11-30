import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="w-full h-auto">
      <div className="px-4 sm:px-5 md:px-14 lg:px-36 flex justify-center items-center">
        <Image
          src="/featured.png"
          alt="featured_work"
          height={934}
          width={919}
          className="w-full max-w-[900px] h-auto"
        />
      </div>
    </div>
  );
};

export default Feature;
