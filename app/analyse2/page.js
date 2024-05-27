import React from "react";
import {
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
function page() {
  return (
    <div className="container-analyse bg-zinc-900 min-h-[100vh]">
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px]">Provincia di Milano, Italia.</h1>
          <div className="flex justify-center items-center">
            <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer" />
            <IoMdStarOutline className="text-rose-400 ms-3 text-[24px] cursor-pointer" />
            <IoShareSocialOutline className="text-rose-400 text-[24px] ms-3 cursor-pointer" />
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-3 cursor-pointer" />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center">
            <p className="text-[12px] underline text-rose-400 cursor-pointer">
              Trova offerte in questa zona
            </p>
            <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer ms-5" />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline  text-rose-400 cursor-pointer">
              Salva questa ricerca
            </p>
            <IoMdStarOutline className="text-rose-400 text-[24px] ms-5" />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline text-rose-400 cursor-pointer">
              Genera Report
            </p>
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-5" />
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-[45%]">
              <AreaChart
                className="mt-4 h-72"
                data={chartdata2}
                index="null"
                categories={["Price"]}
                colors={["green"]}
                yAxisWidth={0}
              />
            </div>
            <div className="md:w-[45%] mb-5 md:mb-0">
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
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-[45%]">
              <AreaChart
                className="mt-4 h-72"
                data={chartdata2}
                index="null"
                categories={["Price"]}
                colors={["red"]}
                yAxisWidth={0}
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
                className="mt-4 h-72"
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
            <IoIosArrowUp className="text-[15px] ms-4" />
          </p>
          <div className="mt-5">
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
            <IoIosArrowUp className="text-[15px] ms-4" />
          </p>
          <div className="mt-5">
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
            <IoIosArrowUp className="text-[15px] ms-4" />
          </p>
          <div className="mt-5">
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
          <p className="text-[12px] underline text-rose-400 cursor-pointer">
            Trova offerte in questa zona
          </p>
          <TbWorldSearch className="text-rose-400 text-[24px] cursor-pointer ms-5" />
        </div>
      </div>
    </div>
  );
}

export default page;
