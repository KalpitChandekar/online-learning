import Image from "next/image";

const Feature3 = () => {
  return (
    <div className="flex gap-20 items-center">
      <div className="relative w-[30rem]">
        <Image src="/feature3.png" alt="feature1" width={624} height={724} />
      </div>

      <div className="space-y-6 max-w-sm">
        <h1 className="text-2xl font-bold text-blue">
          Assessments,<br /> <span className="text-orange">Quizzes,</span> Tests
        </h1>
        <p className="text-gray">
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
};
export default Feature3;
