import HeaderWrapper from "../styles/HeaderWrapper.ts";
import logo from "../assets/TeddyTheCreator.png";
import NavLinks from "./NavLinks.tsx";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="headerContent">
          <div className="contentTop">
            <div className="logo">
              <img src={logo} alt="TeddyTheCreator logo" />
              TeddyTheCreator
            </div>
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
