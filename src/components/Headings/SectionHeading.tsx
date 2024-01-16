type HeadingProp = {
  heading: string;
};

const SectionHeading = ({ heading }: HeadingProp) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-[2px] w-14 bg-primary" />
      <h2 className="section-heading text-center text-primary font-medium">{heading}</h2>
      <div className="h-[2px] w-14 bg-primary" />
    </div>
  );
};

export default SectionHeading;
