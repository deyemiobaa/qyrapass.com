import Card from "../Card";
import clock from "../../assets/clock.png";
import exclamationmark from "../../assets/exclamationmarkk.png";
import questionMark from "../../assets/questionmark.png";
import thumbsDown from "../../assets/thumbs-down.png";

export const SectionTwo = () => {
  return (
    <div className="container  px-5 md:px-10 lg:15px xl:px-20 md:py-20 xl:py-30 mx-auto">
      <div className="">
        <h1 className=" mb-5 text-2xl  md:text-4xl xl:text-[56px] text-center lg:text-left font-semibold tracking-tight text-[#1B1F3B]">
          Physical access is still stuck in the past{" "}
        </h1>
        <p className="mb-7 text-sm text-center lg:text-left md:text-sm xl:text-lg/[28px] text-[#333858]">
          ...and it's as cumbersome and draining as ever
        </p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="flex flex-col gap-5 mt-10">
            <Card
              header="Lost Keys & Cards"
              content="Keys and Access Cards get misplaced often, -and they are expensive to replace."
              imageSrc={exclamationmark}
              bgColor="bg-gradient-to-r from-[#BFD6FA] to-[#E8F0FC]"
              headerColor="text-[#1B1F3B]"
              color="text-[#333858]"
            />
            <Card
              header="Failed Fingerprint Scans"
              content="Fingerprint readers break often and fail to read correctly when hands are wet or worn out.”Place your finger again...and again…😩”"
              imageSrc={thumbsDown}
              bgColor="bg-[#007BFF]"
              headerColor="text-[#ffffff]"
              color="text-[#DBF1FF]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <Card
              header="Long Queues"
              content="Long lines at peak hours frustrate members and staff- especially when they have to record entries manually."
              imageSrc={clock}
              bgColor="bg-[#007BFF]"
              headerColor="text-[#ffffff]"
              color="text-[#DBF1FF]"
            />
            <Card
              header="Zero visibility"
              content="No record of who entered or when. And when attempted, cumbersome processes"
              imageSrc={questionMark}
              bgColor="bg-[#1B1F3B]"
              headerColor="text-[#ffffff]"
              color="text-[#DBF1FF]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
