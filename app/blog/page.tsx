
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
function BlogPage() {
  return (
   <main className="className='h-full flex flex-col justify-center items-center">
    <div className="w-screen flex flex-col gap-5 overflow-x-hidden justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Blog</h2>
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
            <Link href={"/blog"}>blog</Link>
          </span>
        </div>
      </div>
    <div className=" w-[90%] py-16 flex gap-10 justify-center ">
          <div className=" flex flex-col gap-10  ">
            <div className=" flex flex-col gap-3">
               <Image
               src={'/images/blog1.svg'}
                alt="Blog 1"
                width={871}
                height={520}
                />
                <Image
                className=" p-2"
               src={'/images/calender.svg'}
                alt="calender"
                width={280}
                height={24}
                />
              <h5 className=" xl:w-[60%]  px-2 font-semibold text-[#333333] text-2xl">10 Reasons To Do A Digital Detox Challenge</h5>
              <div className=" xl:w-[60%]  h-[1px] bg-[#dfdcdc] w-[95%]"></div>
              <p className=" xl:w-[60%]  px-2 w- font-inter  text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
              <Button variant='outline' className=" text-primary1 mx-2 border py-5 px-7 w-60 border-primary1"> Read More</Button>
            </div>
            <div className=" flex flex-col gap-3">
               <Image
               src={'/images/blog2.svg'}
                alt="Blog 1"
                width={871}
                height={520}
                />
                <Image
                className=" p-2"
               src={'/images/calender.svg'}
                alt="calender"
                width={280}
                height={24}
                />
              <h5 className="xl:w-[60%]  px-2 font-semibold text-[#333333] text-2xl">10 Reasons To Do A Digital Detox Challenge</h5>
              <div className=" xl:w-[60%]  h-[1px] bg-[#dfdcdc] w-[95%]"></div>
              <p className=" xl:w-[60%] px-2 font-inter  text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
              <Button variant='outline' className=" text-primary1 mx-2 border py-5 px-7 w-60 border-primary1"> Read More</Button>
            </div>
            <div className=" flex flex-col gap-3">
               <Image
               src={'/images/blog3.svg'}
                alt="Blog 1"
                width={871}
                height={520}
                />
                <Image
                className=" p-2"
               src={'/images/calender.svg'}
                alt="calender"
                width={280}
                height={24}
                />
              <h5 className=" xl:w-[60%]  px-2 font-semibold text-[#333333] text-2xl">10 Reasons To Do A Digital Detox Challenge</h5>
              <div className=" xl:w-[60%]  h-[1px] bg-[#dfdcdc] w-[95%]"></div>
              <p className=" xl:w-[60%] px-2 font-inter  text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
              <Button variant='outline' className=" text-primary1 mx-2 border py-5 px-7 w-60 border-primary1"> Read More</Button>
            </div>
            <div className=" flex flex-col gap-3">
               <Image
               src={'/images/blog4.svg'}
                alt="Blog 1"
                width={871}
                height={520}
                />
                <Image
                className=" p-2"
               src={'/images/calender.svg'}
                alt="calender"
                width={280}
                height={24}
                />
              <h5 className=" xl:w-[60%]  px-2 font-semibold text-[#333333] text-2xl">10 Reasons To Do A Digital Detox Challenge</h5>
              <div className=" xl:w-[60%]  h-[1px] bg-[#dfdcdc] w-[95%]"></div>
              <p className="xl:w-[60%]  px-2 font-inter  text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
              <Button variant='outline' className=" text-primary1 mx-2 border py-5 px-7 w-60 border-primary1"> Read More</Button>
            </div>
            </div> 
            
           <div className=" hidden  gap-5 sm:flex flex-col ">
             <Image
             src={'/images/searchbar.svg'}
              alt="Search Bar"
              width={421}
              height={70}
              />
               <Image
             src={'/images/comment.svg'}
              alt="comment"
              width={424}
              height={423}
              />
              <h6 className=" text-base font-semibold text-[#333333]">
              Pecent Post
            </h6>
            <div className=" flex  gap-1">
              <Image
                src={"/images/shop2.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-start items-start flex-col ">
              <span className=" text-sm text-gray-400">june 22 2020</span>
                <span className=" text-sm text-[#333333]">Lorem ipsum dolor sit cing
                elit, sed do.</span>
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
              <span className=" text-sm text-gray-400">june 22 2020</span>
                <span className=" text-sm text-[#333333]">Lorem ipsum dolor sit cing
                elit, sed do.</span>
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
               
                <span className=" text-sm text-gray-400">june 22 2020</span>
                <span className=" text-sm text-[#333333]">Lorem ipsum dolor sit cing
                elit, sed do.</span>
              </span>
            </div>
            <h6 className=" text-base font-semibold text-[#333333]">
              Filter By Menu
            </h6>
            <div className=" flex flex-col gap-3">
            <div className=" flex gap-2">
              <Image
                src={"/images/shop4.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-between gap-10 items-center ">
               
                <span className=" text-sm text-[#333333]">Chicken fry</span>
                <span className=" text-sm text-[#333333]"> 26</span>
              </span>
            </div>
            <div className=" flex gap-2">
              <Image
                src={"/images/shop4.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-between gap-10 items-center ">
               
                <span className=" text-sm text-[#333333]">Chicken fry</span>
                <span className=" text-sm text-[#333333]"> 26</span>
              </span>
            </div>
            <div className=" flex gap-2">
              <Image
                src={"/images/shop4.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-between gap-10 items-center ">
               
                <span className=" text-sm text-[#333333]">Chicken fry</span>
                <span className=" text-sm text-[#333333]"> 26</span>
              </span>
            </div>
            <div className=" flex gap-2">
              <Image
                src={"/images/shop4.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-between gap-10 items-center ">
               
                <span className=" text-sm text-[#333333]">Chicken fry</span>
                <span className=" text-sm text-[#333333]"> 26</span>
              </span>
            </div>
            <div className=" flex gap-2">
              <Image
                src={"/images/shop4.svg"}
                alt="Product"
                width={60}
                height={55}
              />
              <span className=" flex justify-between gap-10 items-center ">
               
                <span className=" text-sm text-[#333333]">Chicken fry</span>
                <span className=" text-sm text-[#333333]"> 26</span>
              </span>
            </div>
            </div>
            <h6 className=" text-base font-semibold text-[#333333]">
              popular Tags
            </h6> 
            <div className=" flex flex-wrap gap-2 justify-center w-[90%]">
                <span className="p-2 border tex-text-gray-400">sandwish</span>
                <span className="p-2 border tex-text-gray-400">burger</span>
                <span className="p-2 border tex-text-gray-400">Health</span>
                <span className="p-2 border tex-text-gray-400">Restaurant</span>
                <span className="p-2 border tex-text-gray-400">Fast food</span>
                <span className="p-2 border tex-text-gray-400">Breakfast</span>
                <span className="p-2 border tex-text-gray-400">Chicken Shaurma</span>
                <span className="p-2 border tex-text-gray-400">Dinner it</span>
                <span className="p-2 border tex-text-gray-400">Lunch</span>
                <span className="p-2 border tex-text-gray-400">Chicken Shaurma</span>

                </div> 
                <h6 className=" text-base font-semibold text-[#333333]">
              Photo Gallary
            </h6> 
            <div className=" flex justify-center items-center">
            <Image
            src={'/images/Photo.svg'}
             alt="Photo Gallary"
             width={362}
             height={200}
             />  
             </div>
             <h6 className=" text-base font-semibold text-[#333333]">
              Follow Us
            </h6>
            <div className=" flex justify-center items-center">
            <Image
            src={'/images/icin.svg'}
             alt="Photo Gallary"
             width={308}
             height={47}
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
  )
}

export default BlogPage