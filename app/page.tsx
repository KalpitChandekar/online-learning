import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-[#FFF2E1] clip-path-custom-curve">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};
export default page;
