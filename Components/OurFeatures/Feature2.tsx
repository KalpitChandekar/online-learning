import Image from "next/image";

const Feature2 = () => {
  return (
    <div className="flex md:flex-row flex-col gap-20 items-center">
      <div className="space-y-6 max-w-sm">
        <h1 className="text-2xl font-bold text-blue">
          <span className="text-orange">Tools</span> designed for <br />{" "}
          Teachers And Learners
        </h1>
        <p className="text-gray">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>

      <div className="relative md:w-[30rem]">
        <Image src="/feature2.png" alt="feature1" width={679} height={611} />
      </div>
    </div>
  );
};
export default Feature2;
