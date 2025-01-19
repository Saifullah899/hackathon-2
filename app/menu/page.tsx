
import Image from "next/image";
import Link from "next/link";
import Client from "@/components/ui/client";
function MenuPage() {
  return (
  <main className="h-full flex flex-col justify-center items-center">
    <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Our Menu</h2>
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
            <Link href={"/menu"}>Menu</Link>
          </span>
        </div>
      </div>
      <div className="w-[90%] flex flex-col gap-10 justify-center items-center py-16">
        <div className=" w-[90%] flex gap-10 xl:gap-20 justify-center flex-col md:flex-row items-center">
            <div className=" flex justify-center items-center">
                <Image 
                src={'/images/menu1.svg'}
                alt="menu"
                width={448}
                height={616}
                />
            </div>

            <div className=" flex w-[100%] md:w-[70%] xl:w-[50%] gap-5 flex-col ">
                <div className="flex flex-col  gap-2">
                    <Image
                    src={'/icons/coffe.svg'}
                    alt="icon"
                    height={24}
                    width={24}
                     />
                    <h2 className=" font-bold text-3xl lg:text-5xl">
                    Starter Menu
                    </h2>
                </div>

                <div className=" details  gap-4 flex flex-col">
                  <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className="text-base lg:text-xl font-semibold text-[#333333]">Alder Grilled Chinook Salmon</h5> 
                         <h5 className=" text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                     </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-primary1">Berries and creme tart</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">700 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Tormentoso Bush Pizza Pintoage</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">1000 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Spicy Vegan Potato Curry</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                </div>

            </div>
        </div>

        <div className=" w-[90%] flex gap-10 xl:gap-20 justify-center flex-col md:flex-row items-center">
           
            <div className=" flex w-[100%] md:w-[70%] xl:w-[50%] gap-5 flex-col ">
                <div className="flex flex-col  gap-2">
                    <Image
                    src={'/icons/coffe.svg'}
                    alt="icon"
                    height={24}
                    width={24}
                     />
                    <h2 className=" font-bold text-3xl lg:text-5xl">
                    Main Course
                    </h2>
                </div>

                <div className=" details  gap-4 flex flex-col">
                  <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className="text-base lg:text-xl font-semibold text-[#333333]">Alder Grilled Chinook Salmon</h5> 
                         <h5 className=" text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                     </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-primary1">Berries and creme tart</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">700 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Tormentoso Bush Pizza Pintoage</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">1000 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Spicy Vegan Potato Curry</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                </div>

            </div>
            <div className=" flex justify-center items-center">
                <Image 
                src={'/images/menu2.svg'}
                alt="menu"
                width={448}
                height={616}
                />
            </div>
        </div>
    </div>
    <Client />
    <div className="w-[90%] flex flex-col gap-10 justify-center items-center py-16 ">  
    <div className=" w-[90%] flex gap-10 xl:gap-20 justify-center flex-col md:flex-row items-center">
            <div className=" flex justify-center items-center">
                <Image 
                src={'/images/menu4.svg'}
                alt="menu"
                width={448}
                height={616}
                />
            </div>

            <div className=" flex w-[100%] md:w-[70%] xl:w-[50%] gap-5 flex-col ">
                <div className="flex flex-col  gap-2">
                    <Image
                    src={'/icons/coffe.svg'}
                    alt="icon"
                    height={24}
                    width={24}
                     />
                    <h2 className=" font-bold text-3xl lg:text-5xl">
                    Desserts
                    </h2>
                </div>

                <div className=" details  gap-4 flex flex-col">
                  <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className="text-base lg:text-xl font-semibold text-[#333333]">Alder Grilled Chinook Salmon</h5> 
                         <h5 className=" text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                     </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-primary1">Berries and creme tart</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">700 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Tormentoso Bush Pizza Pintoage</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">1000 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                   <div className=" flex flex-col w-[100%] gap-3">
                    <div className=" flex justify-between">
                        <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Spicy Vegan Potato Curry</h5> 
                         <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <span className=" text-xs text-[#828282]">560 CAL</span>
                    </div>
                    
                   </div>
                   <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                </div>

            </div>
        </div>

        <div className=" w-[90%] flex gap-10 xl:gap-20 justify-center flex-col md:flex-row items-center">
           
           <div className=" flex w-[100%] md:w-[70%] xl:w-[50%] gap-5 flex-col ">
               <div className="flex flex-col  gap-2">
                   <Image
                   src={'/icons/coffe.svg'}
                   alt="icon"
                   height={24}
                   width={24}
                    />
                   <h2 className=" font-bold text-3xl lg:text-5xl">
                   Drinks
                   </h2>
               </div>

               <div className=" details  gap-4 flex flex-col">
                 <div className=" flex flex-col w-[100%] gap-3">
                   <div className=" flex justify-between">
                       <h5 className="text-base lg:text-xl font-semibold text-[#333333]">Alder Grilled Chinook Salmon</h5> 
                        <h5 className=" text-base lg:text-xl font-semibold text-primary1">32$</h5>
                   </div>
                   <div className=" flex flex-col gap-2">
                       <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                       <span className=" text-xs text-[#828282]">560 CAL</span>
                   </div>
                    </div>
                  <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                  
                  <div className=" flex flex-col w-[100%] gap-3">
                   <div className=" flex justify-between">
                       <h5 className=" text-base lg:text-xl font-semibold text-primary1">Berries and creme tart</h5> 
                        <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                   </div>
                   <div className=" flex flex-col gap-2">
                       <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                       <span className=" text-xs text-[#828282]">700 CAL</span>
                   </div>
                   
                  </div>
                  <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                  <div className=" flex flex-col w-[100%] gap-3">
                   <div className=" flex justify-between">
                       <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Tormentoso Bush Pizza Pintoage</h5> 
                        <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                   </div>
                   <div className=" flex flex-col gap-2">
                       <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                       <span className=" text-xs text-[#828282]">1000 CAL</span>
                   </div>
                   
                  </div>
                  <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
                  <div className=" flex flex-col w-[100%] gap-3">
                   <div className=" flex justify-between">
                       <h5 className=" text-base lg:text-xl font-semibold text-[#333333]">Spicy Vegan Potato Curry</h5> 
                        <h5 className="text-base lg:text-xl font-semibold text-primary1">32$</h5>
                   </div>
                   <div className=" flex flex-col gap-2">
                       <p className=" text-xs text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                       <span className=" text-xs text-[#828282]">560 CAL</span>
                   </div>
                   
                  </div>
                  <div className="h-[1px] bg-[#a3a2a2] w-[100%]"></div>
               </div>

           </div>
           <div className=" flex justify-center items-center">
               <Image 
               src={'/images/menu3.svg'}
               alt="menu"
               width={448}
               height={616}
               />
           </div>
       </div>
   </div>

  </main>
  )
}

export default MenuPage;