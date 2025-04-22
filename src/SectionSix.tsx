import icon from "./assets/icon.png";
import one from "./assets/onee.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import Card from "./components/Card";
import imageOne from "./assets/Payment.png";
import imageTwo from "./assets/payment2.png";
import imageThree from "./assets/payment3.png"
import { Button } from "./components/Button";


export const SectionSix = () => {
  return (
    <div className="container py-15 px-5 md:px-10 lg:15px xl:px-20 md:py-20 xl:py-30 mx-auto">
      <div className="space-y-10">
        <div className="flex">
          <img src={icon} alt="" className="w-[20px] h-[20px]"/>
          <p className="text-[#696CFF]">Let's go!🥳</p>
        </div>
        <h1 className="-mt-7 text-2xl  md:text-4xl xl:text-[56px] text-left font-semibold tracking-tight text-[#1B1F3B]">How Does it work?🤔</h1>
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="space-y-5">
            <div>
              <div className="flex gap-2 items-center ">
                <img src={one} alt="" />{" "}
                <div className="w-full   h-[1px] border border-[#1B1F3B]/50"></div>
              </div>
            </div>
            <Card header="Scan"  content="Member shows their unique QR code to be scanned" imageSrc ={imageOne} bgColor="bg-[#F5FCFF]" headerColor="text-[#1B1F3B]" color="text-[#333858]"/>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex gap-2 items-center">
                <img src={two} alt="" />{" "}
                <div className="w-full   h-[1px] border border-[#1B1F3B]/50"></div>
              </div>
            </div>
            <Card header="Verify"  content="Our system checks permissions in milliseconds" imageSrc ={imageTwo} bgColor="bg-[#007BFF]" headerColor="text-[#ffffff]" color="text-[#DBF1FF]"/>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex gap-2 items-center">
                <img src={three} alt="" />{" "}
                <div className="w-full   h-[1px] border border-[#1B1F3B]/50"></div>
              </div>
            </div>
            <Card header="Access"  content="Door unlocks - entry logged automatically" imageSrc ={imageThree} bgColor="bg-[#1B1F3B]" headerColor="text-[#ffffff]" color="text-[#DBF1FF]"/>
          </div>
        </div>
        <div className="flex items-center justify-center">
        <Button />
        </div>
      </div>
    </div>
  );
};
