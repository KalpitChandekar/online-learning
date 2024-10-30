import About from "@/Components/About";
import Companies from "@/Components/Companies";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Integration from "@/Components/Intergration";
import Navbar from "@/Components/Navbar";
import NewsResources from "@/Components/NewsResources";
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
      <NewsResources />
      <Footer />
    </div>
  );
};
export default page;
