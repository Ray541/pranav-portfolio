import Section from "../Section/Section";
import { MdOutlineFileDownload } from "react-icons/md";
import Socials from "../Socials/Socials";
import resume from "../../assets/Pranav's_Resume.pdf";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Section sectionName="home" className="h-dvh">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full h-full flex items-center justify-center p-3 md:p-0">
          <div className="flex flex-col items-center justify-center text-center lg:text-start gap-4 sm:gap-2 lg:w-3/4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground">
              Hi, I'm{" "}
              <span className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Pranav Rao
              </span>
              .
            </h1>

            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-center text-lg font-medium text-foreground leading-relaxed">
                Passionate{" "}
                <span className="font-bold text-primary tracking-wide">Frontend Developer</span>{" "}
                started my career in Web Dev. I specialize in using{" "}
                <span className="font-bold text-primary tracking-wide">React.js</span> to build
                modern, dynamic and efficient websites.
              </p>

              <Button asChild variant="default" className="gap-2 mt-2">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <MdOutlineFileDownload className="text-xl" />
                  <span>Download CV</span>
                </a>
              </Button>

              <Socials />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
