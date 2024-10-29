import Image from "next/image";

const Integration = () => {
  return (
    <div className="max-w-5xl mx-auto my-40 flex items-center justify-around">
      <div className="grid grid-cols-2 gap-10">
        <Image
          src="/Integration1.png"
          alt="integration"
          width={228}
          height={195}
          className="w-40"
        />
        <Image
          src="/Integration2.png"
          alt="integration"
          width={130}
          height={121}
          className="w-36"
        />
        <Image
          src="/Integration3.png"
          alt="integration"
          width={138}
          height={135}
          className="w-36"
        />
        <Image
          src="/Integration4.png"
          alt="integration"
          width={159}
          height={159}
          className="w-36"
        />
      </div>

      <div className="space-y-6 max-w-md">
        <div className="flex items-center gap-4">
          <div className="bg-gray h-[1px] w-14"></div>
          <h1 className="text-gray">INTEGRATION</h1>
        </div>
        <h1 className="text-2xl font-bold text-blue">
          200+ educational tools <br /> and platform{" "}
          <span className="text-orange">integration</span>
        </h1>
        <p className="text-gray">
          Schoology has every tool your classroom needs and comes pre-integrated
          with more than 200+ tools, student information systems (SIS), and
          education platforms.
        </p>
        <button className="rounded-full py-3 px-6 text-orange border border-orange">
          See All Integrations
        </button>
      </div>
    </div>
  );
};
export default Integration;
