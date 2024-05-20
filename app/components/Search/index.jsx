import Image from "next/image";
import React from "react";
import Mainbtn from "../MainBtn";

function Search() {
  return (
    <div>
      <div className="min-h-[500px] py-12 flex justify-center bg-transparent items-center border-t-[1px] border-zinc-500">
        <div className="md:flex justify-between">
          <div className="flex justify-center mb-10 md:mb-0">
            <Image
              src={"/thumbnail.png"}
              alt="thumbnail"
              width={320}
              height={320}
            />
          </div>
          <div className="md:ms-10 md:w-[660px] px-4 min-h-[242px] md:flex justify-end items-center">
            <div className="flex flex-col items-center">
              <p className="text-[28px] text-center">
                Settimane di ricerca ridotte a un{" "}
                <span className="text-rose-400">istante</span>.
              </p>
              <p className="text-[13px] text-center mt-5 leading-[15.4px] font-light px-7">
                Analizziamo migliaia di annuci ogni giorno per scoprire le
                migliori offerte. Con i nostri potenti indici puoi scoprire il
                miglior prezzo&apos; la migliore crescita&apos; il miglior
                rendimento. Ricerca per BTL&apos; HMO&apos;
                ristrutturazione&apos; patrimonio netto negativo&apos; ROI&apos;
                BMV&apos; condizione e molto altro.
              </p>
              <div className="mt-10">
                <Mainbtn text={"Scopri"} classes={"ps-20"} />
              </div>
              <p className="text-[13px] text-center mt-10 leading-[15.4px] font-light">
                Trova subito offerte immobiliari. Nessun rischio&apos; cancella
                in qualsiasi momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
