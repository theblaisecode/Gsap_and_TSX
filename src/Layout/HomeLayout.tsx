import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { animateElements } from "../animations/animations.ts";
import BackToTopButton from "../components/BackToTopButton.tsx";

function HomeLayout() {
  const [backToTop, setBackToTop] = useState(false);

  // Back to top button logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global slide up animation
  const location = useLocation();

  useEffect(() => {
    animateElements();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <BackToTopButton backToTop={backToTop} scrollToTop={scrollToTop} />
      <Outlet />
    </>
  );
}

export default HomeLayout;
