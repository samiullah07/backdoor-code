import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";

import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircleOutline,
} from "react-icons/io";

function Wizard2({ next, previous }) {
  const [num, setNum] = useState(0);
  return (
    <div className="h-[530px] relative">
      <div className="flex justify-center">
        <Image
          src={"/logo-2.png"}
          alt="logo"
          height={10000}
          width={1000000}
          className="w-[80px] h-[75]"
        />
      </div>
      <div className="flex justify-center items-center h-[60%] px-5">
        <div>
          <h1 className="text-[19px] md:text-[24px] flex items-center">
            Quanto vale l’immobile su cui vuoi investire?{" "}
            <IoIosInformationCircleOutline className="ms-5 text-[20px]" />
          </h1>
          <div className="flex justify-center">
            <div
              className="bg-transparen w-[278px] border border-[#6B7280] mt-5 rounded-[30px]"
              data-hs-input-number
            >
              <div className="w-full flex justify-between items-center gap-x-1">
                <div className="grow py-2 px-3">
                  <input
                    className="w-full wizard-input p-0 bg-transparent border-0 text-gray-200 focus:ring-0"
                    type="number"
                    value={num}
                    onChange={() => setNum(num)}
                    placeholder="100.000 €"
                  />
                </div>
                <div className=" pe-3 rounded-[30px] border-[#6B7280]">
                  <IoIosArrowUp
                    className="cursor-pointer"
                    onClick={() => setNum(num + 1)}
                  />
                  <IoIosArrowDown
                    className="cursor-pointer"
                    onClick={() => setNum(num - 1)}
                  />
                </div>
              </div>
            </div>
          </div>
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

export default Wizard2;
