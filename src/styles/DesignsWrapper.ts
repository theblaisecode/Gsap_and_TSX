import styled from "styled-components";

const DesignsWrapper = styled.section`
  .designContent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6rem 0 0 0;
  }

  .designContent .contentTop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .designContent .designBox {
    display: flex;
    background: var(--accent);
    padding: 1rem;
    border-radius: 0.5rem;
    justify-content: space-between;
    gap: 2rem;
    transition: 0.4s;
  }

  .designContent .designBox:last-child {
    background: none;
    justify-content: center;
    align-items: center;
  }

  .designContent .items:hover {
    transform: scale(1.03);
  }

  .designContent .designBox a.more {
    background: var(--primary);
    padding: 0.5rem 2rem;
    border-radius: 0.2rem;
    color: var(--textLight);
    transition: 0.4s;
  }

  .designContent .designBox a.more:hover {
    background: var(--primaryAccent);
    transition: all 0.4s;
  }

  .designContent .designBox .image {
    width: 100%;
    aspect-ratio: 4.5/4; /* Forces 4:3 aspect ratio */
    /* overflow: hidden; */
  }

  .designContent .designBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .designContent .designBox .designTitle {
    font-size: 1.5rem;
  }

  .designContent .designBox .info {
    opacity: 0.7;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    overflow-y: auto;

    .designContent {
      margin: 4rem 0 6rem 0;
    }

    .designContent .contentTop {
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }

    .designContent .designBox {
      flex-direction: column;
      gap: 2rem;
    }

    .designContent .designBox:last-child {
      padding: 3rem 0;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .designContent .contentTop {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    .designContent {
      margin: 4rem 0 6rem 0;
    }

    .designContent .contentTop {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
`;

export default DesignsWrapper;
