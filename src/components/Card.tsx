interface Props {
  header: string;
  content: string;
  imageSrc: string;
  bgColor: string;
  headerColor: string;
  color: string;
}

const Card = ({
  header,
  content,
  imageSrc,
  bgColor,
  headerColor,
  color,
}: Props) => {
  return (
    <div
      className={` z-10   rounded-[20px]  h-[350px] flex flex-col  p-10 overflow-hidden ${bgColor}`}
    >
      <div className=" h-full relative ">
        <div className="space-y-2">
          <h1
            className={`font-bold text-2xl/[120%] tracking-tight ${headerColor}`}
          >
            {header}{" "}
          </h1>
          <p className={`text-sm lg:text-lg/[28px] ${color}`}>{content}</p>
        </div>
        <img
          src={imageSrc}
          alt=""
          className="w-[280px] absolute -bottom-10 -right-10"
        />
      </div>
    </div>
  );
};

export default Card;
