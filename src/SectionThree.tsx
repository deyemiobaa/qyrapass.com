import checkmark from "./assets/checkmark.png";
import image from "./assets/herotwo.png"
import { Button } from "./components/Button";

export const SectionThree = () => {
  return (
    <div className="container py-20  px-5 md:px-10 lg:15px xl:px-20 md:py-20 xl:py-30 mx-auto">
     <div className="">
        <h1 className=" mb-5 text-2xl  md:text-4xl xl:text-[56px] text-center lg:text-left font-semibold tracking-tight text-[#1B1F3B]">QyraPass fixes that!</h1>
        <p className="mb-7 text-sm text-center lg:text-left md:text-sm xl:text-lg/[28px] text-[#333858] lg:max-w-lg">Manage who enters your space with just a QR code.Revoke access anytime—from your phone.</p>
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 justify-between items-center">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <div className="flex items-center gap-3 bg-[#F1F5F9] px-4 lg:px-6 py-3 rounded-4xl md:w-[430px]">
                    <img src={checkmark} alt="" className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                    <p className="font-semibold text-sm md:text-lg">Scan a QR code from any smartphone</p>
                </div>
                <div className="flex items-center gap-3 bg-[#F1F5F9] px-3 lg:px-6 py-3 rounded-4xl w-full">
                    <img src={checkmark} alt="" className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                    <p className="font-semibold text-sm md:text-lg">Scan a QR code from any smartphone</p>
                </div>
                <div className="flex items-center gap-3 bg-[#F1F5F9] px-3 lg:px-6 py-3 rounded-4xl w-full">
                    <img src={checkmark} alt="" className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                    <p className="font-semibold text-sm md:text-lg">Scan a QR code from any smartphone</p>
                </div>
                <Button />
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
     </div>
    </div>
  )
}
