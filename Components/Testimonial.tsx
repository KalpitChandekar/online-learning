import { ChevronRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="max-w-5xl mx-auto my-40 flex items-center gap-40">
      <div className="space-y-6 ml-10 max-w-xs">
        <div className="flex items-center gap-4">
          <div className="bg-gray h-[1px] w-14"></div>
          <h1 className="text-gray">TESTIMONIAL</h1>
        </div>
        <h1 className="text-2xl font-bold text-blue">What They Say?</h1>
        <p className="text-gray">
          Skilline has got more than 100k positive ratings from our users around
          the world.
        </p>
        <p className="text-gray">
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p className="text-gray">Are you too? Please give your assessment</p>
        <button className="rounded-full py-3 px-6 text-orange border border-orange flex gap-3">
          Write your assessment
          <MoveRightIcon />
        </button>
      </div>

      <div className="relative">
        <div className="relative">
          <Image
            src="/testimonial.png"
            alt="testimonial"
            width={560}
            height={700}
            className="w-80"
          />
          <div className="bg-white p-3 rounded-full absolute top-1/2 -right-8 transform -translate-y-1/2 text-[#1EA4CE] shadow-lg">
            <ChevronRight className="" />
          </div>
        </div>

        <div className="absolute -bottom-16 left-12 rounded-2xl bg-white py-6 px-8 text-gray space-y-4 shadow-lg w-[28rem] border-red border-l-8">
          <div className="flex gap-4 items-center">
            <div className="w-2 h-24 bg-[#BDBDD1]"></div>
            <p className="">
              &ldquo;Thank you so much for your help. It&apos;s exactly what
              I&apos;ve been looking for. You won&apos;t regret it. It really
              saves me time and effort. Skilline is exactly what our business
              has been lacking.&rdquo;
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Gloria Rose</h1>
            <div className="flex flex-col items-center justify-center gap-1">
              <Image
                src="/star.png"
                alt="star"
                width={137}
                height={24}
                className="w-20"
              />
              <p className="text-sm">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
