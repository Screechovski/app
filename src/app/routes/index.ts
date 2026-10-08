import { createBrowserRouter } from "react-router";

import { MainLayout } from "@app/layout";
import { CoursesPage } from "@pages/courses";
import { MainPage } from "@pages/main";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: "/courses",
        Component: CoursesPage,
      },
    ],
  },
]);
