import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import FoodCatagories from "@/components/ui/foodcatagories";
import Client from "@/components/ui/client";
import Menu from "@/components/ui/menu";
import Chef from "@/components/ui/chef";
import Testimonial from "@/components/ui/testimonial";
import Banner from "@/components/ui/banner";
import Blog from "@/components/ui/blog";

function Homepage() {
  return (
    <main className=" w-full">
        <Hero />
        <About />
        <FoodCatagories />
        <Client />
        <Menu />
        <Chef />
        <Testimonial />
        <Banner />
        <Blog />
    
    </main>
  );
}

export default Homepage;
