import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmptyData } from "../../../../components/EmptyData";
import { GridContainerCards } from "../../../../components/layout/containerCards";
import { clearDataDetail } from "../../../../redux/actions/movie";

export const GridCardsMovies = ({ listMovie }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectDetail = (id: number) => {
    dispatch(clearDataDetail());
    navigate(`/${id}`);
  };

  if (listMovie.length == 0) {
    return <EmptyData />;
  }

  return <GridContainerCards data={listMovie} callback={redirectDetail} />;
};
