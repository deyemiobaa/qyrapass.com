import logo from "./assets/logo.png";
import herobg from "./assets/herobg.png";
import curve from "./assets/curve1.png"
import { Button } from "./components/Button";




export const Hero = () => {
  return (
    <div className="bg-[#1B1F3B] relative ">
        <div className="space-y-20 lg:space-x-5">
      <div className="flex justify-between items-center text-red-500 px-5 lg:px-10 xl:px-20  py-5 ">
        <img src={logo} alt="" />
        <Button />
      </div>
      <div className="flex justify-between items-center gap-20 px-8 lg:px-10 xl:px-20 py-5">
        <div className="flex flex-col   justify-center items-center lg:justify-between lg:items-start w-full gap-10 lg:gap-7 xl:gap-10 -mt-10">
          <h1 className="text-white text-3xl md:text-4xl  lg:text-4xl xl:text-[60px]/[120%] font-semibold text-center lg:text-left tracking-tight lg:max-w-full xl:max-w-xl">Seamless Entry for Modern Spaces</h1>
          <p className="font-medium text-sm md:text-lg text-center lg:text-left lg:text-sm xl:text-lg/[28px] text-white lg:max-w-xl ">
            Tired of broken fingerprint machines and missing Keys/cards?
            QyraPass replaces both with a simple QR scan from any phone.
          </p>
          <div className="space-y-2">
         <Button />
            <p className="text-left px-5 text-[#9CA2C5] text-xs lg:text-sm italic ">Talk with our team</p>
          </div>
        </div>
        <img src={herobg} alt=""  className="-mb-11 hidden   lg:block lg:w-[550px] xl:w-[650px]"/>
      </div>
      <div className="w-full absolute top-0 bottom-0 -mt-5 lg:-mt-5 xl:mt-23 lg:top-[824px] lg:bottom-[45px] ">
        <p className="text-center text-[#9CA2C5] text-sm/[24px] tracking-wider hidden lg:block ">ACCESS SIMPLIFIED! NO KEYS, NO CARDS, NO FINGERPRINTS — JUST SCAN</p>
      </div>
      <p className=" p-5 text-center text-[#9CA2C5] text-xs md:text-sm/[24px] tracking-wider block lg:hidden ">ACCESS SIMPLIFIED! NO KEYS, NO CARDS, NO FINGERPRINTS — JUST SCAN</p>
      <div className="w-full absolute -bottom-8  md:-bottom-10  -z-10  ">
        <img 
          src={curve} 
          alt="" 
          className="w-screen h-auto  z-10" 
          style={{ width: '100vw' }}
        />
      </div>
      </div>
    </div>
  );
};
