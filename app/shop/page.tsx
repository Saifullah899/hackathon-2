import React from "react";
import Image from "next/image";
function ShopPage() {
  return (
    <main className=" h-full flex flex-col justify-center items-center">
      <div className="w-screen flex flex-col gap-5 justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Our Shop</h2>
        <div className=" flex gap-2 font-lg ">
          <span className=" text-text">Home</span>
          <Image
            src={"/icons/carerighlt.svg"}
            alt="Careright Arrow"
            width={12}
            height={12}
          />
          <span className="text-primary1">Shop</span>
        </div>
      </div>

      <div className=" w-[90%] py-10 flex flex-col ">
        <div className=" flex  gap-3">
          <span className=" flex items-center gap-2">
            Sort By :
            <Image
              src={"/images/Newest.svg"}
              alt="Newest"
              width={236}
              height={46}
            />
          </span>
          <span className=" hidden md:flex items-center gap-2">
            Sort By :
            <Image
              src={"/images/Newest.svg"}
              alt="Newest"
              width={236}
              height={46}
            />
          </span>
        </div>
        <div className="w-[100%] pt-5 flex  gap-3 justify-center items-start ">
          <div className=" flex justify-center gap-3 items-center product ">
            <div className=" flex flex-col gap-4 row1">
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop1.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop3.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop1.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
            </div>
            <div className=" hidden sm:flex flex-col gap-4 row1">
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop4.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop5.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop6.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop4.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
            </div>
            <div className=" hidden lg:flex flex-col gap-4 row1">
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop1.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop6.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop4.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop5.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 bg-text">
                <Image
                  src={"/images/shop2.svg"}
                  alt="Product"
                  width={312}
                  height={265}
                />
                <span className=" text-black bold text-lg">Fresh Lime</span>
                <div className=" flex gap-2">
                  <span className=" text-primary1 text-sm">$38.00</span>
                  <span className=" text-slate-800 line-through text-sm">
                    $45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-cente gap-3 ">
            <Image
              src={"/images/searchbar.svg"}
              alt="serachbarImage"
              width={248}
              height={46}
            />
            <h6 className=" text-base font-semibold text-black">Category</h6>
            <div className=" allinput flex flex-col gap-1">
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Sandwiches</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Burgur</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Chicken</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Drink</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Pizza</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Non Veg</label>
              </div>
              <div className=" flex gap-1">
                <input type="checkbox" />
                <label className="text-sm text-gray-500">Uncategorized</label>
              </div>
            </div>
            <Image
              src={"/images/sidbar.svg"}
              alt="sidbarImage"
              width={248}
              height={286}
            />
            <h6 className=" text-base font-semibold text-black">
              Latest Products
            </h6>
            <div className=" flex gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={50}
                height={45}
              />
              <span className=" flex flex-col gap-1">
                <span className=" text-xs text-gray-500">Fresh Lime</span>
                <Image
                  src={"/images/star.svg"}
                  alt="star"
                  width={62}
                  height={9}
                />
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>
            <div className=" flex gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={50}
                height={45}
              />
              <span className=" flex flex-col gap-1">
                <span className=" text-xs text-gray-500">Fresh Lime</span>
                <Image
                  src={"/images/star.svg"}
                  alt="star"
                  width={62}
                  height={9}
                />
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>
            <div className=" flex gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={50}
                height={45}
              />
              <span className=" flex flex-col gap-1">
                <span className=" text-xs text-gray-500">Fresh Lime</span>
                <Image
                  src={"/images/star.svg"}
                  alt="star"
                  width={62}
                  height={9}
                />
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>
            <h6 className=" text-base font-semibold text-black">
              Products tag
            </h6>
            <Image
              src={"/images/tagname.svg"}
              alt="tage"
              width={223}
              height={110}
            />
          </div>
        </div>
      </div>
      <div className=" flex pb-10 justify-center items-center w-[90%]">
                <Image
                src={'/images/pagination.svg'}
                alt="pagination"
                height={51}
                width={306}
                />
              </div>
    </main>
  );
}

export default ShopPage;
