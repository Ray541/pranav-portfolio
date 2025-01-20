// Components
import Socials from "../Socials";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center gap-5 px-5 py-16 bg-gray-50/10 text-gray-900 dark:bg-gray-900 dark:text-gray-200 relative"
      >
        <h2 className="text-6xl font-bold mb-5 text-center">
          <span className="text-primary">Contact</span> Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-5 text-center">
            If you have any questions or want to get in touch, feel free to drop me an email. I
            would love to hear from you!
          </p>
          <p className="text-3xl mb-8 text-center font-semibold">Let's Build Together</p>
          <div className="flex justify-center items-center flex-col">
            <a
              href="mailto:pranavrao541@gmail.com"
              className="bg-primary hover:bg-gray-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 ease-in-out font-medium flex items-center justify-center gap-1 active:scale-95 mb-5"
            >
              <span>Let's Connect</span> <FiSend className="text-xl" />
            </a>
            <Socials />
          </div>
        </div>
      </section>
      <hr className="mx-5" />
    </>
  );
};

export default Contact;
