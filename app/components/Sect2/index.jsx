"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import Mainbtn from "../MainBtn";
import Image from "next/image";

function Sect2() {
  return (
    <div className="relative min-h-[100vh] bg-[#212121]">
      <div className="absolute top-9 w-[100%] flex justify-center">
        <div>
          <Image
            src={"/logo.png"}
            alt="logo"
            height={10000}
            width={1000000}
            className="w-[100%] h-[84px]"
          />
        </div>
      </div>
      <div className="absolute flex flex-col items-center md:block top-[45%] md:ps-10 w-[100%] md:w-[100%]">
        <div className="text-[25px] reat-estate text-zinc-300 font-[400] text-start md:text-[75px] leading-[48px] uppercase px-5 md:px-0">
          REAL ESTATE insights
        </div>
      </div>
      <Spline
        scene="https://prod.spline.design/vc7tQXI9HNs-x3ge/scene.splinecode"
        className="min-h-[100vh]"
        style={{ height: "100vh" }}
      />
      <div className="absolute flex justify-center bottom-16 w-[100%]">
        <Mainbtn text={"Scopri Ora"} />
      </div>
    </div>
  );
}

export default Sect2;
