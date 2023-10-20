import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  ButtonOption,
  ContainerButonOption,
  ContainerHeader,
  LogoImg,
} from "./index.style";
import { ROUTES } from "../../constant/routes";
import { CONSTANS } from "../../constant/constans";

export const LayoutComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div>
      <ContainerHeader>
        <LogoImg src={CONSTANS.URL_ICON} />
        <ContainerButonOption>
          <ButtonOption
            active={isActive(ROUTES.MOVIES.url)}
            onClick={() => {
              navigate(ROUTES.MOVIES.url);
            }}
          >
            {ROUTES.MOVIES.name}
          </ButtonOption>
          <ButtonOption
            active={isActive(ROUTES.TRENDING_TV.url)}
            onClick={() => {
              navigate(ROUTES.TRENDING_TV.url);
            }}
          >
            {ROUTES.TRENDING_TV.name}
          </ButtonOption>
        </ContainerButonOption>
      </ContainerHeader>
      <Outlet />
    </div>
  );
};
