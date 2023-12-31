import { IItemGridCards } from "../views/TredingTv/components/gridCardsTv";

export const parserDataCardTvShow = (data: IItemGridCards[]) => {
  let newData = [] as any;
  data &&
    data.forEach((item: any) => {
      newData.push({
        title: item.name,
        poster_path: item.poster_path,
      });
    });
  return newData;
};

export const parserDate = (date: any) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
