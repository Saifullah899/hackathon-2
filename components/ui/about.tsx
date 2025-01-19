import { Button } from "./button";
import Image from "next/image";
function About() {
  return (
<main className="h-full py-16 w-screen flex flex-col md:flex-row gap-5 items-center bg-[#080808]">
<div className=' flex w-[80%] md:w-1/2 justify-center items-center lg:justify-end'>
<div className=' flex flex-col gap-4 justify-end items-center w-[80%]'>
    
    <div className='flex flex-col gap-5'>
 <Image
 src={'/images/text2.svg'}
 alt='font'
 height={40}
 width={88}
 />
 <h2 className=' text-text font-bold text-3xl lg:text-4xl xl:text-5xl'>
    <span className='text-primary1'>We</span> Art of speed food Quality
 </h2>
 <p className=' text-text font-inter font-extralight text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
<div className=" flex gap-4 flex-col">
 <span className=" flex gap-4 font-light text-xs sm:text-base text-text">
    <Image
    src={'/icons/check.svg'}
    alt="icon"
    height={13}
    width={17}
    />
     Lacus nisi, et ac dapibus sit eu velit in consequat.
 </span>
 <span className=" flex gap-4 font-light text-xs sm:text-base  text-text">
    <Image
    src={'/icons/check.svg'}
    alt="icon"
    height={13}
    width={17}
    />
 Quisque diam pellentesque bibendum non dui volutpat fringilla 
 </span>
 <span className=" flex gap-4 font-light text-xs sm:text-base text-text">
    <Image
    src={'/icons/check.svg'}
    alt="icon"
    height={13}
    width={17}
    />
     Lorem ipsum dolor sit amet, consectetur adipiscing elit
 </span>
 <Button variant="outline"
 className=' bg-primary1 text-text w-36 border-none rounded-full'
 >Button</Button>
 </div>
 </div>
</div>
</div>
<div className=' flex items-center justify-center w-[80%] md:w-1/2'>
<div className=' w-[80%] md:w-[90%] '>
<div className="grid grid-cols-2  gap-4 p-4">
  <Image 
  src={'/images/about1.svg'} 
  alt="Image 1" 
  height={330}
  width={660}
  className="rounded col-span-2" />
<Image 
  src={'/images/about2.svg'} 
  alt="Image 2" 
  height={194}
  width={332}
  className="rounded row-span-1" />
  <Image 
  src={'/images/about3.svg'} 
  alt="Image 3" 
  height={194}
  width={332}
  className="rounded  row-span-1" />
  
  
</div>
</div>
</div>
</main>
  )
}

export default About;