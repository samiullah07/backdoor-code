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
import { ProgressBar } from "@tremor/react";

import { AreaChart } from "@tremor/react";
import Image from "next/image";

const chartdata = [
  {
    date: "Jan 22",
    Pagamenti: 2890,
    Guadagni: 2338,
  },
  {
    date: "Feb 22",
    Pagamenti: 2756,
    Guadagni: 2103,
  },
  {
    date: "Mar 22",
    Pagamenti: 3322,
    Guadagni: 2194,
  },
  {
    date: "Apr 22",
    Pagamenti: 3470,
    Guadagni: 2108,
  },
  {
    date: "May 22",
    Pagamenti: 3475,
    Guadagni: 1812,
  },
  {
    date: "Jun 22",
    Pagamenti: 3129,
    Guadagni: 1726,
  },
  {
    date: "Jul 22",
    Pagamenti: 3490,
    Guadagni: 1982,
  },
  {
    date: "Aug 22",
    Pagamenti: 2903,
    Guadagni: 2012,
  },
  {
    date: "Sep 22",
    Pagamenti: 2643,
    Guadagni: 2342,
  },
  {
    date: "Oct 22",
    Pagamenti: 2837,
    Guadagni: 2473,
  },
  {
    date: "Nov 22",
    Pagamenti: 2954,
    Guadagni: 3848,
  },
  {
    date: "Dec 22",
    Pagamenti: 3239,
    Guadagni: 3736,
  },
];

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
const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

