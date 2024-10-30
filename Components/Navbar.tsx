import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-5xl px-4 md:px-0 mx-auto z-10 pt-6 flex justify-between">
      <a href="/">
        <Logo />
      </a>

      <ul className="flex text-[#252641] items-center gap-2 md:gap-10">
        <li className="hidden md:block">
          <a href="/">Home</a>
        </li>
        <li className="hidden md:block">
          <a href="/">Blog</a>
        </li>
        <li className="hidden md:block">
          <a href="/">Careers</a>
        </li>
        <li className="hidden md:block">
          <a href="/">About Us</a>
        </li>
        <button className="bg-white text-[#6C6C6C] rounded-full px-5 py-1">
          Login
        </button>
        <button className="bg-[#F48C06] text-white rounded-full px-5 py-1">
          Sign Up
        </button>
      </ul>
    </div>
  );
};
export default Navbar;
