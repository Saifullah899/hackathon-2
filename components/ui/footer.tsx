// Footer.js  
import Image from 'next/image';  

const Footer = () => {  
  return (  
    <footer className="bg-black gap-16 flex flex-col justify-center items-center text-center lg:text-start text-text py-8 px-4">  


<div className=" flex lg:flex-row flex-col justify-center items-center  gap-2 lg:justify-between w-[75%]">
<div className=' flex gap-2  flex-col'>  
                    <h2 className="text-xl font-bold"><span className='text-primary1'>St</span>ill You Need Our Support?</h2>  
                    <p className="mt-2">Don’t wait make a smart & logical quote here. It’s pretty easy.</p>  
                    </div>
                    <div className="flex mt-2 ">  
                        <input   
                            type="email"   
                            placeholder="Enter Your Email"   
                            className="p-2 rounded-l-md focus:outline-none bg-primary1 text-text"

                        />  
                        <button className="bg-text text-primary1 p-2 rounded-r-md">Subscribe Now</button>  
                    </div>  
                
</div>
 <div className=' h-[1px] bg-primary1 w-[90%]'></div>
      <div className=" w-[80%] gap-5 flex flex-col md:flex-row justify-center items-center md:items-start">  
    
        <div className="flex items-center justify-center md:items-start md:w-[30%] gap-3 flex-col">  
          <h3 className="text-lg font-bold">About Us.</h3>  
          <p className="text-gray-400 mb-4 text-sm lg:base ">  
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the World.  
          </p> 
          <div className='flex gap-3 '>
            <Image
            src={'/icons/Watch.svg'}
            alt="Watch Icon"
            width={50}
            height={48}
            />
            <div className=' flex flex-col text-sm lg:base '>
          <h4 className="font-semibold">Opening Hours</h4>  
          <p className="text-gray-400">Mon - Sat (8:00 - 6:00)</p>  
          <p className="text-gray-400">Sunday - Closed</p> 
          </div>
          </div>  
        </div>  

        {/* Right Section */}  
        <div className="flex items-center md:items-start  md:w-[15%] gap-2 flex-col">  
          <h3 className="text-lg font-bold">Useful Links</h3>  
          <ul className=" flex items-center md:items-start flex-col text-sm lg:base gap-4 text-gray-400">  
            <li><a href="#" className="hover:text-primary1">About</a></li>  
            <li><a href="#" className="hover:text-primary1">News</a></li>  
            <li><a href="#" className="hover:text-primary1">Partners</a></li>  
            <li><a href="#" className="hover:text-primary1">Team</a></li>  
            <li><a href="#" className="hover:text-primary1">Menu</a></li>  
            <li><a href="#" className="hover:text-primary1">Contacts</a></li>  
          </ul>  
        </div>  

        {/* Help Section */}  
        <div className="flex items-center md:items-start justify-center md:w-[20%] gap-2 flex-col ">  
          <h3 className="text-lg font-bold">Help?</h3>  
          <ul className="flex flex-col items-center md:items-start text-sm lg:base  gap-4 text-gray-400">  
            <li><a href="#" className="hover:text-primary1">FAQ</a></li>  
            <li><a href="#" className="hover:text-primary1">Terms & Conditions</a></li>  
            <li><a href="#" className="hover:text-primary1">Reporting</a></li>  
            <li><a href="#" className="hover:text-primary1">Documentation</a></li>  
            <li><a href="#" className="hover:text-primary1">Support Policy</a></li>  
            <li><a href="#" className="hover:text-primary1">Privacy</a></li>  
          </ul>  
        </div>  
        
        {/* Recent Posts */}  
        <div className="flex items-center md:items-start md:w-[25%] gap-2 flex-col">  
          <h3 className="text-lg font-bold">Recent Posts</h3>  
          <ul className="flex items-center md:items-start flex-col text-sm lg:base  gap-4 text-gray-400">  
            <li>20 Feb 2022 - <a href="#" className="hover:text-primary1">Keep Your Business</a></li>  
            <li>20 Feb 2022 - <a href="#" className="hover:text-primay1">Keep Your Business</a></li>  
            <li>20 Feb 2022 - <a href="#" className="hover:text-primary1">Keep Your Business</a></li>  
          </ul>  
        </div>  
      </div>  
    </footer>  
  );  
}  

export default Footer;