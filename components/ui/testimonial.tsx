import Image from "next/image";
function Testimonial() {
  return (
    <main className=" h-full py-10 items-center justify-center  flex flex-col bg-[#080808]">
      <div className=" flex w-[90%] justify-center flex-col items-center  ">
        <div className=" flex w-[100%] flex-col gap-3  justify-center sm:justify-start items-center md:items-start">
          <Image src={"/images/text2.svg"} alt="font" height={40} width={88} />
          <h2 className=" text-text font-bold text-2xl lg:text-4xl xl:text-5xl">
            What our clientare saying
          </h2>
        </div>
        <div className="flex justify-center items-center">
            <Image
            src={'/images/Testimonials.svg'}
            alt="testomonial"
            height={451}
            width={868}
            />
        </div>
      </div>
    </main>
  );
}

export default Testimonial;
