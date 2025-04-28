import logo from "./assets/logo2.png";

const Footer = () => {
  return (
    <div className="-z-10">
      <div className="bg-[url('./assets/footer.png')] h-[300px] bg-cover bg-center w-full -z-10 "></div>
      <div className="-mt-2 bg-[#1B1F3B] -z-10">
        <div className="container  py-10 px-5 md:px-10 lg:15px xl:px-20 md:py-10 xl:py-10 mx-auto space-y-5">
          <div className="w-full   h-[1px] border border-[#BDD7EE26]/15"></div>
          <div className="flex justify-between items-center">
            <img
              src={logo}
              alt=""
              className="w-[100px] md:w-[120px] lg:w-[150px]"
            />
            <p className="text-sm font-medium text-[#FFFFFF66]/40">
              Copyright © 2025, QyraPass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
