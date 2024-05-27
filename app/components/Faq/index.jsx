"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    faqRefs.forEach((ref, index) => {
      if (activeFaq === index) {
        ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
      } else {
        ref.current.style.maxHeight = "0px";
      }
    });
  }, [activeFaq, faqRefs]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Da dove provengono i vostri dati?",
      answer:
        "Raccogliamo i dati da diverse fonti: motori di annunci immobiliari online, informazioni dall’Osservatorio del Mercato Immobiliare, dati statistici dall’ISTAT.",
    },
    {
      question: "Quanto sono accurati i vostri dati?",
      answer: ` Lorem ipsum dolor sit amet&apos; consectetur adipiscing elit&apos;
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam&apos; quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
      question: "Posso cancellare la mia sottoscrizione?",
      answer: `
        Lorem ipsum dolor sit amet&apos; consectetur adipiscing elit&apos;
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam&apos; quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat
        `,
    },
    {
      question: "Posso provare prima di iscrivermi?",
      answer: `
        Lorem ipsum dolor sit amet&apos; consectetur adipiscing elit&apos;
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam&apos; quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat
        `,
    },
  ];

  return (
    <div className="min-h-[600px] py-16 md:flex justify-center bg-zinc-800 border-t-[1px] border-zinc-500">
      <div className="text-center mb-12 md:mb-0 md:text-start">
        <div className="text-[28px]">Domande Frequenti.</div>
        <p className="text-[13px] text-center mt-4 leading-[15.4px] font-light">
          Le risposte alle domande piú richieste su backdoor.
        </p>
      </div>
      <div className="md:ms-20 w-[100%] md:w-[600px] px-5 md:px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-[1px] border-zinc-500 pb-5 w-[100%] mb-14"
          >
            <h1
              className="text-[15px] font-[700] flex items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              {activeFaq === index ? (
                <IoIosArrowUp className="ms-4" />
              ) : (
                <IoIosArrowDown className="ms-4" />
              )}
            </h1>
            <div
              ref={faqRefs[index]}
              className={`transition-max-height duration-300 ease-in-out overflow-hidden text-[13px] mt-5 font-light`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
