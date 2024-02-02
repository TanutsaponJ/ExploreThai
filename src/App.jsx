import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Articles1 from "./pages/Inspiring/articles/Articles1";
import Articles2 from "./pages/Inspiring/articles/Articles2";
import Articles3 from "./pages/Inspiring/articles/Articles3";
import Articles4 from "./pages/Inspiring/articles/Articles4";
import Articles5 from "./pages/Inspiring/articles/Articles5";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Articles/1",
        element: <Articles1 />,
      },
      {
        path: "/Articles/2",
        element: <Articles2 />,
      },
      {
        path: "/Articles/3",
        element: <Articles3 />,
      },
      {
        path: "/Articles/4",
        element: <Articles4 />,
      },
      {
        path: "/Articles/5",
        element: <Articles5 />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
