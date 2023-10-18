import { Container } from "./index.style";

interface IErrorComponent {
  label?: string;
}

export const ErrorComponent = ({
  label = "Hubo un error al cargar los datos.",
}: IErrorComponent) => {
  return <Container>{label}</Container>;
};
