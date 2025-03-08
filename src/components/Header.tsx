import HeaderWrapper from "../styles/HeaderWrapper.ts";
import logo from "../assets/TeddyTheCreator.png";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="TeddyTheCreator logo" />
          TeddyTheCreator
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
