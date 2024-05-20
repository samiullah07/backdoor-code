import Image from "next/image";
import React from "react";
import Mainbtn from "../MainBtn";

function HowItWorks() {
  return (
    <div className="min-h-[120vh] py-10 flex justify-center items-center border-t-[1px] border-zinc-500">
      <div className="flex flex-col items-center font-[400]">
        <p className="text-[20px] ">Come Funziona backdoor:</p>
        <div className="md:flex justify-between items-center mt-6">
          <div className="text-center mb-8 md:mb-0">
            <h2 className="text-[28px]">
              <span className="text-rose-400">Trova</span> la migliore Zona:
            </h2>
            <div className="mt-5">
              <Image
                src={"/thumbnail.png"}
                alt="thumbnail"
                width={320}
                height={320}
              />
            </div>
          </div>
          <div className="text-center md:px-8 mb-8 md:mb-0">
            <h2 className="text-[28px]">
              <span className="text-rose-400">Confronta</span> le migliori
              offerte
            </h2>
            <div className="mt-5">
              <Image
                src={"/thumbnail.png"}
                alt="thumbnail"
                width={320}
                height={320}
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-[28px]">
              <span className="text-rose-400">Analizza</span> i migliori
              immobili:
            </h2>
            <div className="mt-5">
              <Image
                src={"/thumbnail.png"}
                alt="thumbnail"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Mainbtn text={"Esplora"} />
        </div>
        <p className="text-[13px] text-center mt-7 leading-[15.4px] font-light">
          Trova subito offerte immobiliari. Nessun rischio&apos; cancella in
          qualsiasi momento.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
