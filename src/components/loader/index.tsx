import { Container, LoadingOverlay, LoadingSpinner } from "./index.styled";

interface IILoader {
  loading: boolean;
}

export const Loader = (loading: IILoader) => {
  return <>{loading && <LoadingSpinner />}</>;
};

export const LoadingComponent = ({ loading }: IILoader) => {
  return (
    <>
      {loading && (
        <Container data-testid="loading-container">
          <LoadingOverlay>
            <Loader loading={loading} />
          </LoadingOverlay>
        </Container>
      )}
    </>
  );
};
