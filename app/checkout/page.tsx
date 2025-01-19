import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function CheckoutPage() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Checkout</h2>
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
            <Link href={"/checkout"}>CheckOut</Link>
          </span>
        </div>
      </div>

      <div className="w-[90%] flex justify-center items-center md:gap-10 py-16">
        <div className=" flex gap-5 flex-col ">
          <div className=" text-xl text-[#333333] font-bold">
            Shipping Address
          </div>
          <div className=" inputpart1 flex-col sm:flex-row flex gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Full Name</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Last Name</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
          </div>
          <div className=" inputpart1 flex-col sm:flex-row flex gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Phone Number</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
          </div>
          <div className=" inputpart1 flex-col sm:flex-row flex gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Company</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Country</Label>
              <Select>
                <SelectTrigger className=" sm:w-[220px]">
                  <SelectValue placeholder="Choose Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="Saudia Arabia">Saudia Arabia</SelectItem>
                    <SelectItem value="South Korea">South Korea</SelectItem>
                    <SelectItem value="Turkey">Turkey</SelectItem>
                    <SelectItem value="United Arab Emirates">
                      United Arab Emirates
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" inputpart1 flex-col sm:flex-row flex gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">City</Label>
              <Select>
                <SelectTrigger className="sm:w-[220px]">
                  <SelectValue placeholder="Choose City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>City</SelectLabel>
                    <SelectItem value="Pakistan">Karachi</SelectItem>
                    <SelectItem value="Saudia Arabia">Makkah</SelectItem>
                    <SelectItem value="South Korea">Seoul</SelectItem>
                    <SelectItem value="Turkey">Istambul</SelectItem>
                    <SelectItem value="United Arab Emirates">
                      Abu Dhabi
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Zip Code</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
          </div>
          <div className=" inputpart1 flex-col sm:flex-row flex gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Address 1</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Address 2</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" text-xl text-[#333333] font-bold">
              Billing Address
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
          <div className=" flex gap-2 ">
            <Button variant="outline" className=" px-12 sm:px-16 py-6">
              Back to Cart
            </Button>
            <Button variant="default" className=" px-12 sm:px-16 py-6 bg-primary1 ">
              proceed to shipping
            </Button>
          </div>
        </div>


        <div className="sidebar hidden md:flex flex-col gap-3 w-[30%]  ">
        <h6 className=" text-base font-semibold text-[#333333]">
              Latest Products
            </h6>
            <div className=" flex  gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-start items-start flex-col ">
                <span className=" text-xs font-semibold text-[#333333]">Chicken Tikka Kabab</span>
                <span className=" text-sm text-gray-400">150 gm net</span>
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>
            <div className=" flex gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex flex-col justify-start items-start ">
                <span className=" text-xs font-semibold text-[#333333]">Chicken Tikka Kabab</span>
                <span className=" text-sm text-gray-400">150 gm net</span>
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>
            <div className=" flex gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex flex-col  justify-start items-start ">
                <span className=" text-xs font-semibold text-[#333333]">Chicken Tikka Kabab</span>
                <span className=" text-sm text-gray-400">150 gm net</span>
                <span className=" text-sm text-gray-400">$38.00</span>
              </span>
            </div>

            <div className=" flex gap-3 flex-col">
                <div className=" flex flex-col gap-2">
                    <span className=" flex justify-between">
                        <span className=" text-base text-[#333333]">Sub-total</span>
                        <span className="text-base text-[#333333]">130$</span>
                    </span>
                    <span className=" flex justify-between">
                        <span className=" text-base text-[#333333]">Shopping</span>
                        <span className="text-base text-[#333333]">free</span>
                    </span>
                    <span className=" flex justify-between">
                        <span className=" text-base text-[#333333]">Discount</span>
                        <span className="text-base text-[#333333]">25%</span>
                    </span>
                    <span className=" flex justify-between">
                        <span className=" text-base text-[#333333]">Tax</span>
                        <span className="text-base text-[#333333]">55.76$</span>
                    </span>
                </div>
                <div className=" h-[1px] bg-[#afafaf] w-[100%]"></div>
                <span className=" flex justify-between">
                    <span className=" font-semibold text-[#333333]">Total</span>
                    <span className=" font-semibold text-[#333333]">432.65$</span>
               </span>
               <Button variant='default'
               className="bg-primary1 "
               >Place to Order</Button>

            </div>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
