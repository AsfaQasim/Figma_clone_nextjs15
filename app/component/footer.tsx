import { Heebo } from "next/font/google";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="bg-myfooter flex flex-col items-center py-8">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
        <Link href="#">
          <FaFacebookSquare className="h-6 w-6 sm:h-8 sm:w-8 hover:text-gray-300 transition duration-300" />
        </Link>
        <Link href="#">
          <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8  hover:text-gray-300 transition duration-300" />
        </Link>
        <Link href="#">
          <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8  hover:text-gray-300 transition duration-300" />
        </Link>
        <Link href="#">
          <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8  hover:text-gray-300 transition duration-300" />
        </Link>
      </div>

      {/* Footer Text */}
      <p
        className={`${heebo.className} text-black text-center text-sm sm:text-base lg:text-lg font-medium`}
      >
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
