import Image from "next/image";

const Feature5 = () => {
  return (
    <div className="space-y-20">
      <div className="flex md:flex-row flex-col-reverse gap-20 items-center">
        <div className="relative">
          <Image src="/feature5.png" alt="feature1" width={761} height={561} />
        </div>

        <div className="space-y-6 max-w-sm">
          <h1 className="text-2xl font-bold text-blue">
            One-on-One <br /> <span className="text-orange">Discussions</span>
          </h1>
          <p className="text-gray">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded-full py-3 px-6 text-orange border border-orange">
          See more features{" "}
        </button>
      </div>
    </div>
  );
};
export default Feature5;
