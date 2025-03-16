import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 3rem 0;

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contentTop {
    /* Logo takes about 1/3 of the space */
    flex: 1;
  }

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 200;
    cursor: pointer;
    transition: 0.4s;
  }

  .logo:hover {
    color: var(--primary);
    transition: all 0.4s;
  }

  .logo span {
    font-weight: 500;
  }

  .logo .highlight {
    margin-top: 1rem;
    margin-left: 0.3rem;
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 50%;
    background: var(--primary);
  }

  .navigation {
    /* Navigation takes about 2/3 of the space */
    flex: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .allLink {
    flex: 1;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Evenly space nav items */
    width: 100%; /* Take full width of parent */
    gap: 2rem; /* Minimum gap between items */
  }

  nav ul {
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 1rem;
  }

  nav ul a {
    font-weight: 300;
    letter-spacing: 0.1rem;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: 0.4s;
  }

  nav ul a .active {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: transparent;
    transition: 0.4s;
  }

  nav ul a:hover,
  .activeNav {
    color: var(--primary);
    transition: all 0.4s;
  }

  .activeNav:hover .active,
  nav ul a:hover .active,
  .activeNav .active {
    background: var(--primary);
    transition: all 0.4s;
  }

  div.btn {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .resume {
    background: var(--primary);
    padding: 1rem 3rem;
    border-radius: 0.2rem;
    color: var(--textLight);
    /* font-weight: 00; */
  }

  /* -------- Mobile Nav -------- */
  .mobileNav {
    display: none;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    /* border-bottom: none; */

    .container {
      width: 90%;
    }

    .container2 {
      width: 85%;
    }

    .mobileNav {
      display: block;
      position: absolute;
      /* top: 2rem;*/
      right: 5%;
      font-size: 2rem;
      color: var(--textPrimary);
    }

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
      align-items: flex-start;
      padding: 9rem 4rem 0 0;
      margin-top: -3rem;
      /* border-left: 0.1rem solid var(--primary); */
      background: var(--accent);
    }

    nav ul {
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      gap: 3rem;
    }

    nav ul a {
      padding: 0 3.85rem;
      color: var(--textLight);
      border-bottom: 0;
      border-right: none;
      border-left: 0.3rem solid transparent;
    }

    nav ul a:hover,
    .activeNav {
      border-bottom: 0;
      border-right: none;
      border-left: 0.3rem solid var(--primary);
    }

    nav ul a .active {
      display: none;
    }

    div.btn {
      padding: 0 0 0 4rem;
      align-items: flex-start;
    }

    .resume {
      padding: 1rem 2rem;
      font-size: 1.3rem;
    }

    .pageTitle {
      font-size: 2rem;
      margin-top: 8rem;
      margin-bottom: 3rem;
      text-align: center;
    }
  }
`;

export default HeaderWrapper;
