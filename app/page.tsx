import Companies from "@/Components/Companies";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-[#FFF2E1] clip-path-custom-curve">
        <Navbar />
        <Hero />
      </div>
      <Companies />
    </div>
  );
};
export default page;
