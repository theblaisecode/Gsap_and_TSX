import { ContactForm, LetsWorkTogether } from "../components/ContactPage.tsx";
import ContactWrapper from "../styles/ContactWrapper.ts";

function Contact() {
  return (
    <ContactWrapper>
      <div className="container">
        <div className="contactContent animate">
          <div className="top">
            <LetsWorkTogether />
          </div>

          <div className="bottom">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
