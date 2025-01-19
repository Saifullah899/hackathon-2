import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function AboutPage() {
  return (
    <main className="className='h-full flex flex-col justify-center items-center">
      <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">About Us</h2>
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
            <Link href={"/blog"}>About Us</Link>
          </span>
        </div>
      </div>
      <div className=" w-[90%] py-16 flex flex-col lg:flex-row justify-center items-center">
        <div className=" flex items-center justify-center w-[80%] ">
          <div className="  md:w-[90%] ">
            <div className=" flex gap-4">
              <Image
                src={"/images/abou.svg"}
                alt="Careright Arrow"
                width={669}
                height={734}
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center ">
          <div className=" flex w-[80%]  lg:justify-end">
            <div className=" flex flex-col gap-4 justify-end items-center w-[80%]">
              <div className="flex flex-col gap-5">
                <Image
                  src={"/images/text2.svg"}
                  alt="font"
                  height={40}
                  width={88}
                />
                <h2 className=" text-[#333333]  font-bold text-3xl lg:text-4xl xl:text-5xl">
                  Food is an important part Of a balanced Diet
                </h2>
                <p className=" text-[#333333]  font-inter font-extralight text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                  bibendum. Urna, elit augue urna, vitae feugiat pretium donec
                  id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi,
                  et ac dapibus sit eu velit in consequat.
                </p>

                <Button
                  variant="outline"
                  className=" bg-primary1 text-text w-36 border-none rounded-full"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-7 justify-center items-center flex-col">
      <div className=" w-[90%] flex flex-col text-center gap-3 justify-center items-center">
          <h2 className=" text-4xl text-[#333333] font-bold ">
          Why Choose us
          </h2>
          <p className=" text-base text-[#333333] font-inter font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
      </div>
      <Image
                  src={"/images/banner2.svg"}
                  alt="font"
                  height={386}
                  width={2000}
                />

<div className=' w-[90%] flex py-10 justify-center items-center'>
        <div className=' flex  flex-col md:flex-row justify-around items-center gap-4  w-1/2'>
        <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client1.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-[#333333] text-xs md:text-lg'>Professional Chefs</h5>
          <h3 className=' font-bold text-2xl text-[#333333]'>420</h3>
          </div>
          <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client2.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-[#333333] text-xs md:text-lg'>Items of Food</h5>
          <h3 className=' font-bold text-2xl text-[#333333]'>320</h3>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row justify-around items-center gap-4  w-1/2'>
        <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client3.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-[#333333] text-xs md:text-lg'>Years Of Experienced</h5>
          <h3 className=' font-bold text-2xl text-[#333333]'>30+</h3>
          </div>
          <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client4.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-[#333333] text-xs md:text-lg'>Happy Customer</h5>
          <h3 className=' font-bold text-2xl text-[#333333]'>220</h3>
          </div>
        </div>
        </div>  
    </div>
    <div className=" flex py-10 flex-col justify-center gap-10 items-center w-[90%]">
        <div className=" flex w-[100%] gap-2 justify-center flex-col items-center">
          <Image src={"/images/text2.svg"} alt="font" height={40} width={169} />
          <h2 className="  text-[#333333] font-bold text-3xl lg:text-4xl xl:text-5xl">
            Team Member
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
        </div>
        <div className=" flex w-[90%] py-10 justify-center flex-col items-center  ">
        <div className=" flex w-[100%] flex-col gap-3  justify-center sm:justify-start items-center md:items-start">
          <Image src={"/images/text2.svg"} alt="font" height={40} width={88} />
          <h2 className=" text-[#333333] font-bold text-2xl lg:text-4xl xl:text-5xl">
            What our clientare saying
          </h2>
        </div>
        <div className="flex justify-center items-center">
            <Image
            src={'/images/Testimonials.svg'}
            alt="testomonial"
            height={351}
            width={768}
            />
        </div>
      </div>
 <div className=" w-[90%] flex-col text-center flex justify-center items-center ">
 <h2 className=" text-4xl text-[#333333] font-bold ">
            Our Food Menu
          </h2>
          <p className=" text-base text-[#333333] font-inter font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>  


 </div>
<div className="flex w-[90%] py-10 justify-center gap-10 items-center ">
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
                <div className=" details  gap-4 hidden md:flex flex-col">
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
    </main>
  );
}

export default AboutPage;
