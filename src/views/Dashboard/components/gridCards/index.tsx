import { CardComponent } from "../../../../components/cardComponent";
import { GridContainerCards } from "../../../../layout/containerCards";
import { useNavigate } from "react-router-dom"; 
interface IItemGridCards {
  id: number;
  title: string;
  poster_path: string;
}

export const GridCardsMovies = ({ listMovie, handleCard }: any) => {
  const navigate = useNavigate();

  const redirectDetail = (id: number) => {
    navigate(`/${id}`);
  };

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