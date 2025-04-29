import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { SectionEight } from "../components/sections/SectionEight";
import SectionFive from "../components/sections/SectionFive";
import { SectionFour } from "../components/sections/SectionFour";
// import { SectionSeven } from "../components/sections/SectionSeven";
import { SectionSix } from "../components/sections/SectionSix";
import { SectionThree } from "../components/sections/SectionThree";
import { SectionTwo } from "../components/sections/SectionTwo";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* <SectionSeven /> */}
      <SectionEight />
      <Footer />
    </>
  );
}
