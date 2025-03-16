import { Link } from "react-router-dom";
import { TiMinus } from "react-icons/ti";
import { CgQuote } from "react-icons/cg";
import { socials } from "../data.ts";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="introContent">
        <div className="contentTop">
          <div className="introDeets">
            <div className="greetings">
              <span>
                <span className="bold"> Hey there</span>, I am
              </span>
            </div>

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
          </div>

          <div className="socials">
            <div className="title">
              <span>my socials</span> <TiMinus />
            </div>

            <div className="socialLinks">
              {socials.map((item) => {
                const { id, icon: Icon, href, ariaLabel, title } = item;

                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    aria-label={ariaLabel}>
                    <Icon />
                    <div className="platform">{title}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contentBottom">
          <div className="designer">
            <CgQuote />
            DESI
            <br />
            GNER
            <CgQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Job = () => {
  return <div>Job</div>;
};
