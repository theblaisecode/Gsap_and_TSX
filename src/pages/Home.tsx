import { Intro, Job } from "../components/HomePage.tsx";
import HomeWrapper from "../styles/HomeWrapper.ts";
import teddy from "../assets/TeddyTheCreator.png";

function Home() {
  return (
    <HomeWrapper>
      <Intro />
      <img src={teddy} alt="Photo of teddythecreator" />
      <Job />
    </HomeWrapper>
  );
}

export default Home;
