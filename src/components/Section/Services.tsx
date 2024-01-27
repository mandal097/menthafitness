import SectionHeading from "../Headings/SectionHeading";

const Card = () => {
  return (
    <div className="grid-cols-1 flex items-center flex-col  p-8 rounded-lg shadow-navbar mb-4">
      <p className="text-sm font-medium uppercase text-[var(--regular-gray)]">
        Dj yoga trainer
      </p>
      <p className="capitalize mt-3 text-xl font-medium text-[var(--primary)]">
        Ardhar chakra
      </p>
      <img
        src="https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg?w=740&t=st=1706383586~exp=1706384186~hmac=35c57ab13918454c288ed46bfceb1d757ec175ef4ef9dc60b2556131b037abba"
        alt=""
        className="bg-cover w-[80%] h-[80%]"
      />
    </div>
  );
};

const Services = () => {
  return (
    <div id="about" className="wrapper-container px-6 sm:px-20 md:pt-32">
      <SectionHeading heading="Our main services" />
      <div className="section-title my-2" data-aos="fade-up">
        <p>
          {" "}
          <b>Services we provide....</b>{" "}
        </p>
      </div>

      <div className="w-full my-16 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
