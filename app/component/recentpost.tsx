import React from "react";
import Link from "next/link";
import { Heebo } from "next/font/google";
import Recentpostcard2 from "./recentpostcard2";
import Recentpostcard from "./recentpostcard";

const heebo = Heebo({ subsets: ["latin"] });

const Recentpost = () => {
  return (
    
    
    <div className="bg-recentBackground my-[66px] h-[502px] flex items-center justify-between">
      <Recentpostcard2/>
      <Recentpostcard/>


 

    </div>
  );
};

export default Recentpost;
