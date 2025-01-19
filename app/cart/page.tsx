import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
function CartPage() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div className="w-screen flex flex-col gap-5 justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Shopping Cart</h2>
        <div className=" flex gap-2 font-lg ">
          <span className=" text-text">
            <Link href={"/home"}>Home</Link>
          </span>
          <Image
            src={"/icons/carerighlt.svg"}
            alt="Careright Arrow"
            width={12}
            height={12}
          />
          <span className="text-primary1">
            <Link href={"/cart"}>Shopping cart</Link>
          </span>
        </div>
      </div>
      <div className=" p-4 text-lg font-bold flex gap-24 lg:gap-52 items-center justify-evenly w-[90%] lg:w-[80%]">
        <span className="">Product</span>
        <ul className="  w-[70%] md:p-4 lg:pl-5 hidden sm:flex item-center gap-5 justify-between ">
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li> Remove</li>
        </ul>
      </div>
      <div className=" w-[90%]  ">
        <div className=" item1 p-4 flex flex-wrap gap-5 sm:gap-10 items-center justify-between sm:justify-evenly">
          <div className=" flex flex-col sm::flex-row gap-3 sm:gap-5  part1">
            <Image
              src={"/images/shop1.svg"}
              alt="Product 1"
              width={93}
              height={97}
            />
            <div className=" flex flex-col gap-3">
              <span className=" text-[#333333] text-sm sm:text-base font-bold">
                Burger
              </span>
              <Image
                src={"/images/star.svg"}
                alt="Rating"
                width={116}
                height={20}
              />
            </div>
          </div>

          <div className=" text-[#333333] text-sm sm:text-base flex p-3 justify-center items-center  part2">
            $35.00
          </div>
          <div className=" flex justify-center items-center part4 ">
            <Image
              src={"/images/counter.svg"}
              alt="Counter"
              width={110}
              height={41}
            />
          </div>
          <div className="font-inter font-bold text-sm sm:text-base text-[#333333]">
            $221.00
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={"/icons/cross.svg"}
              alt="Counter"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className=" item1 p-4 flex flex-wrap gap-5 sm:gap-10 items-center justify-between sm:justify-evenly">
          <div className=" flex flex-col sm::flex-row gap-3 sm:gap-5  part1">
            <Image
              src={"/images/shop1.svg"}
              alt="Product 1"
              width={93}
              height={97}
            />
            <div className=" flex flex-col gap-3">
              <span className=" text-[#333333] text-sm sm:text-base font-bold">
                Burger
              </span>
              <Image
                src={"/images/star.svg"}
                alt="Rating"
                width={116}
                height={20}
              />
            </div>
          </div>

          <div className=" text-[#333333] text-sm sm:text-base flex p-3 justify-center items-center  part2">
            $35.00
          </div>
          <div className=" flex justify-center items-center part4 ">
            <Image
              src={"/images/counter.svg"}
              alt="Counter"
              width={110}
              height={41}
            />
          </div>
          <div className="font-inter font-bold text-sm sm:text-base text-[#333333]">
            $221.00
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={"/icons/cross.svg"}
              alt="Counter"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className=" item1 p-4 flex flex-wrap gap-5 sm:gap-10 items-center justify-between sm:justify-evenly">
          <div className=" flex flex-col sm::flex-row gap-3 sm:gap-5  part1">
            <Image
              src={"/images/shop1.svg"}
              alt="Product 1"
              width={93}
              height={97}
            />
            <div className=" flex flex-col gap-3">
              <span className=" text-[#333333] text-sm sm:text-base font-bold">
                Burger
              </span>
              <Image
                src={"/images/star.svg"}
                alt="Rating"
                width={116}
                height={20}
              />
            </div>
          </div>

          <div className=" text-[#333333] text-sm sm:text-base flex p-3 justify-center items-center  part2">
            $35.00
          </div>
          <div className=" flex justify-center items-center part4 ">
            <Image
              src={"/images/counter.svg"}
              alt="Counter"
              width={110}
              height={41}
            />
          </div>
          <div className="font-inter font-bold text-sm sm:text-base text-[#333333]">
            $221.00
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={"/icons/cross.svg"}
              alt="Counter"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className=" item1 p-4 flex flex-wrap gap-5 sm:gap-10 items-center justify-between sm:justify-evenly">
          <div className=" flex flex-col sm::flex-row gap-3 sm:gap-5  part1">
            <Image
              src={"/images/shop1.svg"}
              alt="Product 1"
              width={93}
              height={97}
            />
            <div className=" flex flex-col gap-3">
              <span className=" text-[#333333] text-sm sm:text-base font-bold">
                Burger
              </span>
              <Image
                src={"/images/star.svg"}
                alt="Rating"
                width={116}
                height={20}
              />
            </div>
          </div>

          <div className=" text-[#333333] text-sm sm:text-base flex p-3 justify-center items-center  part2">
            $35.00
          </div>
          <div className=" flex justify-center items-center part4 ">
            <Image
              src={"/images/counter.svg"}
              alt="Counter"
              width={110}
              height={41}
            />
          </div>
          <div className="font-inter font-bold text-sm sm:text-base text-[#333333]">
            $221.00
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={"/icons/cross.svg"}
              alt="Counter"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className=" item1 p-4 flex flex-wrap gap-5 sm:gap-10 items-center justify-between sm:justify-evenly">
          <div className=" flex flex-col sm::flex-row gap-3 sm:gap-5  part1">
            <Image
              src={"/images/shop1.svg"}
              alt="Product 1"
              width={93}
              height={97}
            />
            <div className=" flex flex-col gap-3">
              <span className=" text-[#333333] text-sm sm:text-base font-bold">
                Burger
              </span>
              <Image
                src={"/images/star.svg"}
                alt="Rating"
                width={116}
                height={20}
              />
            </div>
          </div>

          <div className=" text-[#333333] text-sm sm:text-base flex p-3 justify-center items-center  part2">
            $35.00
          </div>
          <div className=" flex justify-center items-center part4 ">
            <Image
              src={"/images/counter.svg"}
              alt="Counter"
              width={110}
              height={41}
            />
          </div>
          <div className="font-inter font-bold text-sm sm:text-base text-[#333333]">
            $221.00
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={"/icons/cross.svg"}
              alt="Counter"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className=" w-[70%] flex justify-center items-center md:items-start flex-col md:flex-row gap-3 py-16">
   <div className="coupin flex gap-3 flex-col md:w-1/2">
      <h4 className=" text-3xl text-[#333333]">Coupon Code</h4>
      <div className=" flex flex-col p-3 border rounded-lg border-zinc-400 gap-5">
            <p className="  font-inter text-zinc-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
           <Input type="email" placeholder="Enter here code" />
           <Button type="submit" 
           className=" bg-primary1 text-text"
           >Apply</Button>
             </div>
      </div>
   </div>
   <div className="Total bill flex flex-col gap-3 w-[100%] md:w-1/2">
    <h4 className=" text-3xl text-[#333333]">Total Bill</h4>
    <div className=" flex-col border rounded-lg border-zinc-400 " >
      <div className=" Cart subtotal flex flex-col gap-3 p-3">
         <div className=" flex justify-between">
            <h6 className=" text-[#333333] text-base font-bold"> Cart Subtotal</h6>
            <p>$221.00</p>
         </div>
         <div className=" flex justify-between">
            <h6 className=" text-[#333333] text-sm ">Shopping Change</h6>
            <p>$00.00</p>
         </div>
      </div>
      <div className=" flex justify-between p-3 border-t border-zinc-400 ">
      <h6 className=" text-[#333333] text-base font-inter font-bold">Total</h6>
      <p>$221.00</p>
      </div>
    </div>
    <Button type="submit" 
    className=" bg-primary1 text-text font- inter rounded-none" 
    >Proceed to Checkout</Button>
   </div>
      </div>
    </main>
  );
}

export default CartPage;
