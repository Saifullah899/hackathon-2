import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CheckoutPage() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
        <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Sign Up</h2>
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
            <Link href={"/signup"}>Sign Up</Link>
          </span>
        </div>
      </div>
      <div className=" w-[90%] flex justify-center items-center py-16">
        <div className=" w-[70%] flex flex-col gap-10 justify-center items-center">
        <div className=" text-xl text-[#333333] font-bold">
            Sign Up
          </div>
        <form className=" flex flex-col gap-5  lg:w-[40%]" >
        <Input type="name" id="email" placeholder="Name" />
        <Input type="email" id="email" placeholder="Email" />
        <Input type="password" id="password" placeholder="Password" />
        <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Remember me?</Label>
            </div>
            <Button variant='default'
               className="bg-primary1"> 

               Sign Up</Button>
        </form >
            <Image
            src={'/images/or.svg'}
            alt="Or"
            width={360}
            height={22}
             />
             <div className=" flex flex-col gap-3">
             <Button variant='outline'
               className="flex px-12 py-6 "
               >
                <Image 
                src={'/images/Google.svg'}
                alt="apple"
                width={20}
                height={20}
                />
                Sign Up with Google</Button>
                <Button variant='outline'
               className="flex items-center justify-center px-12 py-6 "
               >
                <Image 
                src={'/images/Vector.svg'}
                alt="Google"
                width={20}
                height={20}
                />
                Sign Up with Apple</Button>
                </div>
        </div>

      </div>
    </main>
  )
}

export default CheckoutPage