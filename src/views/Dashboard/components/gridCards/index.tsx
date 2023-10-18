import { CardComponent } from "../../../../components/cardComponent";
import { CardGrid } from "./index.style";

interface IItemGridCards {
  title: string;
  poster_path: string;
}

export const GridCards = ({ listMovie }: any) => {
  return (
    <CardGrid>
      {listMovie &&
        listMovie.map((item: IItemGridCards, key: string) => {
          return (
            <CardComponent
              key={`${item.title}-${key}`}
              title={item.title}
              imageUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
          );
        })}
    </CardGrid>
  );
};
