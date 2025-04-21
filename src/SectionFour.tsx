import { Button } from "./components/Button";
import image from "./assets/image3.png"


export const SectionFour = () => {
  return (
    <div className="container py-15 px-5 md:px-10 lg:15px xl:px-20 md:py-20 xl:py-30 mx-auto">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="space-y-4  flex flex-col justify-center items-center lg:justify-between lg:items-start">
                    <p className="text-2xl md:text-3xl xl:text-5xl/[82px] font-medium text-center lg:text-left">Keys get lost. Fingerprints fail.</p>
                    <p className="text-3xl md:text-4xl xl:text-[56px]  font-semibold text-center lg:text-left">Your phone? Always with you.</p>
                    <p className="text-sm text-center lg:text-left md:text-sm xl:text-lg/[28px] text-[#333858] lg:max-w-lg">QyraPass lets people scan to enter—no physical keys, cards, or fingerprints. Just instant, secure access to your space.</p>
                    <Button />
                </div>
                <div className="max-w-[600px] md:min-w-[400px]">
                    <img src={image} alt="" className="w-full" />
                </div>
           </div>
        </div>
  )
}
