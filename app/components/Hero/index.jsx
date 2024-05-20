"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Mainbtn from "../MainBtn";

function Hero() {
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
      <div className="absolute flex flex-col items-center top-[40%] md:left-[5%] w-[100%] md:w-[500px]">
        <div className="text-[25px] text-center md:text-right md:text-[40px] leading-[48px] px-5 md:px-0">
          Il tuo accesso ai <span className="text-rose-400">segreti</span> del
          mercato immobiliare.
        </div>
        <Mainbtn classes="mt-10" text={"Scopri Ora"} />
      </div>
      <Spline scene="https://prod.spline.design/Q3GoEbzXIvVSWJyo/scene.splinecode" className="h-[100vh]" style={{height:"100vh"}}/>
    </div>
  );
}

export default Hero;
