import styled from "styled-components";

const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 9rem 0 0 0;

  .contactContent {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: flex-start;
    /* flex-direction: row-reverse; */
    /* border: 2px solid #464545;
    border-radius: 5px; */
    padding: 5rem;
    background: rgba(204, 17, 0, 0.1);
    box-shadow: 0 0.8rem 3.2rem 0 rgba(204, 38, 0, 0.08);
    backdrop-filter: blur(0.65rem);
    -webkit-backdrop-filter: blur(0.65rem);
    border-radius: 1rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
  }

  .contactContent .top,
  .contactContent .bottom {
    flex: 1;
  }

  /* Lets Work Together */

  .letsWorkContent,
  .letsWorkContent .contentTop {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .letsWorkContent .contentTop {
    gap: 2rem;
  }

  .letsWorkContent .contentTop h2 {
    font-size: 4rem;
    font-weight: 500;
  }

  .letsWorkContent .contentTop p {
    opacity: 0.7;
    line-height: 3rem;
    letter-spacing: 0.07rem;
  }

  .letsWorkContent .contentBottom {
    width: 70%;
  }

  /* Socials */

  .contactSocials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .contactSocials a {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center;
    color: var(--textLight);
    transition: 0.2s;
  }

  .contactSocials a span {
    display: inline-block;
    transition: 0.4s;
  }

  .contactSocials a .icon {
    background: var(--accent);
    color: var(--textLight);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: 0.4s;
  }

  .contactSocials a:hover {
    color: var(--primary);
    transition: all 0.2s;
  }

  .contactSocials a:hover .icon {
    background: var(--primary);
    transition: all 0.4s;
  }

  /* Contact Form */
  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  form #name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  form #name p {
    flex: 1;
  }

  form input,
  form textarea {
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: var(--textLight);
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    padding: 1rem 0;
    border-bottom: 0.2rem solid var(--textLightAccent);
    transition: 0.4s;
  }

  form input:focus,
  form textarea:focus,
  form input:hover,
  form textarea:hover {
    border-bottom: 0.2rem solid var(--primaryAccent);
    transition: all 0.4s;
  }

  form textarea {
    height: 20rem;
    resize: none;
  }

  form .formButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  form .formButton button {
    background: var(--primary);
    outline: none;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    padding: 1rem 2.5rem;
    border-radius: 0.2rem;
    color: var(--textLight);
    transition: 0.4s;
  }

  form .formButton button:hover {
    background: var(--primaryAccent);
    transition: all 0.4s;
  }
`;

export default ContactWrapper;
