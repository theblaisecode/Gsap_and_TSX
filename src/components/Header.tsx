import { useEffect, useRef, useState } from "react";
import HeaderWrapper from "../styles/HeaderWrapper.ts";
import NavLinks from "./NavLinks.tsx";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { headerFade } from "../animations/animations.ts";
import { Link } from "react-router-dom";

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    headerFade(headerRef.current);
  }, []);

  function toggleMobileMenu() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  return (
    <HeaderWrapper id="home" ref={headerRef}>
      <div className="container">
        <div className="headerContent">
          <div className="contentTop">
            <Link to="/" className="logo">
              <span>teddy</span>thecreator<span className="highlight"></span>
            </Link>
          </div>

          <div className="navigation">
            <div className={isMobile ? "allLink active" : "allLink"}>
              <NavLinks />
            </div>
          </div>

          {/* Mobile Nav */}
          <button className="btn mobileNav" onClick={toggleMobileMenu}>
            {isMobile ? (
              <FaXmark
                className={isMobile ? "mobileActive active" : "mobileActive"}
              />
            ) : (
              <FaBarsStaggered />
            )}
          </button>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
