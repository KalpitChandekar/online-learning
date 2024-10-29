import About from "@/Components/About";
import Companies from "@/Components/Companies";
import Hero from "@/Components/Hero";
import Integration from "@/Components/Intergration";
import Navbar from "@/Components/Navbar";
import OurFeatures from "@/Components/OurFeatures/page";
import Specification from "@/Components/Specification";
import Testimonial from "@/Components/Testimonial";

const page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-[#FFF2E1] clip-path-custom-curve">
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <Specification />
      <About />
      <OurFeatures />
      <Integration />
      <Testimonial />
    </div>
  );
};
export default page;
