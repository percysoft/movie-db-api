import { Container, LoadingOverlay, LoadingSpinner } from "./index.styled";

interface IILoader {
  loading: boolean;
}
export const LoadingComponent = ({ loading }: IILoader) => {
  return (
    <>
      {loading && (
        <Container>
          <LoadingOverlay>
            <LoadingSpinner />
          </LoadingOverlay>
        </Container>
      )}
    </>
  );
};
