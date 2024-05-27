"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Mainbtn from "../MainBtn";

function Discover() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax-container container-discover relative min-h-[100vh] block md:flex items-center justify-center">
      <div className="w-[100wh] md:w-[600px] md:me-32 mt-20">
        <div className="text-center">
          <div className="flex justify-center">
            <div>
              <Image
                src={"/logo.png"}
                alt="logo"
                height={10000}
                width={1000000}
                className="w-[100%] h-[84px]"
              />
            </div>
          </div>
          <p className="text-[28px] mt-8 font-extralight">
            Trova il migliore rendimento&apos;{" "}
            <span className="text-rose-400">subito</span>.
          </p>
          <p className="text-[13px] mt-5 leading-[15.4px] font-light">
            Usa la potenza dell&apos;intelligenza artificiale per trovare e
            reperire le migliori offerte immobiliari. Utilizza i nostri potenti
            indici per scoprire il miglior prezzo&apos; la migliore
            crescita&apos; il miglior rendimento. Ricerca per BTL&apos;
            HMO&apos; ristrutturazione&apos; patrimonio netto negativo&apos;
            ROI&apos; BMV&apos; condizione e molto altro.
          </p>

          <div className="flex justify-center mt-10">
            <Mainbtn text={"Prova Gratis"} />
          </div>
          <p className="text-[13px] mt-10 leading-[15.4px] font-light">
            Trova subito offerte immobiliari. Nessun rischio&apos; cancella in
            qualsiasi momento.
          </p>
        </div>
      </div>
      <div className="images-container relative w-[300px]  md:w-[400px] h-[500px]">
        <Image
          src="/sect3-card.png"
          alt="Image 1"
          width={400}
          height={200}
          className="image1 absolute top-[6%] md:top-[30%] left-[-16%] md:left-[30%]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <Image
          src="/sect3-bg.png"
          alt="Image 2"
          width={400}
          height={200}
          className="image2 absolute top-[0px] left-[0px]"
          style={{ transform: `translateY(${scrollY * 0.07}px)` }}
        />
      </div>
    </section>
  );
}

export default Discover;
