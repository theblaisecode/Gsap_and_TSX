import styled from "styled-components";

const AboutWrapper = styled.section`
  .aboutContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }

  /* Bento Grid */
  .bentoGrid {
    overflow: hidden;
    width: 100%;
    display: grid;
    gap: 1.5rem;
    /* padding: 1rem; */
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas:
      "image description description"
      "testimonial testimonial testimonial";
  }

  .item {
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

  .bentoGrid .item:nth-child(1) {
    grid-area: image;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bentoGrid .item:nth-child(2) {
    max-width: 500px;
    grid-area: description;
  }

  .bentoGrid .item:nth-child(3) {
    padding: 1.2rem 1.2rem 2.5rem 1.2rem;
    width: calc(300px + 500px + 2rem);
    grid-area: testimonial;
  }

  .bentoGrid img {
    width: 100%;
  }

  /* Description */
  .clients h2,
  .aboutTeddy h2,
  .experience h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  .aboutTeddy .aboutTeddyDescriptions {
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    opacity: 0.7;
  }

  .clients h2 {
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  .clients {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* Slider */
  .slick-slider {
  }

  .slick-list {
  }

  .slick-slide {
    overflow: hidden;
    max-width: 300px;
    padding: 2rem;
    background: none;
    box-shadow: none;
    backdrop-filter: blur(0.2rem);
    -webkit-backdrop-filter: blur(0.2rem);
    border-radius: 1rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.03);
  }

  .slick-track {
    display: flex;
    gap: 1rem;
  }

  .sliderContent,
  .sliderContent .contentTop {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .sliderContent {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }

  .sliderContent .contentTop img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .identity {
    line-height: 1.8rem;
  }

  .identity h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .identity span {
    font-size: 1.3rem;
    color: var(--primary);
    font-weight: 600;
    opacity: 0.7;
  }

  .sliderContent .contentBottom,
  .experience .allJobs .workDid {
    opacity: 0.7;
    font-size: 1.4rem;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  /* Experience */
  .experience .allJobs {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 2rem;
  }

  .experience .allJobs .job {
    font-weight: 400;
    font-size: 1.8rem;
  }

  .experience .allJobs .highlight {
    opacity: 0.7;
  }

  .experience .allJobs .year {
    /* color: var(--primary); */
    font-weight: 500;
    opacity: 0.8;
    font-weight: 300;
    font-size: 1.3rem;
  }

  .experience .allJobs .workDid {
    margin: 0.6rem 0 0 0;
    font-weight: 300;
  }
`;

export default AboutWrapper;
