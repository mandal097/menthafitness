import { IoSendSharp } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className="w-full pb-8 md:py-8 md:pb-16 h-auto bg-primary flex flex-col d-flex-center">
      <div className={`w-full mx-auto py-8`}>
        <h1 className={`text-white text-2xl md:text-4xl font-medium text-center leading-snug`}>
          Get to know us better!
        </h1>
        <p className="text-white px-4 text-[16px] md:text-[20px] text-center font-normal mt-5">
          It is a pleasure to have you on our website. Let us know if there's an
          opportunity to do something together.
        </p>
      </div>
      <button className="btn-primary gap-7 group bg-white text-white hover:text-general-color border-general-color hover:bg-white hover:border-white hover:gap-3 transition-all duration-200">
        <a
          href="mailto:amarnathkumar097.ak@gmail.com"
          className="group-hover:text-blue text-blue">
          Drop a message
        </a>
        <IoSendSharp className="group-hover:text-blue text-blue" />
      </button>
    </div>
  );
};

export default GetInTouch;
