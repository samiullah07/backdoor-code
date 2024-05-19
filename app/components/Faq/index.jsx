"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <div className="min-h-[600px] py-16 flex justify-center bg-gray-800 border-t-[1px] border-gray-500">
      <div>
        <div className="text-[28px]">Domande Frequenti.</div>
        <p className="text-[13px] text-center mt-4 leading-[15.4px] font-light">
          Le risposte alle domande piú richieste su backdoor.
        </p>
      </div>
      <div className="ms-20 w-[600px]">
        <div className="border-b-[1px] border-gray-500 pb-5 w-[100%] mb-14">
          <h1
            className="text-[15px] font-[700] flex items-center cursor-pointer"
            onClick={() => setFaq1(!faq1)}
          >
            Da dove provengono i vostri dati?
            {faq1 ? (
              <IoIosArrowUp className="ms-4" />
            ) : (
              <IoIosArrowDown className="ms-4" />
            )}
          </h1>
          <div className={`${!faq1 && "hidden"} text-[13px] mt-5 font-light`}>
            Raccogliamo i dati da diverse fonti, motori di annunci immobiliari
            online, informazioni dall’Osservatorio del Mercato Immobiliare, dati
            statistici dall’ISTAT.
          </div>
        </div>
        <div className="border-b-[1px] border-gray-500 pb-5 w-[100%] mb-14">
          <h1
            className="text-[15px] font-[700] flex items-center cursor-pointer"
            onClick={() => setFaq2(!faq2)}
          >
            Quanto sono accurati i vostri dati?
            {faq2 ? (
              <IoIosArrowUp className="ms-4" />
            ) : (
              <IoIosArrowDown className="ms-4" />
            )}
          </h1>
          <div className={`${!faq2 && "hidden"} text-[13px] mt-5 font-light`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
        <div className="border-b-[1px] border-gray-500 pb-5 w-[100%] mb-14">
          <h1
            className="text-[15px] font-[700] flex items-center cursor-pointer"
            onClick={() => setFaq3(!faq3)}
          >
            Posso cancellare la mia sottoscrizione?
            {faq3 ? (
              <IoIosArrowUp className="ms-4" />
            ) : (
              <IoIosArrowDown className="ms-4" />
            )}
          </h1>
          <div className={`${!faq3 && "hidden"} text-[13px] mt-5 font-light`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
        <div className="border-b-[1px] border-gray-500 pb-5 w-[100%] mb-14">
          <h1
            className="text-[15px] font-[700] flex items-center cursor-pointer"
            onClick={() => setFaq4(!faq4)}
          >
            Posso provare prima di iscrivermi?
            {faq4 ? (
              <IoIosArrowUp className="ms-4" />
            ) : (
              <IoIosArrowDown className="ms-4" />
            )}
          </h1>
          <div className={`${!faq4 && "hidden"} text-[13px] mt-5 font-light`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
