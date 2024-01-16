import About from "../components/Section/About";
import Contact from "../components/Section/Contact";
import GetInTouch from "../components/Section/GetInTouch";
import Hero from "../components/Section/Hero";
import Services from "../components/Section/Services";
import Testimonials from "../components/Section/Testimonials";

const Home = () => {
  return (
    <div className="pt-[var(--padding)] flex flex-col items-center">
      <Hero />
      <About />
      <Services />
      <GetInTouch />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
