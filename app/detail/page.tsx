import Image from "next/image";
import { Button } from "@/components/ui/button";
function DetailPage() {
  return (
    <main className=" h-full flex flex-col justify-center items-center">
      <div className="w-screen flex flex-col gap-5 justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Shop Details</h2>
        <div className=" flex gap-2 font-lg ">
          <span className=" text-text">Home</span>
          <Image
            src={"/icons/carerighlt.svg"}
            alt="Careright Arrow"
            width={12}
            height={12}
          />
          <span className="text-primary1">Shop details</span>
        </div>
      </div>
      
    <div className="w-[90%] py-12 flex flex-col">
        <div className=" flex gap-10 flex-col lg:flex-row  items-center justify-center w-[100%]">
          <div className="flex justify-center items-center gap-2 w-[90%] lg:w-[40%]">
            <div className=" 4images flex flex-col gap-4 xl:gap-6 justify-end ">
              <Image
                src={"/images/detail1.svg"}
                alt="Detail 1"
                width={132}
                height={129}
              />
              <Image
                src={"/images/detail2.svg"}
                alt="Detail 1"
                width={132}
                height={129}
              />
              <Image
                src={"/images/detail3.svg"}
                alt="Detail 1"
                width={132}
                height={129}
              />
              <Image
                src={"/images/detail4.svg"}
                alt="Detail 1"
                width={132}
                height={129}
              />
            </div>
            <div className="1image">
              <Image
                src={"/images/finaldetail.svg"}
                alt="Detailpic"
                width={491}
                height={596}
              />
            </div>
          </div>
          <div className="flex  gap-3 flex-col w-[90%] lg:w-1/2">
            <div className="button flex justify-between arow">
              <Button
                className=" bg-primary1 rounded-md text-text font-xs font-light"
                variant="outline"
              >
                In stock
              </Button>
              <Image
                src={"/images/nextarrow.svg"}
                alt="Next Arrow"
                width={152}
                height={26}
              />
            </div>
            <div className=" flex flex-col gap-4">
              <h2 className=" text-[#333333] text-4xl md:text-5xl font-bold">
                Yummy Chicken Chup
              </h2>
              <p className=" font-inter text-base md:text-lg text-[#333333]  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. bendum
                non dui volutpat fringugiat pretium donec id elementum. Ultrices
                mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu
                velit in consequat.
              </p>
            </div>
            <div className=" h-[1] bg-[#333333] "></div>

            <h4 className=" font-bold text-[#333333] text-2xl">54.00$ </h4>
            <Image
              src={"/images/Rating.svg"}
              alt="rating"
              width={333}
              height={24}
            />
            <span className=" font-inter text-lg text-[#333333]">
              Dictum/cursus/Risus
            </span>
            <div className=" h-[1] bg-[#333333] "></div>
            <div className=" flex  gap-2">
              <Image
                src={"/images/count.svg"}
                alt="count"
                width={181}
                height={50}
              />
              <Button
                className=" bg-primary1 py-6 px-7 text-text font-xs font-light"
                variant="outline"
              >
                Add to cart
              </Button>
            </div>
            <div className=" h-[1] bg-[#333333] "></div>
            <Image
              src={"/images/details.svg"}
              width={278}
              height={144}
              alt="details"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 w-[90%] py-12">
        <div className=" flex items-center gap-5">
      <Button
                className=" bg-primary1 py-6 px-7 text-text font-xs font-light"
                variant="outline"
              >
                Description
              </Button>
              <span className=" text-black text-base font-thin">Reviews 24</span>
     </div>
     <p className=" text-[#333333] font-inter">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
     <p className=" text-[#333333] font-inter">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
     <div className=" flex flex-col gap-3">
        <label className=" text-[#333333] text-lg" > Key Benefits</label>
        <ul className=" flex flex-col gap-2 pl-5"> 
            <li className=" list-disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className=" list-disc">Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li className=" list-disc">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li className=" list-disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className=" list-disc">Maecenas ullamcorper est et massa mattis condimentum.</li>

        </ul>
     </div>

      </div>
      <div className=" w-[90%] flex ">
        <h4 className=" text-3xl font-bold">Similar Product</h4>
      </div>
      <div className=" w-[90%] flex flex-col md:flex-row justify-center items-center py-12">
      <div className=" flex flex-col md:flex-row gap-4 row1">
                   <div className=" flex flex-col gap-1 bg-text">
                     <Image
                     src={'/images/shop1.svg'}
                     alt="Product"
                     width={312}
                     height={265}
                      />
                      <span className=" text-black bold text-lg">Fresh Lime</span>
                      <div className=" flex gap-2">
                        <span className=" text-primary1 text-sm">$38.00</span>
                        <span className=" text-slate-800 line-through text-sm">$45.00</span>
                      </div>
                      </div>
                      <div className=" flex flex-col gap-1 bg-text">
                     <Image
                     src={'/images/shop2.svg'}
                     alt="Product"
                     width={312}
                     height={265}
                      />
                      <span className=" text-black bold text-lg">Fresh Lime</span>
                      <div className=" flex gap-2">
                        <span className=" text-primary1 text-sm">$38.00</span>
                        <span className=" text-slate-800 line-through text-sm">$45.00</span>
                      </div>
                      </div>
                      <div className=" flex flex-col gap-1 bg-text">
                     <Image
                     src={'/images/shop3.svg'}
                     alt="Product"
                     width={312}
                     height={265}
                      />
                      <span className=" text-black bold text-lg">Fresh Lime</span>
                      <div className=" flex gap-2">
                        <span className=" text-primary1 text-sm">$38.00</span>
                        <span className=" text-slate-800 line-through text-sm">$45.00</span>
                      </div>
                      </div>
                      <div className=" flex flex-col gap-1 bg-text">
                     <Image
                     src={'/images/shop1.svg'}
                     alt="Product"
                     width={312}
                     height={265}
                      />
                      <span className=" text-black bold text-lg">Fresh Lime</span>
                      <div className=" flex gap-2">
                        <span className=" text-primary1 text-sm">$38.00</span>
                        <span className=" text-slate-800 line-through text-sm">$45.00</span>
                      </div>
                      </div>
                      <div className=" flex flex-col gap-1 bg-text">
                     <Image
                     src={'/images/shop2.svg'}
                     alt="Product"
                     width={312}
                     height={265}
                      />
                      <span className=" text-black bold text-lg">Fresh Lime</span>
                      <div className=" flex gap-2">
                        <span className=" text-primary1 text-sm">$38.00</span>
                        <span className=" text-slate-800 line-through text-sm">$45.00</span>
                      </div>
                      </div>

                </div>
      </div>
    </main>
  );
}

export default DetailPage;
