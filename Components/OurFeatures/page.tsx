import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";

const OurFeatures = () => {
  return (
    <div className="max-w-5xl mx-auto my-40 space-y-40">
      <div className="space-y-14">
        <div className="text-center space-y-4 mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold text-blue">
            Our <span className="text-orange">Features</span>
          </h1>
          <p className="text-gray">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
      </div>
     
     <Feature1 />
     <Feature2 />
     <Feature3 />
     <Feature4 />
     <Feature5 />
        
    </div>
  );
};
export default OurFeatures;
