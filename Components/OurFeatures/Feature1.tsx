import Image from "next/image";

const Feature1 = () => {
  return (
    <div className="flex gap-20 items-center">
      <div className="relative">
        <Image src="/feature1.png" alt="feature1" width={956} height={582} />
        <div className="h-28 w-28 -z-10 rounded-full absolute bg-green -top-14 left-10"></div>
        <div className="h-5 w-5 -z-10 rounded-full absolute bg-sky_blue -top-12 left-40"></div>
        <div className="h-5 w-5 -z-10 rounded-full absolute bg-red bottom-2 right-60"></div>
        <div className="h-36 w-36 -z-10 rounded-full absolute bg-blue -bottom-4 right-20"></div>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-blue">
          A <span className="text-orange">user interface</span> designed for the
          classroom
        </h1>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full shadow-lg">
              <Image src="/interface1.png" alt="check" width={27} height={26} />
            </div>
            <p className="text-gray">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full shadow-lg">
              <Image src="/interface2.png" alt="check" width={27} height={26} />
            </div>
            <p className="text-gray">
              TA’s and presenters can be moved to the front of the class.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full shadow-lg">
              <Image src="/interface3.png" alt="check" width={27} height={26} />
            </div>
            <p className="text-gray">
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature1;
