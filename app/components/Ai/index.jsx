import Image from "next/image";
import React from "react";
import Mainbtn from "../MainBtn";

function Ai() {
  return (
    <div className="h-[500px] flex justify-center bg-gray-800 items-center border-t-[1px] border-gray-500">
      <div className="flex justify-between">
        <div>
          <Image src={"/thumbnail.png"} width={320} height={320} alt="thumbnail"/>
        </div>
        <div className="ms-10 w-[660px] min-h-[242px] flex justify-end items-center">
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
