import { CONSTANS } from "../../../constant/constans";
import { CardComponent } from "../../cardComponent";
import { CardGrid } from "./index.style";

export const GridContainerCards = ({ data, callback }: any) => {
  return (
    <CardGrid>
      {data.map((item: any, key: string) => {
        return (
          <CardComponent
            key={`${item.title}-${key}`}
            title={item.title}
            imageUrl={`${CONSTANS.URL_IMAGE}/${item.poster_path}`}
            handleCard={() => callback && callback(item.id)}
          />
        );
      })}
    </CardGrid>
  );
};
