import Image from "next/image";
import { Button } from "./button";
function Chef() {
  return (
    <main className=" h-full flex flex-col py-20 justify-center items-center bg-[#080808] ">
      <div className=" flex flex-col justify-center gap-10 items-center w-[90%]">
        <div className=" flex w-[100%] gap-2 justify-center flex-col items-center">
          <Image src={"/images/text3.svg"} alt="font" height={40} width={169} />
          <h2 className=" text-text font-bold text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-primary1">Me</span>et Our Chef
          </h2>
        </div>
        <div className=" flex items-center justify-center gap-5">
            <div className=" flex gap-5 flex-col lg:flex-row">
            <Image
            className=" rounded-lg"
            src={'/images/card1.svg'}
            alt="chef"
            width={200}
            height={291}
             />
              <Image
               className=" rounded-lg"
            src={'/images/card2.svg'}
            alt="chef"
            width={200}
            height={291}
             />
             </div>
             <div  className=" flex gap-5 flex-col lg:flex-row" >
              <Image
               className=" rounded-lg"
            src={'/images/card3.svg'}
            alt="chef"
            width={200}
            height={291}
             />
              <Image
               className=" rounded-lg"
            src={'/images/card4.svg'}
            alt="chef"
            width={200}
            height={291}
             />
             </div>
        
        </div>
        <Button
        className=" rounded-2xl border border-primary1 bg-[#080808] text-text "
         variant="outline">See More</Button>

      </div>
    </main>
  );
}

export default Chef;
