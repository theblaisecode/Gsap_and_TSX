import bentoImg from "../assets/TeddyTheCreator.png";
import { experience } from "../data.ts";
import { type ExperienceType } from "../types/types.tsx";
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
  return (
    <div className="experience">
      <h2 className="heading">Experience</h2>

      {experience.map((item: ExperienceType) => {
        const { id, jobTitle, company, year, workDid }: ExperienceType = item;

        return (
          <div key={id}>
            <>
              <h3>
                {jobTitle} — {company}
              </h3>
              <span>{year}</span>
            </>

            <>{workDid}</>
          </div>
        );
      })}
    </div>
  );
};
