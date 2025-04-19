import { contactSocials } from "../data.ts";
import { type ContactSocialType } from "../types/types.tsx";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LetsWorkTogether = () => {
  return (
    <div id="letsWork" className="animate">
      <div className="letsWorkContent">
        <div className="contentTop">
          <h2>Let's work together!</h2>
          <p>
            Are you interested in starting new projects, collaborations or
            simply want to say hello? Feel free to send me a mail and I'll try
            to get back to you within 24 hours.
          </p>
        </div>
        <div className="contentBottom">
          <div className="contactSocials">
            {contactSocials.map((item: ContactSocialType) => {
              const {
                id,
                icon: Icon,
                href,
                ariaLabel,
                title,
              }: ContactSocialType = item;
              return (
                <a key={id} href={href} target="_blank" aria-label={ariaLabel}>
                  <span className="icon">
                    <Icon />
                  </span>
                  <span className="reachMe">{title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_8jee71a", // EmailJS Service ID
        "template_muxwlbr", // EmailJS Template ID
        formRef.current,
        "BNIMWTsbE_2U6X0nW" // EmailJS Public Key
      )
      .then((response) => {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
        });
        console.log("SUCCESS!", response.status, response.text);
        formRef.current?.reset(); // Reset form
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
        });
        console.log("FAILED...", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="form" className="animate">
      <div className="formContent">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          data-netlify="true"
          data-netlify-recaptcha="true">
          <div id="name">
            <p>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Full Name"
              />
            </p>
          </div>

          <div id="email">
            <input
              type="email"
              name="from_email"
              required
              placeholder="Email Address"
            />
          </div>

          <div id="message">
            <textarea name="message" required placeholder="Message"></textarea>
          </div>

          <div className="recaptcha">
            <div data-netlify-recaptcha="true"></div>
          </div>

          <div className="formButton">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// I'm currently available to take new projects or collaborations, so feel free to reach out about anything you would like to discuss.

// Are you interested in starting new projects, collaborations  or simply want to say hello? Feel free to send me a mail and I'll try to get back to you within 24 hours.
