import { FiSend } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold mb-5 text-center">
            <span className="text-primary">Contact</span> Me
          </h2>
          <p className="text-xl mb-5 text-center">
            If you have any questions or want to get in touch, feel free to drop me an email. I
            would love to hear from you!
          </p>
          <p className="text-3xl mb-8 text-center">Let's Build Together</p>
          <div className="flex justify-center items-center flex-col">
            <a
              href="mailto:pranavrao541@gmail.com"
              className="bg-primary hover:bg-gray-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 ease-in-out font-medium flex items-center justify-center gap-1 active:scale-95"
            >
              <span>Let's Connect</span> <FiSend className="text-xl" />
            </a>

            <div className="mt-5 flex gap-6 items-center justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <SiLinkedin className="text-xl active:scale-95" />
              </a>
              <a
                href="https://github.com/Ray541"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <SiGithub className="text-xl active:scale-95" />
              </a>
              <a
                href="https://www.facebook.com/pranav.rao.338"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <SiFacebook className="text-xl active:scale-95" />
              </a>
              <a
                href="https://www.instagram.com/pranav_rao0504"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <SiInstagram className="text-xl active:scale-95" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-5" />
    </>
  );
};

export default Contact;
