import Image from "next/image";
import Link from "next/link";

function ChefPage() {
  return (
    <main className='h-full flex flex-col justify-center items-center'>
        <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Our Chef</h2>
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
            <Link href={"/chef"}>Chef</Link>
          </span>
        </div>
      </div>
       <div className=" w-[90%] flex justify-center items-center py-16 ">
       <div className="w-[100%] pt-5 flex  gap-3 justify-center items-start ">
          <div className=" flex justify-center gap-3 items-center product ">
            <div className=" flex flex-col justify-center items-center gap-4 row1">
              <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef1.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col gap-1 justify-center items-center  bg-text">
                <Image
                  src={"/images/chef3.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800 text-sm">Chef </span>
                </div>
            </div>
            <div className=" hidden md:flex flex-col justify-center items-center gap-4 row1">
              <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef4.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef5.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col gap-1 justify-center items-center  bg-text">
                <Image
                  src={"/images/chef6.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800 text-sm">Chef </span>
                </div>
            </div>
            <div className=" hidden sm:flex flex-col justify-center items-center gap-4 row1">
              <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef7.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef8.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col gap-1 justify-center items-center  bg-text">
                <Image
                  src={"/images/chef1.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800 text-sm">Chef </span>
                </div>
            </div>
           
            
            <div className=" hidden lg:flex flex-col justify-center items-center gap-4 row1">
              <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1 bg-text">
                <Image
                  src={"/images/chef3.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800  text-sm">Chef </span>
                </div>
                <div className=" flex flex-col gap-1 justify-center items-center  bg-text">
                <Image
                  src={"/images/chef4.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Tahima Rumi</span>
                <span className=" text-slate-800 text-sm">Chef </span>
                </div>
            </div>
           
            </div>
         
          </div>
       </div>
    </main>
  )
}

export default ChefPage;