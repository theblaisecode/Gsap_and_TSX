import { BentoGrid, Experience } from "../components/AboutPage.tsx";
import AboutWrapper from "../styles/AboutWrapper.ts";

function About() {
  return (
    <AboutWrapper>
      <div className="container">
        <div className="aboutContent">
          <div className="top">
            <BentoGrid />
          </div>

          <div className="bottom">
            <Experience />
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
