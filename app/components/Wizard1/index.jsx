import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Wizard1({ next }) {
  return (
    <div className="h-[530px] flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src={"/logo-2.png"}
            alt="logo"
            height={10000}
            width={1000000}
            className="w-[80px] h-[75]"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-[24px]">
            <b>Benvenuto su</b>{" "}
            <span className="tracking-[2.4px] ms-2">backdoor</span>
          </h1>
          <p className="text-center w-[90%] md:w-[400px] mt-5">
            Cominciamo subito con alcune domande per{" "}
            <span className="text-rose-400 text-[20px] ">personalizzare</span>{" "}
            la ricerca del migliore investimento immobiliare.
          </p>
          <div className="flex justify-center mt-6">
            <FaArrowRight
              onClick={next}
              className=" text-rose-400 text-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wizard1;
