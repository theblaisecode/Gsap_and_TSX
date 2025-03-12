import HeaderWrapper from "../styles/HeaderWrapper.ts";
import logo from "../assets/TeddyTheCreator.png";
import NavLinks from "./NavLinks.tsx";
import { useEffect, useRef } from "react";
import { headerFade } from "../animations/animations.ts";

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerFade(headerRef.current);
  }, []);

  return (
    <HeaderWrapper id='home' ref={headerRef}>
      <div className="container">
        <div className="headerContent">
          <div className="contentTop">
            <a className="logo">
              <img src={logo} alt="TeddyTheCreator logo" />
              <span>TeddyTheCreator</span>
            </a>
          </div>

          <div className="contentBottom">
            <NavLinks />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
