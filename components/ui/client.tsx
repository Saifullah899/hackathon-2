import React from 'react'
import Image from 'next/image';
function Client() {
  return (
    <div className=" w-full h-[469px] flex justify-center items-center  bg-[url('/images/Clients.svg')] bg- bg-center">
       <div className=' w-[90%] flex justify-center items-center'>
        <div className=' flex  flex-col md:flex-row justify-around items-center gap-4  w-1/2'>
        <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client1.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-text text-xs md:text-lg'>Professional Chefs</h5>
          <h3 className=' font-bold text-2xl text-text'>420</h3>
          </div>
          <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client2.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-text text-xs md:text-lg'>Items of Food</h5>
          <h3 className=' font-bold text-2xl text-text'>320</h3>
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
          <h5 className='font-bold text-text text-xs md:text-lg'>Years Of Experienced</h5>
          <h3 className=' font-bold text-2xl text-text'>30+</h3>
          </div>
          <div className=' flex justify-center items-center flex-col gap-3'>
          <Image
          src={'/icons/client4.svg'}
          alt="Client 1"
          width={70}
          height={70}
          />
          <h5 className='font-bold text-text text-xs md:text-lg'>Happy Customer</h5>
          <h3 className=' font-bold text-2xl text-text'>220</h3>
          </div>
        </div>
        </div>    
    </div>
  )
}

export default Client;