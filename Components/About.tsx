import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto my-40 space-y-20">
      <div className="space-y-14">
        <div className="text-center space-y-4 mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold text-blue">
            What is <span className="text-orange">Skilline?</span>
          </h1>
          <p className="text-gray">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="flex justify-between gap-16">
          <div className="bg-instructor flex flex-col items-center justify-center space-y-4 bg-cover rounded-md w-full h-[300px]">
            <h1 className="text-2xl font-bold text-white">OUR INSTRUCTORS</h1>
            <button className="border border-white rounded-full text-white py-3 px-8">
              Start a class today
            </button>
          </div>
          <div className="bg-student flex flex-col items-center justify-center space-y-4 bg-cover rounded-md w-full h-[300px]">
            <h1 className="text-xl font-semibold text-white">FOR STUDENTS</h1>
            <button className="bg-[#23BDEE] rounded-full text-white py-3 px-8">
              Enter access code
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-20">
        <div className="space-y-8 max-w-md relative">
          <h1 className="text-2xl font-bold text-blue ">
            Everything you can do in a physical classroom,{" "}
            <span className="text-orange">you can do with skilline</span>
          </h1>
          <p className="text-gray">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <div className="text-gray cursor-pointer underline">Learn more</div>

          <div className="bg-bg_orange h-10 w-10 rounded-full -z-10 absolute -top-9 -left-2"></div>
          <div className="bg-bg_orange h-4 w-4 rounded-full -z-10 absolute right-0 top-32"></div>
        </div>
        <div className="flex relative">
          <Image
            src="/learn_more.png"
            alt="learn-more"
            width={705}
            height={472}
            className="z-10"
          />
          <div className="bg-sky_blue h-20 w-20 rounded-xl absolute -top-4 -left-4"></div>
          <div className="bg-bg_orange h-32 w-32 rounded-xl absolute -bottom-4 -right-4"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
