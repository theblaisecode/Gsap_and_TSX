import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 2rem;
  background: yellow;

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 3rem;
    height: 3rem;
  }
`;

export default HeaderWrapper;
