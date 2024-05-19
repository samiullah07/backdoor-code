import React from "react";
import Mainbtn from "../MainBtn";
import Image from "next/image";

function Zones() {
  return (
    <div className="h-[500px] flex justify-center bg-gray-900 items-center border-t-[1px] border-gray-500">
      <div className="flex justify-between">
        <div className="w-[660px] min-h-[242px] flex items-center me-10">
          <div className="flex flex-col items-center">
            <p className="text-[28px] text-center">
              Trova le zone piú vantaggiose{" "}
              <span className="text-rose-400">per primo</span>.
            </p>
            <p className="text-[13px] text-center mt-5 leading-[15.4px] font-light px-7">
              Analizziamo i dati dell’Osservatorio del Mercato Immobiliare e
              quelli di migliaia di annunci <br /> per sondare il mercato e
              trovare zone ad alto rendimento. <br /> Utilizza i nostri potenti
              indici per scoprire il miglior prezzo, la migliore crescita, il
              miglior ROI.
            </p>
            <div className="mt-10">
              <Mainbtn text={"Esplora"} />
            </div>
            <p className="text-[13px] text-center mt-10 leading-[15.4px] font-light">
              Trova subito offerte immobiliari. Nessun rischio, cancella in
              qualsiasi momento.
            </p>
          </div>
        </div>
        <div>
          <Image src={"/thumbnail.png"} alt="thumbnail" width={320} height={320} />
        </div>
      </div>
    </div>
  );
}

export default Zones;
