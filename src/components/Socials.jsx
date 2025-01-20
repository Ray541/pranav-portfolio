import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

const Socials = () => {
  const hoverCursorClasses = {
    type: "hover",
    width: "17px",
    height: "10px",
    className: "border-gray-200",
  };

  return (
    <div className="flex gap-6 items-center justify-center lg:justify-start">
      <a
        href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor={JSON.stringify(hoverCursorClasses)}
      >
        <SiLinkedin className="text-xl" />
      </a>
      <a
        href="https://github.com/Ray541"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor={JSON.stringify(hoverCursorClasses)}
      >
        <SiGithub className="text-xl" />
      </a>
      <a
        href="https://www.facebook.com/pranav.rao.338"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor={JSON.stringify(hoverCursorClasses)}
      >
        <SiFacebook className="text-xl" />
      </a>
      <a
        href="https://www.instagram.com/pranav_rao0504"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor={JSON.stringify(hoverCursorClasses)}
      >
        <SiInstagram className="text-xl" />
      </a>
    </div>
  );
};

export default Socials;
