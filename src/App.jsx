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
import SeasonOctober from "./pages/season/seasonList/SeasonOctober";
import SeasonNovember from "./pages/season/seasonList/SeasonNovember";
import SeasonDecember from "./pages/season/seasonList/SeasonDecember";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const articles = [Articles1, Articles2, Articles3, Articles4, Articles5];
const destinations = [
  DestinationArticles1,
  DestinationArticles2,
  DestinationArticles3,
  DestinationArticles4,
  DestinationArticles5,
  DestinationArticles6,
];

const SeasonsHighlight = [
  { path: "/Summer/February", component: SeasonFebruary },
  { path: "/Summer/March", component: SeasonMarch },
  { path: "/Summer/April", component: SeasonApril },
  { path: "/Summer/May", component: SeasonMay },
  { path: "/Rainy/June", component: SeasonJune },
  { path: "/Rainy/July", component: SeasonJuly },
  { path: "/Rainy/August", component: SeasonAugust },
  { path: "/Rainy/September", component: SeasonSeptember },
  { path: "/Winter/October", component: SeasonOctober },
  { path: "/Winter/November", component: SeasonNovember },
  { path: "/Winter/December", component: SeasonDecember },
];

const SeasonsRoutes = SeasonsHighlight.map(
  ({ path, component: Component }) => ({
    path,
    element: <Component />,
  })
);

const ArticlesRoutes = articles.map((Article, index) => ({
  path: `/Articles/${index + 1}`,
  element: <Article />,
}));

const DestinationsRoutes = destinations.map((Destination, index) => ({
  path: `/destination/${index + 1}`,
  element: <Destination />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ...ArticlesRoutes,
      ...DestinationsRoutes,
      ...SeasonsRoutes,
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
