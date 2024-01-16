import SectionHeading from "../Headings/SectionHeading";

const About = () => {
  return (
    <div id="about" className="wrapper-container px-6 sm:px-20 md:pt-32">
      <SectionHeading heading="About us" />
      <div className="section-title my-2" data-aos="fade-up">
        <p>
          {" "}
          <b>Welcome to Mentha Fitness. </b>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
