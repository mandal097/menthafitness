import image from "../../assets/hero.png";

const Hero = () => {
  return (
    <div id="home" className="wrapper-container mb-10">
      <div className="md:mt-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          {/* left */}
          <div className="p-3 md:p-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#383737]">
              Learn Yoga And Weight Loss Online/Offline With Professional Tutor.
            </h1>
            <h2 className="text-xl md:text-xl font-light text-[#484848] mt-3 mb-7 ">
              Live 1 to 1 classes For All Ages instructions .
            </h2>
            <a href="#contact" className="w-fit btn-primary text-lg border-2 text-primary cursor-pointer hover:bg-primary hover:text-white">
              Get Started
            </a>
          </div>
          {/* right */}
          <div className="md:w-full w-[80%] mx-auto md:h-[60vh] d-flex-center animate-[fade-up-down_2000ms_ease-in_infinite_alternate]">
            <img src={image} alt="bg" className="aspect-square bg-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
