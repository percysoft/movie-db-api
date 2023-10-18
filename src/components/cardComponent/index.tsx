import { CardContainer, CardImage, CardTitle } from "./index.style";

export const CardComponent = ({ title, imageUrl }: any) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="card" />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};
