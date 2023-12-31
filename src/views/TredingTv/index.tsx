import { useEffect, useState } from "react";
import { DateComponent } from "../../components/dateComponent";
import { GridCardsTvSHows } from "./components/gridCardsTv";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDataQuery,
  getTvShowForIdRequest,
  getTvShowsRequest,
} from "../../redux/actions/tvShows";
import { parserDataCardTvShow, parserDate } from "../../utils/parserData";
import { useInfiniteScroll } from "../../hooks/useScrollInfinite";
import { LoadingComponent } from "../../components/loader";
import { ErrorComponent } from "../../components/errorComponent";

export const TrendingTvComponent = () => {
  const dispatch = useDispatch();
  const { tvShows } = useSelector((state: any) => state);

  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getTvShowsRequest(page));
  }, [page]);

  useInfiniteScroll(() => {
    if (!tvShows.loading && !tvShows.error) {
      setPage((prevState) => prevState + 1);
    }
  });

  useEffect(() => {
    if (date != "") {
      dispatch(getTvShowForIdRequest(parserDate(date), page));
    }
  }, [date]);

  useEffect(() => {
    if (date.length == 0) {
      setData(tvShows.data);
    } else {
      setData(tvShows.dataForQuery);
    }
  }, [tvShows, date]);

  return (
    <div>
      {tvShows.error ? (
        <ErrorComponent />
      ) : (
        <>
          <LoadingComponent loading={tvShows.loading} />
          <span>
            <DateComponent
              getValue={(e: any) => {
                dispatch(clearDataQuery());
                setPage(1);
                setDate(e);
              }}
            />
          </span>
          <GridCardsTvSHows listTv={parserDataCardTvShow(data)} />
        </>
      )}
    </div>
  );
};
