import Image from "next/image";
import Hero from "./components/Hero";
import Sect2 from "./components/Sect2";
import Discover from "./components/Discover";
import Immobiliare from "./components/Immobiliare";
import Search from "./components/Search";
import Zones from "./components/Zones";
import Ai from "./components/Ai";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Sect2 />
      <Discover />
      <Immobiliare />
      <Search />
      <Zones />
      <Ai />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}
