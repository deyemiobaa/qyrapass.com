import arrow from "../assets/arrow.png";

export const Button = () => {
  return (
    <button className="flex  items-center gap-2 bg-[#007BFF] max-w-[180px] text-white rounded-full px-3 md:px-5 py-2 md:py-3">
      <p className="text-xs md:text-sm lg:text-lg">Get a Demo</p>
      <img src={arrow} alt="" className="w-[15px] lg:w-[20px]" />
    </button>
  );
};
