import React from "react";
import Image from "next/image";
function Menu() {
  return (
    <main className="h-full py-16  flex flex-col md:flex-row items-center justify-center bg-[#080808]">
      <div className=" w-[90%]  flex flex-col justify-center gap-5 items-center">
        <div className=" flex w-[100%] gap-2 justify-center flex-col items-center">
          <Image src={"/images/text3.svg"} alt="font" height={40} width={169} />
          <h2 className=" text-text font-bold text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-primary1">Fr</span>om Our Menu
          </h2>
        </div>
        <div className=" hidden mob:flex justify-center items-center">
          <ul className=" flex items-center gap-4 text-text text-sm font-light ">
            <li className="text-primary1">BreakFast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>Drink</li>
            <li>Snack</li>
            <li>Soup</li>
          </ul>
        </div>
        <div className=" flex mainmenu justify-center items-center flex-col xl:flex-row w-[100%]">
          <div className="">
            <Image
              src={"/images/mainmenu.svg"}
              alt="menu"
              width={515}
              height={406}
            />
          </div>
          <div className=" flex  justify-center items-center ">
            <div className="  flex justify-center item-center gap-1 flex-col">
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu1.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">Lettuce Leaf</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu2.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">
                    Fresh BreakFast
                  </h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    14.5$
                  </span>
                </div>
              </div>
              <div className="flex text-text rounded-md p-4">
                <Image
                  src={"/images/menu3.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">mild Butter</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu4.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
               
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">Fresh Bread</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
            </div>
           
            <div className=" hidden md:flex gap-1 flex-col">
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu1.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">Lettuce Leaf</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu2.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">
                    Fresh BreakFast
                  </h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    14.5$
                  </span>
                </div>
              </div>
              <div className="flex text-text rounded-md p-4">
                <Image
                  src={"/images/menu3.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">mild Butter</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
              <div className="flex  text-text rounded-md p-4">
                <Image
                  src={"/images/menu4.svg"}
                  width={60}
                  height={60}
                  alt="Dish"
                  className="rounded-md object-cover mr-4"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl text-text font-bold">Fresh Bread</h2>
                  <p className="text-text text-xs">
                    Lacus nisi, et ac dapibus velit in consequat.
                  </p>
                  <span className="text-primary1 text-base font-semibold">
                    12.5$
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
       
      </div>
    </main>
  );
}

export default Menu;
