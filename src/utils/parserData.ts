import { IItemGridCards } from "../views/TredingTv/components/gridCards";

export const parserDataCardTvShow = (data: IItemGridCards[]) => {
  let newData = [] as any;
  data &&
    data.map((item: any) => {
      newData.push({
        title: item.name,
        poster_path: item.poster_path,
      });
    });
  return newData;
};

export const parserDate = (date: any) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // El mes en JavaScript es de 0 a 11
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
