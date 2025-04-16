type SectionProps = {
  sectionName: string;
  className?: string;
  children?: React.ReactNode;
};

const Section = ({ className, sectionName, children }: SectionProps) => {
  return (
    <section
      id={sectionName}
      className={`w-full max-w-7xl container bg-background flex items-center justify-center flex-col ${className}`}
    >
      {sectionName}
      {children}
    </section>
  );
};

export default Section;
