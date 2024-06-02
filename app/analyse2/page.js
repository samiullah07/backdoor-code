"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircleOutline,
  IoMdStarOutline,
} from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { AreaChart, ProgressBar } from "@tremor/react";

const chartdata2 = [
  {
    date: "Jan 23",
    Price: 167,
  },
  {
    date: "Feb 23",
    Price: 125,
  },
  {
    date: "Mar 23",
    Price: 156,
  },
  {
    date: "Apr 23",
    Price: 165,
  },
  {
    date: "May 23",
    Price: 153,
  },
  {
    date: "Jun 23",
    Price: 124,
  },
];

const Category4 = [
  {
    date: "Jan 23",
    Category4: 167,
  },
  {
    date: "Feb 23",
    Category4: 125,
  },
  {
    date: "Mar 23",
    Category4: 156,
  },
  {
    date: "Apr 23",
    Category4: 165,
  },
  {
    date: "May 23",
    Category4: 153,
  },
  {
    date: "Jun 23",
    Category4: 124,
  },
];

const chartdat3 = [
  {
    date: "Jan 23",
    Rent: 167,
  },
  {
    date: "Feb 23",
    Rent: 125,
  },
  {
    date: "Mar 23",
    Rent: 156,
  },
  {
    date: "Apr 23",
    Rent: 165,
  },
  {
    date: "May 23",
    Rent: 153,
  },
  {
    date: "Jun 23",
    Rent: 124,
  },
];
function Page() {
  const [openSections, setOpenSections] = useState([true, true, true]); // Initial state: all sections open
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    sectionRefs.forEach((ref, index) => {
      if (openSections[index]) {
        ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
      } else {
        ref.current.style.maxHeight = "0px";
      }
    });
  }, [openSections]);

  const toggleSection = (index) => {
    setOpenSections((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container-analyse bg-zinc-900 min-h-[100vh]">
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px]">Provincia di Milano, Italia.</h1>
          <div className="flex justify-center items-center">
            <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer  hover:text-rose-300 transition" />
            <IoMdStarOutline className="text-rose-400 ms-3 text-[24px] cursor-pointer  hover:text-rose-300 transition" />
            <IoShareSocialOutline className="text-rose-400 text-[24px] ms-3 cursor-pointer  hover:text-rose-300 transition" />
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-3 cursor-pointer  hover:text-rose-300 transition" />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center">
            <p className="text-[12px] underline text-rose-400 cursor-pointer  hover:text-rose-300 transition">
              Trova offerte in questa zona
            </p>
            <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer ms-5  hover:text-rose-300 transition" />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline  text-rose-400 cursor-pointer  hover:text-rose-300 transition">
              Salva questa ricerca
            </p>
            <IoMdStarOutline className="text-rose-400 text-[24px] ms-5 cursor-pointer  hover:text-rose-300 transition" />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline text-rose-400 cursor-pointer  hover:text-rose-300 transition">
              Genera Report
            </p>
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-5  cursor-pointer hover:text-rose-300 transition" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-[45%]">
              <AreaChart
                data={chartdata2}
                index="null"
                categories={["Price"]}
                colors={["green"]}
                yAxisWidth={null}
              />
            </div>
            <div className="md:w-[45%] mb-5">
              <div className="mb-5">
                <p className="flex items-center text-[14px] text-gray-300">
                  Indice di Rendita{" "}
                  <IoIosInformationCircleOutline className="ms-3 text-[20px] text-white" />
                </p>
                <p className="text-green-300 ">
                  <span className="text-[30px] font-bold">7.2 </span>/ 10
                </p>
              </div>
              <ProgressBar value={70} color="green" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between mb-5  ">
            <div className="md:w-[45%]">
              <AreaChart
                data={chartdata2}
                index="null"
                categories={["Price"]}
                colors={["red"]}
                yAxisWidth={null}
              />
            </div>
            <div className="md:w-[45%] mb-5 md:mb-0">
              <div className="mb-5">
                <p className="flex items-center text-[14px] text-gray-300">
                  Indice di Domanda{" "}
                  <IoIosInformationCircleOutline className="ms-3 text-[20px] text-white" />
                </p>
                <p className="text-red-300 ">
                  <span className="text-[30px] font-bold">3.2 </span>/ 10
                </p>
              </div>
              <ProgressBar value={30} color="red" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-[45%]">
              <AreaChart
                data={chartdata2}
                index="null"
                categories={["Price"]}
                colors={["green"]}
                yAxisWidth={null}
              />
            </div>
            <div className="md:w-[45%] mb-5 md:mb-0">
              <div className="mb-5">
                <p className="flex items-center text-[14px] text-gray-300">
                  Indice di Prezzo{" "}
                  <IoIosInformationCircleOutline className="ms-3 text-[20px] text-white" />
                </p>
                <p className="text-green-300 ">
                  <span className="text-[30px] font-bold">6.6 </span>/ 10
                </p>
              </div>
              <ProgressBar value={60} color="green" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Storico dei prezzi e stima di crescita
            {openSections[0] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(0)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(0)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[0]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
          >
            <h3 className="text-lg ">Prezzi degli Immobili</h3>
            <p className="text-[14px] text-gray-500">€/mq</p>

            <AreaChart
              className="mt-4 h-72"
              data={Category4}
              index="date"
              categories={["Category4"]}
              colors={["gray"]}
              yAxisWidth={30}
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Storico dei prezzi e stima di crescita
            {openSections[1] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(1)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(1)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[1]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
          >
            <h3 className="text-lg ">Prezzi degli Affitti</h3>
            <p className="text-[14px] text-gray-500">€/mq mensile</p>

            <AreaChart
              className="mt-4 h-72"
              data={chartdat3}
              index="date"
              categories={["Rent"]}
              colors={["blue"]}
              yAxisWidth={30}
            />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Storico della rendita
            {openSections[2] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(2)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(2)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[2]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
          >
            <h3 className="text-lg ">Rendita</h3>
            <p className="text-[14px] text-gray-500">€/mq</p>

            <AreaChart
              className="mt-4 h-72"
              data={Category4}
              index="date"
              categories={["Category4"]}
              colors={["gray"]}
              yAxisWidth={30}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <p className="text-[12px] underline text-rose-400 cursor-pointer  hover:text-rose-300 transition">
            Trova offerte in questa zona
          </p>
          <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer ms-5  hover:text-rose-300 transition " />
        </div>
      </div>
    </div>
  );
}

export default Page;
