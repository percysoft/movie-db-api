import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const LayoutComponent = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Current Path: {location.pathname}</h2>
      <div>
        <button>Movies</button>
        <button>Tv Shows</button>
      </div>
      <Outlet />
    </div>
  );
};
