import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header.tsx";
import HomeLayout from "./Layout/HomeLayout.tsx";
import { Home, About, Designs, Contact } from "./pages/index.tsx";
// import Intro from "./components/Intro.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/designs",
        element: <Designs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
