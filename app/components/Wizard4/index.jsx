import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import {
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";

function Wizard3({ next, previous }) {
  return (
    <div className="w-[100%] md:w-[800px] h-[530px] bg-zinc-900 rounded-md pt-6 relative">
      <div className="flex justify-center">
        <Image
          src={"/logo-2.png"}
          alt="logo"
          height={10000}
          width={1000000}
          className="w-[80px] h-[75]"
        />
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] flex items-center">
            Quale strategia preferisci?{" "}
            <IoIosInformationCircleOutline className="ms-5 text-[20px]" />
          </h1>
          <div className="w-[278px] border-[2px] py-2 mt-1 border-rose-500 flex justify-center items-center rounded ">
            <div className="text-center">
              <p className="flex items-center justify-center">
                Si{" "}
                <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
              </p>
              <p className="text-green-300 flex items-center mt-1">
                <IoMdArrowDropup className="me-2" />
                <IoMdArrowDropup className="me-2" />
                Rendimento Alto{" "}
              </p>
              <p className="text-amber-400 flex items-center">
                <IoMdArrowDropup className="me-2" />
                <IoMdArrowDropdown className="me-2" />
                Rischio Medio
              </p>
            </div>
          </div>
          <div className="w-[278px] border-[2px] py-2 mt-2 border-gray-300 flex justify-center items-center rounded ">
            <div className="text-center">
              <p className="flex items-center justify-center">
                No{" "}
                <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
              </p>
              <p className="text-amber-400 flex items-center mt-1">
                <IoMdArrowDropup className="me-2" />
                Rendimento Medio{" "}
              </p>
              <p className="text-green-300 flex items-center">
                <IoMdArrowDropdown className="me-2" />
                Rischio Basso
              </p>
            </div>
          </div>
            <div className="flex justify-center mt-7">
              <FaArrowRight
                onClick={next}
                className=" text-rose-400 text-[20px] cursor-pointer"
              />
            </div>
        </div>
      </div>
      <div className="flex justify-center absolute bottom-6 w-[100%]">
        <div className="flex gap-1">
          <GoDot className="cursor-pointer" onClick={previous} />
          <GoDot className="cursor-pointer" onClick={previous} />
          <GoDotFill className="cursor-pointer" />
          <GoDot className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Wizard3;
