import arrow from "../assets/arrow.png"

export const Button = () => {
  return (
    <button className="flex gap-2 bg-[#007BFF] max-w-[180px] text-white rounded-full px-5 py-3">
    <p>Get a Demo</p>
    <img src={arrow} alt="" />
  </button>
  )
}
