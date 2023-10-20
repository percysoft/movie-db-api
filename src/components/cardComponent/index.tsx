import { useState } from "react";
import {
  CardContainer,
  CardImage,
  CardSubTitle,
  CardTitle,
  ContainerCardImage,
  ContainerInfo,
  ContainerLoad,
} from "./index.style";
import { Loader } from "../loader";

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
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <CardContainer onClick={handleCard} data-testid="card-component">
      <ContainerCardImage>
        {isLoading && (
          <ContainerLoad>
            <Loader loading={true} />
          </ContainerLoad>
        )}
        <CardImage src={imageUrl} alt="card" onLoad={handleImageLoad} />
      </ContainerCardImage>
      <ContainerInfo>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
      </ContainerInfo>
    </CardContainer>
  );
};
