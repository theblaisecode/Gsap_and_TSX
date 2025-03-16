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
  return (
    <div className="job">
      <div className="jobContent">
        <div className="contentTop">
          <div className="details">
            <div className="jobTitle">
              <div className="heading">UX/UI & Product</div>
              <h1>Designer</h1>
            </div>

            <div className="jobDescription">
              I see digital products as living systems—where every element,
              interaction, and detail work together to shape the user
              experience. With over two years of experience in product design, I
              don&apos;t just create interfaces—I design intuitive, functional,
              and scalable solutions that bring ideas to life in a seamless,
              user-friendly way.
            </div>
          </div>

          <div className="tags">
            <ul>
              <li>UI &amp; Visual Design</li>
              <li>UX Research</li>
              <li>Brand Identity Design</li>
            </ul>
          </div>
        </div>

        <div className="contentBottom">
          <div className="quote">
            "A man that thinks all the time has nothing to think of except
            thoughts"
          </div>
        </div>
      </div>
    </div>
  );
};
