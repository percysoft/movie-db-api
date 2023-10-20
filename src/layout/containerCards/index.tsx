import { CardGrid } from "./index.style";

interface IItemGridCards {
  children: React.ReactElement;
}

export const GridContainerCards = ({ children }: IItemGridCards) => {
  return <CardGrid>{children}</CardGrid>;
};
