import { Intro, Job } from "../components/HomePage.tsx";
import HomeWrapper from "../styles/HomeWrapper.ts";
import teddy from "../assets/TeddyTheCreator.png";

function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="homeContent">
          <div className="top">
            <Intro />
          </div>

          <div className="bottom">
            <div id="teddy" className="animate">
              <img src={teddy} alt="Photo of teddythecreator" />
            </div>

            <Job />
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
