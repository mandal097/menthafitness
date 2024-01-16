import React from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div
      className={`w-full d-flex-center bg-white transition-all duration-500 fixed z-50 ${
        scrolled ? "py-3 shadow-navbar" : "py-6"
      }`}>
      <div className="w-full px-3 lg:w-[var(--width)] flex items-center justify-between sm:px-4">
        <div className="h-full flex items-center justify-between cursor-pointer">
          <img
            className="rounded-md h-12 w-12 bg-cover object-cover"
            src="src/assets/logo.jpg"
            alt="logo"
          />
          <a
            href="/"
            className="pl-3 text-2xl font-semibold text-black uppercase"
            onClick={() => {
              window.scroll({ top: 0, behavior: "smooth" });
            }}>
            Mentha fitness
          </a>
        </div>
        <div
          className={`${
            show && "top-0 right-0 left-0"
          } bg-[rgba(0,0,0,0.9)] h-[100%] fixed d-flex-center  lg:static lg:h-full lg:bg-transparent`}>
          <div
            className="lg:hidden absolute top-5 right-5"
            onClick={handleToggle}>
            <RxCross2 className="text-3xl text-white" />
          </div>
          <div
            className={`flex-col  ${
              show ? "flex animate-[fade_200ms_ease-in_1]" : "hidden"
            } items-start rounded-lg p-5 h-[80%] w-[90%] bg-white lg:bg-transparent static lg:h-full lg:w-full lg:flex lg:flex-row lg:items-center lg:p-0 gap-8`}>
            <a onClick={handleToggle} href="/" className="nav-links">
              Home
            </a>

            <a onClick={handleToggle} href="#contact" className="nav-links">
              Contact Us
            </a>
            <a onClick={handleToggle} href="#about" className="nav-links">
              About us
            </a>
            <button className="btn-primary w-full md:w-fit bg-blue hover:bg-primary">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex lg:hidden cursor-pointer" onClick={handleToggle}>
          <RxHamburgerMenu className="text-2xl text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
