import bentoImg from "../assets/TeddyTheCreator.png";
import Testimonial from "./Testimonial.tsx";

export const BentoGrid = () => {
  return (
    <div className="bentoGrid">
      <div className="item">
        <img src={bentoImg} alt="TeddyTheCreator" />
      </div>

      <div className="item aboutTeddy">
        <h2>
          <span className="highlight">About</span> Teddy
        </h2>

        <div className="aboutTeddyDescriptions">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit
            nemo provident ut corrupti quo recusandae quasi voluptas saepe
            totam.
          </p>
        </div>
      </div>

      <div className="item clients">
        <h2>What My Clients Say</h2>
        <Testimonial />
      </div>
    </div>
  );
};

export const Experience = () => {
  return <h2>Experience</h2>;
};
