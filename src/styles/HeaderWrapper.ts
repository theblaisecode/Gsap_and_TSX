import styled from "styled-components";

const HeaderWrapper = styled.header`
  backdrop-filter: blur(1.6rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
  background-color: rgba(23, 23, 25, 0.75);
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  border-bottom: 0.1rem solid var(--primary);
  padding: 3rem 0;

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
