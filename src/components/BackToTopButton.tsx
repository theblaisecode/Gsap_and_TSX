import { FaArrowUpLong } from "react-icons/fa6";
import styled from "styled-components";
import { type BtnProps, type BackToTopButtonProps } from "../types/types.tsx";

const BtnStyling = styled.button<BtnProps>`
  position: fixed;
  bottom: 12rem;
  right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 2rem;
  background-color: var(--primary);
  color: var(--bg);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.4s ease, pointer-events 0.4s ease;
  z-index: 4;

  @media screen and (max-width: 550px) {
    bottom: 8rem;
    right: 2rem;
    padding: 1rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    bottom: 8rem;
    padding: 1.1rem 1rem;
    font-size: 1.5rem;
  }

  @media (min-width: 551px) and (max-width: 950px) {
    bottom: 12rem;
    padding: 1.2rem;
    font-size: 1.8rem;
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    bottom: 12rem;
    right: 3rem;
    padding: 1.2rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1201px) and (max-width: 1440px) {
    bottom: 12rem;
    right: 2.5rem;
    padding: 1.2rem;
    font-size: 1.8rem;
  }

  @media (min-width: 1441px) and (max-width: 1628px) {
    bottom: 12rem;
  }
`;

function BackToTopButton({ backToTop, scrollToTop }: BackToTopButtonProps) {
  return (
    <BtnStyling onClick={scrollToTop} visible={backToTop}>
      <FaArrowUpLong />
    </BtnStyling>
  );
}

export default BackToTopButton;
