import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iuqm889",
        "template_m258i9t",
        form.current,
        "iSgYFzDJoUxhRfid-"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            title: "Success!",
            text: "Your Email was Sent Successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "There was an issue Sending your Email.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row contact-section">
          <h2 className="reveal scroll-active">Don't be shy, send a message</h2>
          <div className="col-lg-7 col-md-10 mt-5 reveal scroll-active">
            <form
              className="contact-form"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="name"
                required=""
                autoComplete="off"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="email"
                required=""
                autoComplete="off"
              />
              <textarea
                name="user_message"
                id="message"
                placeholder="Message..."
                className="message"
              ></textarea>
              <input
                type="submit"
                name="send"
                value="Send"
                className="send-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