function Page() {
  const [openSections, setOpenSections] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]); // Initial state: all sections open
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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
          <h1 className="text-[14px] md:text-[18px]">
            Bilocale in Piazza Giorgio Simone Ohm, Milano.
          </h1>
          <div className="flex justify-center items-center">
            <IoMdStarOutline className="text-rose-400 text-[24px] cursor-pointer  hover:text-rose-300 transition" />
            <IoShareSocialOutline className="text-rose-400 text-[24px] ms-3 cursor-pointer  hover:text-rose-300 transition" />
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-3 cursor-pointer hover:text-rose-300 transition" />
            <svg
              className="w-[20px] ms-3 cursor-pointer"
              width="{20}"
              height="{20}"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 10.1667 19.9958 10.3333 19.9875 10.5C19.9792 10.6667 19.9667 10.8333 19.95 11H17.925C17.9583 10.8333 17.9792 10.6708 17.9875 10.5125C17.9958 10.3542 18 10.1833 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10V10.5125C14.5 10.6708 14.4917 10.8333 14.475 11H12.475C12.4917 10.8333 12.5 10.6708 12.5 10.5125V10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12H11V14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95C10.1833 17.6833 10.3583 17.4125 10.525 17.1375C10.6917 16.8625 10.85 16.5833 11 16.3V19.95C10.8333 19.9667 10.6708 19.9792 10.5125 19.9875C10.3542 19.9958 10.1833 20 10 20ZM17.95 19.375L15 16.425V18.65H13V13H18.65V15H16.4L19.35 17.95L17.95 19.375Z"
                fill="#FB7185"
              />
            </svg>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <p className="text-[12px] underline text-rose-400 cursor-pointer  hover:text-rose-300 transition">
              Visita l’annuncio originale
            </p>
            <svg
              className="w-[20px] ms-5"
              width="{20}"
              height="{20}"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 10.1667 19.9958 10.3333 19.9875 10.5C19.9792 10.6667 19.9667 10.8333 19.95 11H17.925C17.9583 10.8333 17.9792 10.6708 17.9875 10.5125C17.9958 10.3542 18 10.1833 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10V10.5125C14.5 10.6708 14.4917 10.8333 14.475 11H12.475C12.4917 10.8333 12.5 10.6708 12.5 10.5125V10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12H11V14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95C10.1833 17.6833 10.3583 17.4125 10.525 17.1375C10.6917 16.8625 10.85 16.5833 11 16.3V19.95C10.8333 19.9667 10.6708 19.9792 10.5125 19.9875C10.3542 19.9958 10.1833 20 10 20ZM17.95 19.375L15 16.425V18.65H13V13H18.65V15H16.4L19.35 17.95L17.95 19.375Z"
                fill="#FB7185"
              />
            </svg>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline  text-rose-400 cursor-pointer hover:text-rose-300 transition">
              Salva questo immobile nei preferiti
            </p>
            <IoMdStarOutline className="text-rose-400 text-[24px] ms-5 cursor-pointer  hover:text-rose-300 transition" />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-[12px] underline text-rose-400 cursor-pointer hover:text-rose-300 transition">
              Genera Report
            </p>
            <MdOutlinePictureAsPdf className="text-rose-400 text-[24px] ms-5 cursor-pointer  hover:text-rose-300 transition" />
          </div>
        </div>
        <div>
          <div className="mt-10">
            <p className="text-[12px] flex items-center">
              Indicatori Backdoor.
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
              )}
            </p>
          </div>
          <div
            ref={sectionRefs[0]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden h-[80vh] md:h-[100%]"
          >
            <div className="md:flex justify-between mt-8 md:gap-14">
              <div className="w-[100%] mb-5 md:mb-0">
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
              <div className="w-[100%] mb-5 md:mb-0">
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
              <div className="w-[100%] mb-5 md:mb-0">
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
        </div>

        <div>
          <div className="mt-10">
            <p className="text-[12px] flex items-center">
              Aspettativa di crescita dei guadagni rispetto ai pagamenti{" "}
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
              )}
            </p>
          </div>
          <div
            ref={sectionRefs[1]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden"
          >
            <div className="mt-5">
              <h3 className=" text-[18px] text-gray-300">Breakeven</h3>
              <p className="text-[14px] text-gray-500">Subtitle</p>
              <AreaChart
                className="mt-4 h-72"
                data={chartdata}
                index="date"
                yAxisWidth={65}
                categories={["Pagamenti", "Guadagni"]}
                colors={["green", "red"]}
                valueFormatter={valueFormatter}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10">
            <p className="text-[12px] flex items-center">
              Descrizione.
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
              )}
            </p>
          </div>
          <div
            ref={sectionRefs[2]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden text-[12px] text-gray-50 mt-5"
          >
            <p>BILOCALE NUOVO CON BOX - PORTA NAVIGLIO GRANDE</p>
            <p>
              Una nuova storia da abitare nella tua nuova casa firmata Abitare
              In. Un varco, un accesso, una Porta: così Porta Naviglio Grande si
              prepara a diventare il dodicesimo ingresso alla città, un nuovo
              punto di riferimento sulla cartina di Milano e nell’immaginario
              collettivo. Porta Naviglio Grande si caratterizza per la
              particolare composizione di dettagli e colori. Sfumature calde e
              naturali si alternano alla
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="w-[45%]">
            <p className="text-[12px] flex items-center">
              Informazioni sull’Immobile.
              {openSections[3] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(3)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(3)}
                />
              )}{" "}
            </p>
            <div
              ref={sectionRefs[3]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <div className="mt-5 text-gray-50">
                <p className="text-[12px]">
                  <span className="text-[20px]">€ 100,000 </span> is the{" "}
                  <b>price of this listing</b>
                </p>
                <p className="text-[12px]">
                  <span className="text-[20px]">60 </span> m2 is the{" "}
                  <b>commercial surface area</b>
                </p>

                <p className="text-[12px]">
                  <span className="text-[20px]">2 rooms, </span>optimal
                  condition
                </p>
              </div>
              <div className="mt-5">
                <p className="text-rose-400 text-[12px] flex items-center hover:text-rose-300 transition">
                  <span className="underline cursor-pointer ">
                    Modifica questi dati
                  </span>
                  <svg
                    className="ms-5 cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.16667 14.0174H3.35417L11.5 5.87158L10.3125 4.68408L2.16667 12.8299V14.0174ZM0.5 15.6841V12.1424L11.5 1.16325C11.6667 1.01047 11.8507 0.892415 12.0521 0.809082C12.2535 0.725749 12.4653 0.684082 12.6875 0.684082C12.9097 0.684082 13.125 0.725749 13.3333 0.809082C13.5417 0.892415 13.7222 1.01742 13.875 1.18408L15.0208 2.35075C15.1875 2.50353 15.309 2.68408 15.3854 2.89242C15.4618 3.10075 15.5 3.30908 15.5 3.51742C15.5 3.73964 15.4618 3.95144 15.3854 4.15283C15.309 4.35422 15.1875 4.53825 15.0208 4.70492L4.04167 15.6841H0.5ZM10.8958 5.28825L10.3125 4.68408L11.5 5.87158L10.8958 5.28825Z"
                      fill="#FB7185"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <p className="text-[12px] flex items-center ">
              Le tue Informazioni.
              {openSections[4] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(4)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(4)}
                />
              )}{" "}
            </p>
            <div
              ref={sectionRefs[4]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <div className="mt-5 text-gray-50">
                <p className="text-[12px]">
                  <span className="text-[20px]">€ 20,000 </span> is your{" "}
                  <b> available capital</b>
                </p>
                <p className="text-[12px]">
                  <span className="text-[20px]">20 </span> years{" "}
                  <b> mortgage</b>
                </p>

                <p className="text-[12px]">
                  <span className="text-[20px]">4.5% </span>mortgage
                  <b> interest</b> rate
                </p>
              </div>
              <div className="mt-5">
                <p className="text-rose-400 text-[12px] flex items-center hover:text-rose-300 transition">
                  <span className="underline cursor-pointer">
                    Modifica questi dati
                  </span>
                  <svg
                    className="ms-5 cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.16667 14.0174H3.35417L11.5 5.87158L10.3125 4.68408L2.16667 12.8299V14.0174ZM0.5 15.6841V12.1424L11.5 1.16325C11.6667 1.01047 11.8507 0.892415 12.0521 0.809082C12.2535 0.725749 12.4653 0.684082 12.6875 0.684082C12.9097 0.684082 13.125 0.725749 13.3333 0.809082C13.5417 0.892415 13.7222 1.01742 13.875 1.18408L15.0208 2.35075C15.1875 2.50353 15.309 2.68408 15.3854 2.89242C15.4618 3.10075 15.5 3.30908 15.5 3.51742C15.5 3.73964 15.4618 3.95144 15.3854 4.15283C15.309 4.35422 15.1875 4.53825 15.0208 4.70492L4.04167 15.6841H0.5ZM10.8958 5.28825L10.3125 4.68408L11.5 5.87158L10.8958 5.28825Z"
                      fill="#FB7185"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Aspettative di guadagno guidate dall’AI.
            {openSections[5] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(5)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(5)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[5]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden"
          >
            <div className="text-[12px] text-gray-50 flex justify-between mt-5 ">
              <span>Secondo le nostre stime:</span>
              <span className="text-rose-400 flex items-center  hover:text-rose-300 transition">
                <IoIosInformationCircleOutline className="me-3 text-[20px]" />
                <span className="underline cursor-pointer hover:text-rose-300 transition">
                  Come sono calcolate queste stime?
                </span>
              </span>
            </div>
            <div className="mt-5">
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">
                  € 7,659 /sqm{" "}
                </span>
                is the expected price rate for this property
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">€ 459,540 </span>
                is the predicted <b>Value of this Property</b>
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">€ 274 /sqm </span>
                is the expected rent rate for this property
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">€ 16,495 </span>
                is the Expected <b>Yearly Rent</b> for this property
              </p>
            </div>
            <div className="mt-5">
              <p className="text-[12px] flex flex-wrap items-center">
                <span className="text-[20px] md:text-[30px] text-green-300 me-2">
                  € 359,540
                </span>
                is how much the listing price in{" "}
                <b className="ms-1">undervalued</b>
                <IoIosInformationCircleOutline className="text-[15px] md:text-[25px] ms-3" />
              </p>
              <p className="text-[12px] flex flex-wrap items-center">
                <span className="text-[20px] md:text-[30px] text-green-300 me-2">
                  € 9,739
                </span>
                is how much <b className="mx-1">Cash</b> you can expect to{" "}
                <b className="ms-1">Earn Every Year</b>
                <IoIosInformationCircleOutline className="text-[15px] md:text-[25px] ms-3" />
              </p>
              <p className="text-[12px] flex flex-wrap items-center">
                <span className="text-[20px] md:text-[30px] text-green-300 me-2">
                  € 15,243
                </span>{" "}
                is your <b className="mx-1">Annual Return</b> for the first 5
                years
                <IoIosInformationCircleOutline className="text-[15px] md:text-[25px] ms-3" />
              </p>
              <p className="text-[12px] flex flex-wrap items-center">
                <span className="text-[20px] md:text-[30px] text-green-300 me-2">
                  € 466,474
                </span>{" "}
                is the expected <b className="mx-1">value</b> fo your{" "}
                <b className="mx-1"> property in 5 years</b>
                <IoIosInformationCircleOutline className="text-[15px] md:text-[25px] ms-3" />
              </p>
              <p className="text-[12px] flex flex-wrap items-center">
                <span className="text-[20px] md:text-[30px] text-green-300 me-2">
                  13.4%
                </span>{" "}
                is your expected average{" "}
                <b className="mx-1">Return on Investment </b> fo your in the
                first 5 years{" "}
                <IoIosInformationCircleOutline className="text-[15px] md:text-[25px] ms-3" />
              </p>
            </div>
            <div className="mt-5">
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">12% </span> is your
                expected
                <b>Return on Investment </b> in the first year.
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">19% </span>
                is your expected <b>Return on Investment </b> for the duration
                of your mortgage.
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">6 months</span>
                is your <b>break-even</b> point. That’s how long you need to
                wait for getting your initial capital back
              </p>
              <p className="text-[12px]">
                <span className="text-[20px] text-green-300">0.3% </span>
                is the Expected <b>Yearly Growth</b> of your{" "}
                <b> Property Value</b>
              </p>
            </div>
            <div className="mt-5">
              <p className="text-rose-400  hover:text-rose-300 transition text-[12px] flex items-center">
                <span className="underline cursor-pointer hover:text-rose-300 transition">
                  Compara il tuo ROI ad altri asset{" "}
                </span>
                <svg
                  width={18}
                  height={11}
                  className="ms-4 cursor-pointer"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.83329 10.7301L0.666626 9.56344L6.83329 3.3551L10.1666 6.68844L14.5 2.39677H12.3333V0.730103H17.3333V5.7301H15.6666V3.56344L10.1666 9.06344L6.83329 5.7301L1.83329 10.7301Z"
                    fill="#FB7185"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Predizione di prezzo dell’immobile.
            {openSections[6] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(6)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(6)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[6]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
          >
            <h3 className="text-lg ">Prezzo dell’immobile</h3>
            <p className="text-[14px] text-gray-500">Subtitle</p>

            <AreaChart
              className="mt-4 h-72"
              data={chartdata2}
              index="date"
              categories={["Price"]}
              colors={["red"]}
              yAxisWidth={30}
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[12px] flex items-center ">
            Stima dell’anadamento del prezzo di Affitto.
            {openSections[7] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(7)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(7)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[7]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
          >
            <h3 className="text-lg ">Prezzo di Affitto</h3>
            <p className="text-[14px] text-gray-500">Subtitle</p>

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
            Statistiche Avanzate.
            {openSections[8] ? (
              <IoIosArrowUp
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(8)}
              />
            ) : (
              <IoIosArrowDown
                className="text-[15px] ms-4 cursor-pointer"
                onClick={() => toggleSection(8)}
              />
            )}{" "}
          </p>
          <div
            ref={sectionRefs[8]}
            className="transition-max-height duration-300 ease-in-out overflow-hidden flex justify-between md:gap-32 mt-5"
          >
            <div className="w-[45%]">
              <p>Yield Index</p>
              <p className="text-green-300 text-[12px]">
                <span className="text-[20px]">8.9</span>/10
              </p>
              <p>Demand Index</p>
              <p className="text-green-300 text-[12px]">
                <span className="text-[20px]">7.3</span>/10
              </p>
              <p>Expected Yearly Rent</p>
              <p className="text-green-300 text-[20px]">€ 16,495</p>
              <p>Price to Rent Ratio</p>
              <p className="text-green-300 text-[20px]">6.06</p>
              <p>Expected Gross Yield</p>
              <p className="text-green-300 text-[20px]">16.05%</p>
              <p>Cash on Cash Return</p>
              <p className="text-green-300 text-[20px]">39.75%</p>
              <p>Annual Cash Flow</p>
              <p className="text-green-300 text-[20px]">€ 9,739</p>
            </div>
            <div className="w-[45%]">
              <p>ROI (year 1)</p>
              <p className="text-green-300 text-[12px]">
                <span className="text-[20px]">8.9</span>/10
              </p>
              <p>Demand Index</p>
              <p className="text-green-300 text-[20px]">12.59%</p>
              <p>Annual Return (year 1)</p>
              <p className="text-green-300 text-[20px]">€13,126</p>
              <p>ROI (year 5)</p>
              <p className="text-green-300 text-[20px]">14.59%</p>
              <p>Annual Return (year 5)</p>
              <p className="text-green-300 text-[20px]">€15,243</p>
              <p>Expected Rate</p>
              <p className="text-green-300 text-[12px]">
                <span className="text-[20px]">€ 7,659</span> /sqm
              </p>
              <p>Expected Property Price</p>
              <p className="text-green-300 text-[20px]">€ 459,540</p>{" "}
              <p>Valuation vs Listed Price</p>
              <p className="text-green-300 text-[20px]">-78.24%</p>{" "}
              <p>Expected Yearly Growth</p>
              <p className="text-green-300 text-[20px]">0.3%</p>
              <p>ROI without mortgage</p>
              <p className="text-green-300 text-[20px]">13.49%</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[12px] flex items-center ">
              Zona di predizione
              {openSections[9] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(9)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(9)}
                />
              )}{" "}
            </p>

            <div
              ref={sectionRefs[9]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden mt-5"
            >
              <Image
                src={"/map.png"}
                width={1000000000000000}
                height={100000000000000}
                alt="map"
                className="w-[100%] h-[100%] rounded-xl"
              />
              <p className="text-sm mt-3">Milano, Centro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
