type SectionProps = {
  sectionName: string;
  className?: string;
  children?: React.ReactNode;
};

const Section = ({ className, sectionName, children }: SectionProps) => {
  return (
    <section
      id={sectionName}
      className={`w-full max-w-7xl container bg-transparent flex items-center justify-center flex-col ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
