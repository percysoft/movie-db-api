import { EmptyData } from "../../../../components/EmptyData";
import { CardComponent } from "../../../../components/cardComponent";
import { CONSTANS } from "../../../../constant/constans";
import { GridContainerCards } from "../../../../layout/containerCards";

export interface IItemGridCards {
  title: string;
  poster_path: string;
}

export const GridCardsTvSHows = ({ listMovie }: any) => {
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
              imageUrl={`${CONSTANS.URL_IMAGE}/${item.poster_path}`}
            />
          );
        })}
    </GridContainerCards>
  );
};
