import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LoadingScreen } from "src/components/loading-screen";

import { MainLayout } from "../layouts/main-layout";

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
