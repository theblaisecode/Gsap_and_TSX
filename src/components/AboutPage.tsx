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
            Teddy is a passionate UX/UI & Product Designer crafting seamless,
            user-friendly experiences. With a focus on usability, aesthetics,
            and functionality, he transforms ideas into intuitive digital
            products. His expertise in wireframing, prototyping, and user
            research ensures designs that not only look great but work
            effortlessly. Always exploring new trends and tools, Teddy thrives
            on collaboration to create impactful, user-centered solutions. Let’s
            build something great together!
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

      <div className="allJobs">
        {experience.map((item: ExperienceType) => {
          const { id, jobTitle, company, year, workDid }: ExperienceType = item;

          return (
            <div key={id}>
              <>
                <h3 className="job">
                  {jobTitle} <span className="highlight">  — </span>{company}
                </h3>
                <span className="year">{year}</span>
              </>

              <div className="workDid">{workDid}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
