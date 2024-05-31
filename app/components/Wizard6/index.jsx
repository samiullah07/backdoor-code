import React from "react";
import { TbWorldSearch } from "react-icons/tb";

function Wizard6() {
  return (
    <div className=" h-[530px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <TbWorldSearch className=" text-rose-400 text-[30px]" />
        <h1 className="text-[24px] text-center w-[430px] mt-6">
          Backdoor AI sta ora calcolando l’investimento giusto per te.
        </h1>
        <p className="text-[12px] text-center w-[430px] mt-4 leading-[16px]">
          Ricorda che puoi personalizzare ulteriormente la tua ricerca <br />{" "}
          accedendo ai <span className="text-red-400">filtri</span> nella barra
          in alto. <br /> Piú precisi sono i tuoi dati, piú precise saranno le
          raccomandazioni.
        </p>
      </div>
    </div>
  );
}

export default Wizard6;
