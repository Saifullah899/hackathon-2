import Image from "next/image";

function FoodCatagories() {
  return (
    <main className="h-full py-16  flex flex-col md:flex-row items-center justify-center bg-[#080808]">
      <div className=" w-[90%] flex flex-col justify-center gap-5 items-center">
        <div className=" flex w-[100%] gap-2 justify-center flex-col items-center">
          <Image src={"/images/text3.svg"} alt="font" height={40} width={169} />
          <h2 className=" text-text font-bold text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-primary1">Ch</span>oose Food Iteam
          </h2>
        </div>
        <div className=" flex w-[100%] justify-center items-center gap-3 food item">
          <div className=" flex flex-col xl:flex-row gap-3">
            <Image
              className=" rounded-sm p-2"
              src={"/images/item1.svg"}
              alt="food item1"
              width={270}
              height={398}
            />
            <Image
              className=" rounded-sm p-2"
              src={"/images/item2.svg"}
              alt="food item2"
              width={270}
              height={308}
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3 ">
            <Image
              className=" rounded-sm p-2"
              src={"/images/item3.svg"}
              alt="food item3"
              width={270}
              height={308}
            />
            <Image
              className=" rounded-sm p-2"
              src={"/images/item4.svg"}
              alt="food item4"
              width={270}
              height={308}
            />
          </div>
        </div>
        <div className=" ordinary  flex flex-col justify-center items-center md:flex-row  mt-14 ">
          <div className=" flex  flex-col md:flex-row items-center justify-center ">
            <div className=" ">
              <Image
                src={"/images/grid.svg"}
                alt="grid"
                height={716}
                width={659}
              />
            </div>
            <div className=" flex w-[90%] md:w-1/2 justify-center  md:flex-row  lg:justify-end">
              <div className=" flex flex-col gap-3 justify-center w-[85%]">
                <div className="flex flex-col gap-3">
                  <Image
                    src={"/images/text2.svg"}
                    alt="font"
                    height={40}
                    width={88}
                  />
                  <h2 className=" text-text font-bold text-3xl lg:text-4xl xl:text-5xl">
                    <span className="text-primary1">We</span> Art of speed food
                    Quality
                  </h2>
                  <p className=" text-text font-inter font-extralight text-sm">
                    Lorem ipsum dolor sit amet, Urna, elit augue urna, vitae
                    feugiat pretium donec id elementum. Ultrices mattis sed
                    vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                    consequat.
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <div className=" flex flex-col items-center gap-2 ">
                    <div className=" flex items-center justify-center rounded-md bg-primary1 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={"/icons/Hamburger.svg"}
                        alt="hamburger icon"
                        height={40}
                        width={40}
                      />
                    </div>
                    <span className="font-inter text-base text-text">
                      {" "}
                      Fast Food
                    </span>
                  </div>
                  <div className=" flex flex-col items-center gap-2 ">
                    <div className=" flex items-center justify-center rounded-md bg-primary1 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={"/icons/Cookie.svg"}
                        alt="hamburger icon"
                        height={40}
                        width={40}
                      />
                    </div>
                    <span className="font-inter text-base text-text">
                      Lunch
                    </span>
                  </div>
                  <div className=" flex flex-col items-center gap-2 ">
                    <div className=" flex items-center justify-center rounded-md bg-primary1 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={"/icons/Wine.svg"}
                        alt="hamburger icon"
                        height={40}
                        width={40}
                      />
                    </div>
                    <span className="font-inter text-base text-text">
                      Dinner
                    </span>
                  </div>
                </div>
                <Image
                  src={"/images/experience.svg"}
                  alt="experience"
                  height={30}
                  width={374}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FoodCatagories;
