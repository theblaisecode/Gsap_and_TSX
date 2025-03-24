import { contactSocials } from "../data.ts";
import { type ContactSocialType } from "../types/types.tsx";

export const LetsWorkTogether = () => {
  return (
    <div id="letsWork">
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
  return (
    <div id="form">
      <div className="formContent">
        <div className="contentTop">Contact Form</div>
      </div>
    </div>
  );
};

// I'm currently available to take new projects or collaborations, so feel free to reach out about anything you would like to discuss.

// Are you interested in starting new projects, collaborations  or simply want to say hello? Feel free to send me a mail and I'll try to get back to you within 24 hours.
