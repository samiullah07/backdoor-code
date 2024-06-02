import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Wizard5({ next, previous }) {
  const [selectedItem, setSelectedItem] = useState(true);

  return (
    <div className="h-[530px] ">
      <div className="flex justify-center">
        <Image
          src={"/logo-2.png"}
          alt="logo"
          height={10000}
          width={1000000}
          className="w-[80px] h-[75]"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] flex items-center">
            Scegli la tipologia di immobile:{" "}
            <IoIosInformationCircleOutline className="ms-5 text-[20px]" />
          </h1>
          <div
            className={`w-[278px] border-[2px] py-2 mt-5 rounded-full  border-gray-300 ${
              selectedItem && "border-rose-500 "
            } flex justify-center items-center cursor-pointer transition`}
            onClick={() => setSelectedItem(true)}
          >
            <div className="text-center flex items-center">
              Residenziale{" "}
              <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
            </div>
          </div>
          <div
            className={`w-[278px] border-[2px] py-2 mt-5 rounded-full border-gray-300 ${
              !selectedItem && "border-rose-500 "
            } flex justify-center items-center cursor-pointer transition`}
            onClick={() => setSelectedItem(false)}
          >
            <div className="text-center flex items-center">
              Commerciale{" "}
              <IoIosInformationCircleOutline className="ms-5 text-[17px]" />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <FaSearch
              onClick={next}
              className=" text-rose-400 text-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wizard5;
