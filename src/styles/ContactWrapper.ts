import styled from "styled-components";

const ContactWrapper = styled.section`
  .contactContent {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid #464545;
    border-radius: 5px; */
    padding: 2rem;
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

  .letsWorkContent {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .contactSocials {
    display: flex;
    gap: 1rem;
  }

  .contactSocials .contentBottom {
    display: inline-block;
  }

  .contactSocials a {
    /* display: flex;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center; */
  }

  .contactSocials a span{
    display: inline-block;
  }

  .contactSocials a .icon {
    background: var(--accent);
    color: var(--textLight);
    padding: 1rem;
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;

export default ContactWrapper;
