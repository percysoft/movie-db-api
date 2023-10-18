import { CardComponent } from "../../../../components/cardComponent";
import { GridContainerCards } from "../../../../layout/containerCards";

export interface IItemGridCards {
  title: string;
  poster_path: string;
}

export const GridCardsTvSHows = ({ listMovie }: any) => {
  return (
    <GridContainerCards>
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
    </GridContainerCards>
  );
};
