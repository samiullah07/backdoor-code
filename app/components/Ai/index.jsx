import Image from "next/image";
import React from "react";
import Mainbtn from "../MainBtn";

function Ai() {
  return (
    <div className="min-h-[500px] py-12 flex justify-center  items-center border-t-[1px] border-zinc-500">
      <div className="md:flex justify-between">
        <div className="flex justify-center mb-10 md:mb-0">
          <Image src={"/thumbnail.png"} width={320} height={320} alt="thumbnail"/>
        </div>
        <div className="md:ms-10 md:w-[660px] px-4 min-h-[242px] md:flex justify-end items-center">
          <div className="flex flex-col items-center">
            <p className="text-[28px] text-center">
              La potenza dell’<span className="text-rose-400">AI</span> a
              portata di click.
            </p>
            <p className="text-[13px] text-center mt-5 leading-[15.4px] font-light px-7">
              Utilizziamo le piú recenti tecniche di Machine Learning per
              calcolare i prezzi <br /> e prevedere gli andamenti immobiliari.<br /> I nostri
              indicatori ti aiutano ad intuire il potenziale di ogni annuncio al
              primo sguardo.
            </p>
            <div className="mt-10">
              <Mainbtn text={"Analizza"} classes={"ps-20"} />
            </div>
            <p className="text-[13px] text-center mt-10 leading-[15.4px] font-light">
            Trova subito offerte immobiliari. Nessun rischio, cancella in qualsiasi momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
