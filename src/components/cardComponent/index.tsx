import {
  CardContainer,
  CardImage,
  CardSubTitle,
  CardTitle,
  ContainerCardImage,
  ContainerInfo,
} from "./index.style";

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
      <ContainerCardImage>
        <CardImage src={imageUrl} alt="card" />
      </ContainerCardImage>
      <ContainerInfo>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
      </ContainerInfo>
    </CardContainer>
  );
};
