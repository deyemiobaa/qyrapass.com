import "swiper/swiper-bundle.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../Button";
import icon from "../../assets/iconn.png";
import iconThree from "../../assets/iconnnn.png";
import iconTwo from "../../assets/iconnn.png";
import image from "../../assets/Overlay.png";
import imageThree from "../../assets/Overlay3.png";
import imageTwo from "../../assets/overlay2.png";

const carouselData = [
  {
    image: image,
    name: "Gym and Studios",
    description:
      "Eliminate front desk rushes—members scan in securely, 24/7. No more shared passes or failed fingerprint reads.",
  },
  {
    image: imageTwo,
    name: "Co-Working Spaces",
    description:
      "Automate access for 500+ members with revocable QR passes. Instant lockdown when members cancel.",
  },
  {
    image: imageThree,
    name: "Property Managers",
    description:
      "Replace easily copied fobs and unreliable fingerprint scanners with encrypted QR codes. Audit trails for every entry/exit.",
  },
  {
    image: image,
    name: "Retail Staff rooms",
    description:
      "Replace easily copied fobs and unreliable fingerprint scanners with encrypted QR codes. Audit trails for every entry/exit.",
  },
  {
    image: imageTwo,
    name: "Co-Working Spaces",
    description:
      "Automate access for 500+ members with revocable QR passes. Instant lockdown when members cancel.",
  },
  {
    image: imageThree,
    name: "Co-Working Spaces",
    description:
      "Automate access for 500+ members with revocable QR passes. Instant lockdown when members cancel.",
  },
  {
    image: image,
    name: "Co-Working Spaces",
    description:
      "Automate access for 500+ members with revocable QR passes. Instant lockdown when members cancel.",
  },
];

const SectionFive = () => {
  return (
    <div className="container py-16 px-5 md:px-10 lg:px-15 xl:px-20 md:py-20 xl:py-30 mx-auto bg-[#1B1F3B]">
      <div className="space-y-8">
        <div className="flex justify-between gap-10 items-center text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[56px]/[64px] tracking-tight font-semibold max-w-2xl">
            QyraPass is designed for modern spaces...
          </h1>
          <div className="flex gap-4">
            <button
              id="section5-prev"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={32} className="text-white" />
            </button>
            <button
              id="section5-next"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowRight size={32} className="text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            navigation={{
              prevEl: "#section5-prev",
              nextEl: "#section5-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {carouselData.map((data, index) => (
              <SwiperSlide
                key={index}
                className="!w-[368px] h-[376px] swiper-slide-custom"
              >
                <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden group">
                  <div className="relative h-full">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {data.name}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-center">
          <Button />
        </div>

        <div className="bg-white px-5 py-10 flex flex-col space-y-4 lg:flex-row justify-between gap-2   rounded-2xl">
          <div className="flex items-center gap-2">
            <img src={icon} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl  lg:text-4xl font-bold text-[#1B1F3B]">
                78%
              </h1>
              <p className="text-sm lg:text-md font-medium text-[#1B1F3B]">
                less complaints about lost keys
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconTwo} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B1F3B]">
                62%
              </h1>
              <p className="text-sm lg:text-md font-medium text-[#1B1F3B]">
                62% faster morning check-ins
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconThree} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B1F3B]">
                100%
              </h1>
              <p className="text-sm lg:text-md font-medium text-[#1B1F3B]">
                happier front desk staff
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
