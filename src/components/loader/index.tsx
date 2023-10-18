import { Container, LoadingOverlay, LoadingSpinner } from "./index.styled";

interface IILoader {
  loading: boolean;
}
export const LoadingComponent = ({ loading }: IILoader) => {
  return (
    <>
      {loading && (
        <Container data-testid="loading-container">
          <LoadingOverlay>
            <LoadingSpinner />
          </LoadingOverlay>
        </Container>
      )}
    </>
  );
};
