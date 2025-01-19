import Image from "next/image"

function Blog() {
  return (
<main className=" flex h-full py-20 flex-col justify-center items-center bg-[#080808]">
    <div className=" flex justify-center items-center gap-5 flex-col w-[90%]">
    <div className=" flex w-[100%] gap-2 justify-center flex-col items-center">
          <Image src={"/images/text3.svg"} alt="font" height={40} width={169} />
          <h2 className=" text-text font-bold text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-primary1">La</span>test News & Blog
          </h2>
        </div>
     <div className=" flex flex-col lg:flex-row justify-center w-[100%] items-center gap-5  ">
        <div className=" flex justify-center  w-[70%] md:w-[323px]  items-center flex-col ">
        <div className="">
          <Image 
          src={'/images/food5.svg'}
          alt="food"
          width={453}
          height={250}
          />
          </div>
          <div className=" flex  flex-col p-4  gap-2  border-t-0 border border-text">
            <span className=" text-primary1 text-sm font-inter ">
            10 February 2022 
            </span>
            <h5 className=" font-semibold text-base  text-text ">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h5>
            <div className=" flex justify-between">
                <span className=" text-text text-xs">Learn More</span>
                <Image 
                src={'/icons/Icon.svg'}
                alt="icons"
                height={20}
                width={76}
                />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-[70%] md:w-[323px] flex-col ">
            <div className=" w-[]">
          <Image 
          className=" object-cover "
          src={'/images/food1.svg'}
          alt="food"
          width={453}
          height={210}
          />
          </div>
          <div className=" flex flex-col p-4 gap-2  border-t-0 border border-text">
            <span className=" text-primary1 text-sm font-inter ">
            10 February 2022 
            </span>
            <h5 className=" font-semibold text-base  text-text ">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h5>
            <div className=" flex justify-between">
                <span className=" text-text text-xs">Learn More</span>
                <Image 
                src={'/icons/Icon.svg'}
                alt="icons"
                height={20}
                width={76}
                />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-[70%] md:w-[323px] flex-col ">
          <Image 
          src={'/images/food4.svg'}
          alt="food"
          width={453}
          height={250}
          />
          <div className=" flex  flex-col p-4 gap-2 border-t-0 border border-text">
            <span className=" text-primary1 text-sm font-inter ">
            10 February 2022 
            </span>
            <h5 className=" font-semibold text-base  text-text ">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h5>
            <div className=" flex justify-between">
                <span className=" text-text text-xs">Learn More</span>
                <Image 
                src={'/icons/Icon.svg'}
                alt="icons"
                height={20}
                width={76}
                />
            </div>
          </div>
        </div>
     </div>
    </div>

</main>
  )
}

export default Blog