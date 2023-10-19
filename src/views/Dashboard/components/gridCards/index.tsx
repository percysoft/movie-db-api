import { useDispatch } from "react-redux";
import { EmptyData } from "../../../../components/EmptyData";
import { CardComponent } from "../../../../components/cardComponent";
import { GridContainerCards } from "../../../../layout/containerCards";
import { useNavigate } from "react-router-dom";
import { clearDataDetail } from "../../../../redux/actions/movie";
interface IItemGridCards {
  id: number;
  title: string;
  poster_path: string;
}

export const GridCardsMovies = ({ listMovie, handleCard }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectDetail = (id: number) => {
    dispatch(clearDataDetail());
    navigate(`/${id}`);
  };

  if (listMovie.length == 0) {
    return <EmptyData />;
  }
  return (
    <GridContainerCards>
      {listMovie &&
        listMovie.map((item: IItemGridCards, key: string) => {
          return (
            <CardComponent
              key={`${item.title}-${key}`}
              title={item.title}
              imageUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              handleCard={() => redirectDetail(item.id)}
            />
          );
        })}
    </GridContainerCards>
  );
};
