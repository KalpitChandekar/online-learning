import Image from "next/image";

const NewsResources = () => {
  return (
    <div className="max-w-5xl mx-auto md:px-0 px-4 md:flex-row flex-col my-40 space-y-16">
      <div className="text-center space-y-4 mx-auto max-w-lg">
        <h1 className="text-2xl font-bold text-blue">
          Latest News nad Resources
        </h1>
        <p className="text-gray">
          See the developments that have occurred to Skilline in the world
        </p>
      </div>

      <div className="flex gap-20 md:flex-row flex-col">
        <div className="space-y-4 flex flex-col items-start">
          <Image src="/news1.png" alt="news1" width={640} height={340} />
          <div className="text-footer font-semibold rounded-full py-1 px-3 bg-bg_orange">
            NEWS
          </div>
          <h1 className="text-lg font-semibold text-footer">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h1>
          <p className="text-gray">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <p className="underline text-gray">Read more</p>
        </div>
        {/* 280 200 */}
        <div className="space-y-10">
          <div className="flex gap-6 md:flex-row flex-col items-start">
            <div className="relative">
              <Image src="/news2.png" alt="news" width={280} height={200} />
              <div className="text-footer absolute bottom-2 right-2 text-xs rounded-full py-1 px-3 bg-bg_orange">
                PRESS RELEASE
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-footer">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-gray">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex gap-6 md:flex-row flex-col items-start">
            <div className="relative">
              <Image src="/news3.png" alt="news" width={280} height={200} />
              <div className="text-footer absolute bottom-2 right-2 text-xs rounded-full py-1 px-3 bg-bg_orange">
                NEWS{" "}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-footer">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </h1>
              <p className="text-gray">
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
          </div>
          <div className="flex gap-6 md:flex-row flex-col items-start">
            <div className="relative">
              <Image src="/news4.png" alt="news" width={280} height={200} />
              <div className="text-footer absolute bottom-2 right-2 text-xs rounded-full py-1 px-3 bg-bg_orange">
                NEWS{" "}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-footer">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </h1>
              <p className="text-gray">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsResources;
