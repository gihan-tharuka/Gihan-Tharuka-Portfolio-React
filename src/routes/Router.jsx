import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const ProjectDetail = lazy(() => import("../components/projects/ProjectDetail"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const About = lazy(() => import("../pages/About"));
const Main = lazy(() => import("../layouts/Main"));

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/projects/:slug",
          element: <ProjectDetail />,
        },
      ],
    },
  ],
  { basename: "/" }
);
