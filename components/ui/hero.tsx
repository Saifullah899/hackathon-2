import React from 'react'
import Image from 'next/image';
import { Button } from './button';
function Hero() {
  return (
    <main className=" h-full py-20 w-screen flex flex-col md:flex-row items-center bg-[url('/images/hero1.svg')] bg-cover bg-center">
<div className=' flex w-[80%] md:w-1/2 justify-center md:justify-end'>
<div className=' flex gap-4 justify-end items-center w-[85%]'>
    <div>
        <Image
        src={'/images/listicon.svg'}
        alt='list'
        height={592}
        width={25}
         />
    </div>
    <div className='flex flex-col gap-2'>
 <Image
 src={'/images/text.svg'}
 alt='font'
 height={40}
 width={240}
 />
 <h1 className=' text-text font-bold text-4xl lg:text-5xl xl:text-6xl'>
    <span className='text-primary1'>Th</span>e Art of speed food Quality
 </h1>
 <p className=' text-text font-inter font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Varius sed pharetra dictum neque massa congue</p>
 <Button variant="outline"
 className=' bg-primary1 text-text w-36 border-none rounded-full'
 >Button</Button>
 </div>
</div>
</div>
<div className=' flex justify-center w-[90%] md:w-1/2'>
<div className=' w-[85%] sm:w-[90%] '>
    <Image
    className='p-3'
    src={'/images/hero2.svg'}
    alt='hero2'
    height={670}
    width={877}
    />
</div>
</div>
    </main>
  )
}

export default Hero;