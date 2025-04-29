import Footer from "../components/Footer";

export default function RequestAccountDeletion() {
  return (
    <>
      <div className=" h-[80vh] px-6 py-2 md:h-[75vh] bg-[#1B1F3B] ">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-[2.25rem] text-center md:text-left font-[900] leading-[4.25rem] tracking-[-0.09rem] text-[#FFFFFF] md:text-[3.5rem] md:font-bold md:leading-[4rem]">
            Request Account Deletion
          </h1>
        </div>
      </div>
      <div className="px-6 py-8 max-w-7xl mx-auto text-[#333858] h-[40vh]">
        To delete all your information from the QyraPass website,
        kindly send an email to{" "}
        <a className="font-medium" href="mailto:admin@qyrapass.com">admin@qyrapass.com</a>
      </div>
      <Footer />
    </>
  );
}
