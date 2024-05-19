import Image from "next/image";
import React from "react";
import Mainbtn from "../MainBtn";

function Search() {
  return (
    <div className="h-[500px] flex justify-center bg-gray-800 items-center border-t-[1px] border-gray-500">
      <div className="flex justify-between">
        <div>
          <Image src={"/thumbnail.png"} width={320} height={320} />
        </div>
        <div className="ms-10 w-[660px] min-h-[242px] flex justify-end items-center">
          <div className="flex flex-col items-center">
            <p className="text-[28px] text-center">
              Settimane di ricerca ridotte a un{" "}
              <span className="text-rose-400">istante</span>.
            </p>
            <p className="text-[13px] text-center mt-5 leading-[15.4px] font-light px-7">
              Analizziamo migliaia di annuci ogni giorno per scoprire le
              migliori offerte. Con i nostri potenti indici puoi scoprire il
              miglior prezzo, la migliore crescita, il miglior rendimento.
              Ricerca per BTL, HMO, ristrutturazione, patrimonio netto negativo,
              ROI, BMV, condizione e molto altro.
            </p>
            <div className="mt-10">
              <Mainbtn text={"Scopri"} classes={"ps-20"} />
            </div>
            <p className="text-[13px] text-center mt-10 leading-[15.4px] font-light">
              Trova subito offerte immobiliari. Nessun rischio, cancella in
              qualsiasi momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
