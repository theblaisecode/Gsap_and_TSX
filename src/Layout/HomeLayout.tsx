import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { animateElements } from "../animations/animations.ts";

function HomeLayout() {
  const location = useLocation();

  useEffect(() => {
    animateElements();
  }, [location.pathname]);
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeLayout;
