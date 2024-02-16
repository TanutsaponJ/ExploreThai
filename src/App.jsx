import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import {
  Articles1,
  Articles2,
  Articles3,
  Articles4,
  Articles5,
  Plan1,
  Plan2,
  Plan3,
  Plan4,
  DestinationArticles1,
  DestinationArticles2,
  DestinationArticles3,
  DestinationArticles4,
  DestinationArticles5,
  DestinationArticles6,
  SeasonFebruary,
  SeasonMarch,
  SeasonApril,
  SeasonMay,
  SeasonJune,
  SeasonJuly,
  SeasonAugust,
  SeasonSeptember,
  SeasonOctober,
  SeasonNovember,
  SeasonDecember,
  SeasonJanuary,
} from "./index";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const Plans = [Plan1, Plan2, Plan3, Plan4];

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
  { path: "/Winter/January", component: SeasonJanuary },
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

const PlansRoutes = Plans.map((Plan, index) => ({
  path: `/planTrip/${index + 1}`,
  element: <Plan />,
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
      ...PlansRoutes,
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
