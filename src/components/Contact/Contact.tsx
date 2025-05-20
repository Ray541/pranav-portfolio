import Section from "../Section/Section";
import Socials from "../Socials/Socials";
import { Button } from "../ui/button";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <Section sectionName="contact" className="py-20 px-3">
      <h2 className="text-6xl font-bold text-center mb-10">
        Contact <span className="text-muted">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <p className="text-xl font-semibold text-center text-muted-foreground">
          If you have any questions or want to get in touch, feel free to drop me an email. I would
          love to hear from you!
        </p>

        <div className="flex flex-col items-center justify-center mt-5">
          <Button variant="default" asChild>
            <a href="mailto:pranavrao541@gmail.com" className="mb-5">
              Let's Connect
              <SiMinutemailer />
            </a>
          </Button>

          <Socials />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
