import styled from "styled-components";

const AboutWrapper = styled.section`
  .aboutContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  /* Bento Grid */
  .bentoGrid {
    overflow: hidden;
    width: 100%;
    display: grid;
    gap: 1.5rem;
    padding: 1rem;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas:
      "image description description"
      "testimonial testimonial testimonial";
  }

  .item {
    padding: 2rem;
    border: 2px solid #464545;
    border-radius: 5px;
  }

  .bentoGrid .item:nth-child(1) {
    grid-area: image;
    max-width: 300px;
  }

  .bentoGrid .item:nth-child(2) {
    max-width: 600px;
    grid-area: description;
  }

  .bentoGrid .item:nth-child(3) {
    max-width: 901.5px;
    grid-area: testimonial;
  }

  .bentoGrid img {
    width: 100%;
  }

  .slick-list {
    display: flex;
    flex-direction: column;
  }
`;

export default AboutWrapper;
