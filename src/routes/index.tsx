import { LayoutComponent } from "../views/layout";
import { DashboardComponent } from "../views/Movies";
import { DashboardDetailComponent } from "../views/MovieDetail";
import { TrendingTvComponent } from "../views/TredingTv";
import { ROUTES } from "../constant/routes";

export const routes = [
  {
    path: ROUTES.HOME.url,
    element: <LayoutComponent />,
    children: [
      { path: ROUTES.MOVIES.url, element: <DashboardComponent /> },
      { path: ROUTES.TRENDING_TV.url, element: <TrendingTvComponent /> },
      { path: "/:id", element: <DashboardDetailComponent /> },
    ],
  },
];
