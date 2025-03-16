import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="introContent">
        <div className="contentTop">
          <div className="greetings">Hey there, I am</div>

          <div className="name">
            Teddy
            <div className="alias">
              <div className="divider"></div>
              TheCreator
            </div>
          </div>

          <Link to="/contact" className="btn2 contact">
            contact me
          </Link>

          <div className="socials">
            <div className="title">
              my socials <div className="dash"></div>
            </div>

            <div className="socialLinks">
              <a
                href="https://dribbble.com/Teddy_016"
                target="_blank"
                aria-label="Link to TeddyTheCreator's Dribbble page">
                <div className="span">Dribbble</div>
              </a>
              <a
                href="https://www.behance.net/nwachukcharles"
                target="_blank"
                aria-label="Link to TeddyTheCreator's Behance page">
                <div className="span">Behance</div>
              </a>
              <a
                href="https://linkedin.com/in/teddy016"
                target="_blank"
                aria-label="Link to TeddyTheCreator's LinkedIN page">
                <div className="span">LinkedIN</div>
              </a>
            </div>
          </div>
        </div>

        <div className="contentBottom">
          <div className="designer">
            DESI
            <br />
            GNER
          </div>
        </div>
      </div>
    </div>
  );
};

export const Job = () => {
  return <div>Job</div>;
};
