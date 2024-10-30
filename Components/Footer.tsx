import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 py-10 flex flex-col gap-12 items-center justify-center bg-footer">
      <div className="flex gap-14 items-center justify-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={83}
          className="w-36"
        />
        <div className="bg-gray h-16 w-[1px] rounded-full "></div>
        <h1 className="text-white text-lg font-semibold">
          Virtual Class <br />
          for zoom
        </h1>{" "}
      </div>
      <div className="space-y-2 text-center">
        <p className="text-lg text-footer_text font-semibold">
          Subscribe to get our Newsletter
        </p>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Your email"
            className="md:w-72 h-10 border border-gray rounded-full bg-transparent px-6"
          />
          <button className="bg-blue text-white h-10 w-28 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="space-y-3 text-center">
        <div className="text-footer_text space-x-4">
          <a href="/" className="hover:underline">
            Careers
          </a>
          <span>|</span>
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
        <p className="text-footer_text">© 2021 Class Technologies Inc. </p>
      </div>
    </div>
  );
};
export default Footer;
