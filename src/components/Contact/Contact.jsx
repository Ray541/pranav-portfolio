import { SendIcon } from "../../assets/constants";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold mb-5 text-center">
            <span className="text-blue-500">Contact</span> Me
          </h2>
          <p className="text-xl mb-5 text-center">
            If you have any questions or want to get in touch, feel free to drop me an email. I
            would love to hear from you!
          </p>
          <p className="text-xl mb-8 text-center">Let's Build Together</p>
          <div className="flex justify-center">
            <a
              href="mailto:pranavrao541@gmail.com"
              className="bg-blue-500 hover:bg-gray-950 text-white px-4 py-2 rounded shadow transition-colors duration-200 ease-in-out font-medium flex items-center justify-center gap-1"
            >
              <span>Let's Connect</span> <SendIcon />
            </a>
          </div>
        </div>
      </section>
      <hr className="mx-5" />
    </>
  );
};

export default Contact;
