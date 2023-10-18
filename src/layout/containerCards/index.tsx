import { CardGrid } from "./index.style";

interface IItemGridCards {
  children: any;
}

export const GridContainerCards = ({ children }: IItemGridCards) => {
  return <CardGrid>{children}</CardGrid>;
};
