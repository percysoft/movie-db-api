import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadingComponent } from "../../components/loader";
import { SearchComponent } from "../../components/searchComponent";
import { GridCardsMovies } from "./components/gridCardsMovie";
import { useInfiniteScroll } from "../../hooks/useScrollInfinite";
import { Container } from "./index.style";
import { useFetchMovie } from "./components/hook/useMovie";
import { clearDataQuery } from "../../redux/actions/movie";
import { ErrorComponent } from "../../components/errorComponent";

export const DashboardComponent = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state: any) => state);
  const [valueInputMovie, setValueInputMovie] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useFetchMovie(dispatch, page, valueInputMovie, setValueInputMovie);
  useInfiniteScroll(() => {
    if (!movie.loading && !movie.error) {
      setPage((prevState) => prevState + 1);
    }
  });

  const getValueInput = (e: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    const delayDebounceFn = setTimeout(() => {
      dispatch(clearDataQuery());
      setPage(1);
      setValueInputMovie(e);
    }, 500);

    setTimer(delayDebounceFn);

    return () => clearTimeout(delayDebounceFn);
  };

  useEffect(() => {
    if (valueInputMovie.length == 0) {
      setData(movie.data);
    } else {
      setData(movie.dataForQuery);
    }
  }, [movie, valueInputMovie]);

  return (
    <Container>
      {movie.error ? (
        <ErrorComponent />
      ) : (
        <>
          <LoadingComponent loading={movie.loading} />
          <SearchComponent getValue={getValueInput} handleButton={() => {}} />
          <GridCardsMovies listMovie={data} handleCard />
        </>
      )}
    </Container>
  );
};
