import { Intro, Job } from "../components/HomePage.tsx";
import HomeWrapper from "../styles/HomeWrapper.ts";
import teddy from "../assets/TeddyTheCreator.png";

function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="homeContent">
          <Intro />
          <img src={teddy} alt="Photo of teddythecreator" />
          <Job />
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
