import About from "@/Components/About";
import Companies from "@/Components/Companies";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Specification from "@/Components/Specification";

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
    </div>
  );
};
export default page;
