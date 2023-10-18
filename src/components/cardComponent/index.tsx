import { CardContainer, CardImage, CardTitle } from "./index.style";

interface IICardComponent {
  title: string;
  imageUrl: string;
  handleCard?: () => void;
  subtitle?: string;
}

export const CardComponent = ({
  title,
  imageUrl,
  handleCard,
  subtitle,
}: IICardComponent) => {
  return (
    <CardContainer onClick={handleCard}>
      <CardImage src={imageUrl} alt="card" />
      <CardTitle>{title}</CardTitle>
      {subtitle && <span>{subtitle}</span>}
    </CardContainer>
  );
};
