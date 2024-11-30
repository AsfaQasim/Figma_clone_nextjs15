import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });

const Recentpostcard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  lg:py-8">
      {/* Header with Recent Post and View All */}
      <div className="flex justify-between items-center mb-6">
        <h2 className={`${heebo.className} text-lg sm:text-xl font-medium`}>
          Recent Post
        </h2>
        <Link
          href="#"
          className={`${heebo.className} text-lg sm:text-xl font-medium text-mypink`}
        >
          View all
        </Link>
      </div>

      {/* Container for Post Cards */}
      <div className="flex flex-col md:flex-row md:justify-center gap-6">
        {/* Post Card */}
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <article
              key={index}
              className="bg-white shadow-lg  p-6 lg:py-20 w-full sm:max-w-md md:flex-1"
            >
              <h3 className={`${heebo.className} font-bold text-lg sm:text-xl text-black lg:text-[26px]`}>
                Making a design system from scratch
              </h3>
              <div className="flex items-center text-gray-600 text-sm mt-4 space-x-2">
                <p className={`${heebo.className}`}>12 Feb 2020</p>
                <span>|</span>
                <p className={`${heebo.className}`}>Design, Pattern</p>
              </div>
              <p className={`${heebo.className} text-gray-700 mt-4 text-sm sm:text-base`}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Recentpostcard;
