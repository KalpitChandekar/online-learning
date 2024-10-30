import Image from "next/image";

const Companies = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0 space-y-8 text-center my-40">
      <p className="text-gray">Trusted by 5,000+ Companies Worldwide</p>
      <div className="md:flex md:justify-between grid grid-cols-3 gap-6 md:gap-0 items-center">
        <Image
          src="/google.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
        <Image
          src="/netflix.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
        <Image
          src="/airbnb.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
        <Image
          src="/amazon.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
        <Image
          src="/facebook.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
        <Image
          src="/grab.png"
          alt="Companies"
          width={151}
          height={45}
          className="w-24"
        />
      </div>
    </div>
  );
};
export default Companies;
