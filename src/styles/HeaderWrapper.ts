import styled from "styled-components";

const HeaderWrapper = styled.header`
  .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(23, 23, 25, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }

  
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
