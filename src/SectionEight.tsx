import {  CircleArrowRight } from "lucide-react"

export const SectionEight = () => {
  return (
    <div className="container py-15 px-5 md:px-10 lg:15px xl:px-20 md:py-20 xl:py-20 mx-auto -mb-90 relative z-10 ">
         <div className="flex px-10 md:px-20 py-30 flex-col justify-center items-center bg-[#007BFF] space-y-4 rounded-2xl z-1000">
            <h1 className="text-2xl  md:text-4xl xl:text-[56px]  font-semibold tracking-tight text-white">Ready For Smarter Access ?</h1>
            <p className="text-sm text-center  md:text-sm xl:text-lg/[28px] text-white lg:max-w-lg">See how QyraPass works in 5 minutes.</p>
            <button className="flex gap-2 text-[#007BFF] max-w-[180px] bg-white rounded-full px-5 py-3">
    <p>Get a Demo</p>
    <CircleArrowRight color='rgba(0, 123, 255, 1)'/>
  </button>
         </div>
    </div>
  )
}
