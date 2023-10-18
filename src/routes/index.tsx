import { LayoutComponent } from "../views/layout";
import { DashboardComponent } from "../views/Dashboard";
import { DashboardDetailComponent } from "../views/DashboardDetail";
import { TrendingTvComponent } from "../views/TredingTv";

export const routes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "", element: <DashboardComponent /> },
      { path: "/trending-tv", element: <TrendingTvComponent /> },
      { path: "/:id", element: <DashboardDetailComponent /> },
    ],
  },
];
