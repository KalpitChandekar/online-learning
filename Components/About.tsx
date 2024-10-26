const About = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 space-y-14">
      <div className="text-center space-y-4 mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-blue">
          What is <span className="text-orange">Skilline?</span>
        </h1>
        <p className="text-gray">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
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
  );
};
export default About;
