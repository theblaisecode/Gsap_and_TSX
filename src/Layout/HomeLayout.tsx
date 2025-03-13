import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeLayout;
