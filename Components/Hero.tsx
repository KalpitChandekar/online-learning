import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="max-w-5xl mx-auto px-4 md:px-0 flex md:flex-row flex-col md:justify-between items-center md:items-start
    "
    >
      <div className="max-w-md space-y-6 my-24">
        <h1 className="text-4xl text-blue font-bold leading-snug">
          <span className="text-orange">Studying</span> Online is now much
          easier
        </h1>
        <p className="text-[#464646] max-w-sm">
          Skilline is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className="flex gap-4 items-center">
          <button className="bg-[#F48C06] text-white rounded-full px-5 py-2">
            Join for free
          </button>
          <div className="flex gap-2 items-center">
            <Image
              src="/watch.png"
              alt="watch"
              width={88}
              height={90}
              className="w-10"
            />
            <p className="text-[#464646] text-sm">watch how it works</p>
          </div>
        </div>
      </div>
      <div className="md:w-[31rem]">
        <Image
          src="/hero.png"
          alt="hero"
          width={911}
          height={990}
          layout="responsive"
          className=""
        />
      </div>
    </div>
  );
};
export default Hero;
