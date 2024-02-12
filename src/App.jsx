import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Articles1 from "./pages/Inspiring/articles/Articles1";
import Articles2 from "./pages/Inspiring/articles/Articles2";
import Articles3 from "./pages/Inspiring/articles/Articles3";
import Articles4 from "./pages/Inspiring/articles/Articles4";
import Articles5 from "./pages/Inspiring/articles/Articles5";
import DestinationArticles1 from "./pages/destination/DestinationArticles/DestinationArticles1";
import DestinationArticles2 from "./pages/destination/DestinationArticles/DestinationArticles2";
import DestinationArticles3 from "./pages/destination/DestinationArticles/DestinationArticles3";
import DestinationArticles4 from "./pages/destination/DestinationArticles/DestinationArticles4";
import DestinationArticles5 from "./pages/destination/DestinationArticles/DestinationArticles5";
import DestinationArticles6 from "./pages/destination/DestinationArticles/DestinationArticles6";
import SeasonFebruary from "./pages/season/seasonList/SeasonFebruary";
import SeasonMarch from "./pages/season/seasonList/SeasonMarch";
import SeasonApril from "./pages/season/seasonList/SeasonApril";
import SeasonMay from "./pages/season/seasonList/SeasonMay";
import SeasonJune from "./pages/season/seasonList/SeasonJune";
import SeasonJuly from "./pages/season/seasonList/SeasonJuly";
import SeasonAugust from "./pages/season/seasonList/SeasonAugust";
import SeasonSeptember from "./pages/season/seasonList/SeasonSeptember";

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
      {
        path: "/Destination/1",
        element: <DestinationArticles1 />,
      },
      {
        path: "/Destination/2",
        element: <DestinationArticles2 />,
      },
      {
        path: "/Destination/3",
        element: <DestinationArticles3 />,
      },
      {
        path: "/Destination/4",
        element: <DestinationArticles4 />,
      },
      {
        path: "/Destination/5",
        element: <DestinationArticles5 />,
      },
      {
        path: "/Destination/6",
        element: <DestinationArticles6 />,
      },
      {
        path: "/Summer/February",
        element: <SeasonFebruary />,
      },
      {
        path: "/Summer/March",
        element: <SeasonMarch />,
      },
      {
        path: "/Summer/April",
        element: <SeasonApril />,
      },
      {
        path: "/Summer/May",
        element: <SeasonMay />,
      },
      {
        path: "/Rainy/June",
        element: <SeasonJune />,
      },
      {
        path: "/Rainy/July",
        element: <SeasonJuly />,
      },
      {
        path: "/Rainy/August",
        element: <SeasonAugust />,
      },
      {
        path: "/Rainy/September",
        element: <SeasonSeptember />,
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
