import styled from "styled-components";

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 0 0;

  .homeContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    width: 100%;
  }

  .homeContent .top {
    flex: 1;
  }

  /* .homeContent .bottom {
    flex: 3;
    display: flex;
    width: 100%;
    justify-content: space-between !important;
    align-self: center;
  } */

  .homeContent .bottom {
    flex: 2.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  /* -------------------- Intro -------------------- */
  #intro {
    height: 70vh;
    display: flex;
    flex: 1;
  }

  .introContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    align-items: flex-start;
  }

  .introContent .contentTop {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .contentTop,
  .contentBottom {
    width: 100%;
  }

  .introContent .greetings {
    background: var(--accent);
    font-size: 1.3rem;
    padding: 0.6rem 1.5rem;
    font-weight: 300;
    display: inline-block;
  }

  .introContent .greetings span,
  .introContent .socials .title span {
    opacity: 0.7;
  }

  .introContent .greetings span.bold {
    font-weight: 600;
  }

  .introContent .name {
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
  }

  .introContent .name .alias {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2rem;
    letter-spacing: normal;
  }

  .introContent .name .alias .divider {
    width: 10rem;
    height: 0.2rem;
    background: var(--primary);
  }

  .introContent .btn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.3rem;
    padding: 0.8rem;
    border: 0.1rem solid var(--primary);
    border-bottom-right-radius: 2rem;
    cursor: pointer;
    transition: 0.4s;
  }

  .introContent .btn2:hover {
    background: var(--primary);
    transition: all 0.4s;
  }

  .introContent .contactme {
    width: 65%;
    margin-top: 2rem;
  }

  .introContent .socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  .introContent .socials .title {
    background: var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    width: fit-content;
    font-size: 1.2rem;
    padding: 0.4rem 1.3rem;
    font-weight: 600;
    border-bottom-right-radius: 1rem;
  }

  .introContent .socials .title svg {
    color: var(--primary);
  }

  .introContent .socials .socialLinks {
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
  }

  .introContent .socials .socialLinks a {
    transition: 0.4s;
  }

  .introContent .socials .socialLinks a:hover {
    color: var(--primary);
    transition: all 0.4s;
  }

  .introContent .socials .socialLinks svg {
    color: var(--socials);
    font-size: 1.8rem;
    transition: 0.4s;
  }

  .introContent .socials .socialLinks a:hover svg {
    color: var(--primary);
    transition: all 0.4s;
  }

  .introContent .socials .socialLinks .platform {
    position: relative;
    padding-right: 2rem;
    opacity: 0.7;
  }

  .introContent .socials .socialLinks .platform::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 1rem;
    width: 0.2rem;
    background-color: white;
    transform: translateY(-50%);
    opacity: 0.7;
  }

  .introContent .socials .socialLinks a:last-child .platform::after {
    display: none;
  }

  .introContent .contentBottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .introContent .contentBottom .designer {
    font-size: 4rem;
    font-weight: 300;
    font-style: italic;
    opacity: 0.1;
  }

  /* -------------------- Photograph -------------------- */
  #teddy {
    width: 45%;
    display: flex;
    justify-content: flex-start;
  }

  #teddy img {
    display: block;
  }
  /* -------------------- Job -------------------- */
  #job {
    height: 65vh;
    width: 40%;

    .jobContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      align-items: flex-start;
    }
  }

  .jobContent .contentTop {
    gap: 4rem;
  }

  .jobContent .jobTitle,
  .jobContent .contentTop {
    display: flex;
    flex-direction: column;
  }

  .jobContent .jobTitle .heading {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--primary);
    text-transform: uppercase;
  }

  .jobContent .jobTitle h1 {
    font-size: 4.5rem;
    font-weight: 600;
    letter-spacing: 0.3rem;
  }

  .jobContent .jobDescription {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  .jobContent .tags,
  .jobContent .tags ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .jobContent .tags ul {
    list-style: none;
    justify-content: space-between;
    gap: 1rem;
  }

  .jobContent .tags ul li {
    padding-right: 1.2rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary);
    border-right: 0.2rem solid rgba(255, 255, 255, 0.5);
  }

  .jobContent .tags ul li:last-child {
    border-right: none;
  }

  .jobContent .contentBottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jobContent .contentBottom .quote {
    border-left: 0.3rem solid var(--primary);
    padding-left: 2rem;
    width: 52%;
  }

  .jobContent .contentBottom .quote p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .jobContent .contentBottom .quote p .highlight {
    font-weight: 700;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    margin: 4rem 0 6rem 0;

    .homeContent {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8rem;
      width: 100%;
    }

    .homeContent .top {
      width: 100%;
    }

    .homeContent .bottom {
      flex-direction: column-reverse;
      flex: 1;
    }

    #intro,
    #job {
      height: auto;
    }

    .introContent {
      justify-content: flex-start;
    }

    .introContent .contentTop,
    .introContent .contentTop .introDeets,
    .introContent .contentTop .socials {
      justify-content: center;
      align-items: center;
    }

    .introContent .contentTop .introDeets {
      display: flex;
      flex-direction: column;
    }

    .introContent .contentTop .introDeets,
    .introContent .contentTop .introDeets .greetings {
      /* align-self: center; */
      text-align: center;
    }

    .introContent .contactme {
      width: 100%;
    }

    .introContent .socials .socialLinks .platform {
      padding-right: 3.5rem;
    }

    .introContent .socials .socialLinks {
      gap: 3.5rem;
    }

    .introContent .socials .socialLinks a:last-child .platform {
      padding-right: 0;
    }

    .introContent .contentBottom {
      display: none;
    }

    #job {
      width: 100%;
    }

    #job .jobContent {
      justify-content: flex-start;
      gap: 4rem;
    }

    .jobContent .contentTop {
      gap: 2rem;
    }

    .jobContent .contentTop {
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .jobContent .tags ul {
      gap: 1rem;
    }

    .jobContent .tags ul li {
      padding-right: 1rem;
      font-size: 1rem;
    }

    .jobContent .contentBottom {
      justify-content: center;
    }

    .jobContent .contentBottom .quote {
      width: 90%;
    }

    #teddy {
      width: 65%;
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 6rem;
    }

    #teddy img {
      width: 100%;
    }
  }

  @media (min-width: 630px) and (max-width: 950px) {
    .introContent .contentTop {
      gap: 8rem;
    }

    /* .introContent .contentTop {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    } */

    /* .introContent .contentTop .introDeets,
    .introContent .contentTop .socials {
      justify-content: space-between;
      align-items: flex-start;
    } */

    .jobContent .contentBottom .quote {
      text-align: center;
    }
  }
`;

export default HomeWrapper;
