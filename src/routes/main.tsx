import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainLayout } from "src/layouts";
import { LoadingScreen } from "src/components/loading-screen";

// ----------------------------------------------------------------------
const GithubExplorer = lazy(
  () => import("../pages/github-explorer/github-explorer")
);
// ----------------------------------------------------------------------

const MainContent = (
  <MainLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </MainLayout>
);

export const mainRoutes = [
  {
    path: "/",
    element: MainContent,
    children: [
      {
        element: <GithubExplorer />,
        index: true,
      },
    ],
  },
];
