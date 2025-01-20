import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex gap-6 items-center justify-center lg:justify-start">
      <a
        href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor='{"type": "hover", "className": "border-gray-200"}'
      >
        <SiLinkedin className="text-xl" />
      </a>
      <a
        href="https://github.com/Ray541"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor='{"type": "hover", "className": "border-gray-200"}'
      >
        <SiGithub className="text-xl" />
      </a>
      <a
        href="https://www.facebook.com/pranav.rao.338"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor='{"type": "hover", "className": "border-gray-200"}'
      >
        <SiFacebook className="text-xl" />
      </a>
      <a
        href="https://www.instagram.com/pranav_rao0504"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary active:scale-95"
        data-cursor='{"type": "hover", "className": "border-gray-200"}'
      >
        <SiInstagram className="text-xl" />
      </a>
    </div>
  );
};

export default Socials;
