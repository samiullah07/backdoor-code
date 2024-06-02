import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import {
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";

function Wizard3({ next, previous }) {
  const [selectedItem, setSelectedItem] = useState("incomeProperty");
  return (
    <div className=" h-[530px relative">
      <div className="flex justify-center">
        <Image
          src={"/logo-2.png"}
          alt="logo"
          height={10000}
          width={1000000}
          className="w-[80px] h-[75]"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] flex items-center">
            Quale strategia preferisci?{" "}
            <IoIosInformationCircleOutline className="ms-5 text-[20px]" />
          </h1>
          <div
            className={`w-[278px] border-[2px] py-2 mt-1 border-gray-300 ${
              selectedItem == "incomeProperty" && "border-rose-500 "
            } flex justify-center items-center rounded cursor-pointer transition `}
            onClick={() => setSelectedItem("incomeProperty")}
          >
            <div className="text-center">
              <p className="flex items-center">
                Immobile a Reddito{" "}
                <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
              </p>
              <p className="text-green-300 flex items-center mt-1">
                <IoMdArrowDropup className="me-2" />
                <IoMdArrowDropup className="me-2" />
                Rendimento Alto
              </p>
              <p className="text-green-300 flex items-center ps-6">
                <IoMdArrowDropdown className="me-2" />
                Rischio Basso
              </p>
            </div>
          </div>
          <div
            className={`w-[278px] border-[2px] py-2 mt-2  border-gray-300 ${
              selectedItem == "buyandSell" && "border-rose-500 "
            } flex justify-center items-center rounded cursor-pointer`}
            onClick={() => setSelectedItem("buyandSell")}
          >
            <div className="text-center">
              <p className="flex items-center">
                Compra e Vendi{" "}
                <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
              </p>
              <p className="text-amber-400 flex items-center mt-1">
                <IoMdArrowDropup className="me-2" />
                Rendimento Medio
              </p>
              <p className="text-green-300 flex items-center">
                <IoMdArrowDropdown className="me-2" />
                Rischio Basso
              </p>
            </div>
          </div>
          <div className="w-[278px] border-[2px] py-2  opacity-[0.3] mt-2 border-gray-300 flex justify-center items-center rounded ">
            <div className="text-center">
              <p className="flex items-center justify-center">
                Crowfunding
                <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
              </p>
              <p className="text-green-300 flex items-center mt-2">
                <IoMdArrowDropup className="me-2" />
                <IoMdArrowDropup className="me-2" />
                <IoMdArrowDropup className="me-2" />
                Rendimento Medio
              </p>
              <p className="text-amber-400 flex items-center">
                <IoMdArrowDropdown className="me-2" />
                <IoMdArrowDropdown className="me-2" />
                <IoMdArrowDropdown className="me-2" />
                Rendimento Alto
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
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

export default Wizard3;
