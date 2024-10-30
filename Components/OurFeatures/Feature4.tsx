import Image from "next/image";

const Feature4 = () => {
  return (
    <div className="flex md:flex-row flex-col gap-20 items-center">
      <div className="space-y-6 max-w-sm">
        <h1 className="text-2xl font-bold text-blue">
          <span className="text-orange">Class Management</span> <br /> Tools for
          Educators
        </h1>
        <p className="text-gray">
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>

      <div className="relative">
        <Image src="/feature4.png" alt="feature1" width={881} height={624} />
      </div>
    </div>
  );
};
export default Feature4;
