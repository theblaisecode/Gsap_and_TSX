import styled from "styled-components";

const HeaderWrapper = styled.header`
  backdrop-filter: blur(1.6rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
  background-color: var(--darkBg);
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  border-bottom: 0.1rem solid var(--primary);
  padding: 3rem 0;

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
    font-weight: 700;
    transition: 0.4s;
  }

  .logo:hover {
    color: var(--primary);
    transition: all 0.4s;
  }

  .logo img {
    width: 3rem;
    height: 3rem;
  }

  .logo span {
    font-weight: 500;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  nav a {
    color: var(--colorFade);
    font-weight: 700;
    letter-spacing: 0.1rem;
    transition: 0.4s;
  }

  nav a:hover,
  nav a.active {
    color: var(--primary);
    transform: scale(1.2);
    transition: all 0.4s;
  }

  /* -------- Mobile Nav -------- */
  .mobileNav {
    display: none;
    background: none;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    border-bottom: none;

    .container {
      width: 90%;
    }

    .container2 {
      width: 85%;
    }

    .headerContent {
      align-items: flex-start;
    }

    .mobileNav {
      display: block;
      position: absolute;
      top: 2rem;
      right: 5%;
      font-size: 2rem;
      color: var(--textPrimary);
    }
    /*
    .allLink {
      position: fixed;
      right: -100%;
      top: 3rem;
      transition: 0.4s;
    }

    .allLink.active {
      right: 0;
      transition: all 0.4s;
    }

    nav {
      width: 100%;
      height: 100vh;
      flex-direction: column;
      gap: 3.5rem;
      justify-content: flex-start;
      padding: 7rem 0 0 0;
      border-left: 0.1rem solid var(--primary);
    }

    nav a {
      padding: 0 3.85rem;
      color: var(--textLight);
      border-bottom: 0;
      border-right: 0.3rem solid transparent;
    }

    nav a:hover,
    .activeNav {
      border-bottom: 0;
      border-right: 0.3rem solid var(--textLight);
    }

    .pageTitle {
      font-size: 2rem;
      margin-top: 8rem;
      margin-bottom: 3rem;
      text-align: center;
    } */
  }
`;

export default HeaderWrapper;
