import { createBrowserRouter } from "react-router";
import { MainLayout, ProgressLayout } from "@app/layout";
import { ROUTES } from "@shared/routes";
import { CoursesPage } from "@pages/courses";
import { LeaderboardPage } from "@pages/leaderboard";
import { MainPage } from "@pages/main";
import { ProfilePage } from "@pages/profile";
import { ProgressPage } from "@pages/progress";
import { RoadmapPage } from "@pages/roadmap";
import { SubscriptionPage } from "@pages/subscription";

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: ROUTES.courses,
        Component: CoursesPage,
      },
      {
        path: ROUTES.progress,
        Component: ProgressLayout,
        children: [
          {
            index: true,
            Component: ProgressPage,
          },
          {
            path: "leaderboard",
            Component: LeaderboardPage,
          },
          {
            path: "roadmap",
            Component: RoadmapPage,
          },
        ],
      },
      {
        path: ROUTES.profile,
        Component: ProfilePage,
      },
      {
        path: ROUTES.subscription,
        Component: SubscriptionPage,
      },
    ],
  },
]);
