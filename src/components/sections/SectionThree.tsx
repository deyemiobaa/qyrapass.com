import { Button } from "../Button";
import checkmark from "../../assets/checkmark.png";
import image from "../../assets/herotwo.png";

export const SectionThree = () => {
  return (
    <div className="container py-10  px-5 md:px-10  xl:px-20 md:py-10 xl:py-20 mx-auto">
      <div className="space-y-10">
        <div className="space-y-5">
          <h1 className="  text-2xl  md:text-4xl xl:text-[56px] text-center lg:text-left font-semibold tracking-tight text-[#1B1F3B]">
            QyraPass fixes that!
          </h1>
          <div>
            <p className=" text-sm text-center lg:text-left md:text-sm xl:text-lg/[28px] text-[#333858] lg:max-w-lg">
              Manage who enters your space with just a QR code.
            </p>
            <p className=" text-sm text-center lg:text-left md:text-sm xl:text-lg/[28px] text-[#333858] lg:max-w-lg">
              Revoke access anytime—from a simple, and easy-to-use platform.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 justify-between items-center lg:items-start">
          <div className="flex flex-col justify-center items-center lg:items-start gap-5">
            <div className="flex items-center gap-3 bg-[#F1F5F9] px-4 lg:px-6 py-3 rounded-4xl md:w-[430px]">
              <img
                src={checkmark}
                alt=""
                className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
              />
              <p className="font-semibold text-sm md:text-lg">
                Manage your members access from one dashboard
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#F1F5F9] px-3 lg:px-6 py-3 rounded-4xl w-full">
              <img
                src={checkmark}
                alt=""
                className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
              />
              <p className="font-semibold text-sm md:text-lg">
                Get a personalized QR code
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#F1F5F9] px-3 lg:px-6 py-3 rounded-4xl w-full">
              <img
                src={checkmark}
                alt=""
                className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
              />
              <p className="font-semibold text-sm md:text-lg">
                Members scan the QR code from any smartphone
              </p>
            </div>
            <Button />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
