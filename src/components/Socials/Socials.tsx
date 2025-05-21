import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { handleCursorEnter, handleCursorLeave } from "../../utils/gsapUtils";

type SocialsProps = {
  direction?: string;
};

const Socials = ({ direction }: SocialsProps) => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/pranav-rao-09a79b231/",
      icon: <SiLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Ray541",
      icon: <SiGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.facebook.com/pranav.rao.338",
      icon: <SiFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/pranav_rao0504",
      icon: <SiInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <div className={`flex flex-${direction} gap-3 items-center justify-center lg:justify-start`}>
      {socials.map((social, index) => (
        <Button
          asChild
          key={index}
          variant="link"
          size="icon"
          className="text-xl transition-all duration-150 active:scale-95"
          onMouseEnter={() => handleCursorEnter(2.5)}
          onMouseLeave={handleCursorLeave}
        >
          <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
