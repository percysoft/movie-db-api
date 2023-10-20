import { EmptyData } from "../../../../components/EmptyData";
import { GridContainerCards } from "../../../../components/layout/containerCards";

export interface IItemGridCards {
  title: string;
  poster_path: string;
}

export const GridCardsTvSHows = ({ listTv }: any) => {
  if (listTv.length == 0) {
    return <EmptyData />;
  }

  return <GridContainerCards data={listTv} />;
};
