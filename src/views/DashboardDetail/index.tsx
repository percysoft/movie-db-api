import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailRequest } from "../../redux/actions/movie";
import { ErrorComponent } from "../../components/errorComponent";

export const DashboardDetailComponent = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state: any) => state);
  const { dataForDetail } = movie;

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getMovieDetailRequest(Number(id)));
  }, [id]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {movie.error ? (
        <ErrorComponent />
      ) : (
        <>
          <h2>User Details</h2>
          <p>User ID: {id}</p>
          <span>{dataForDetail.original_title}</span>
          <span>{dataForDetail.overview}</span>
          <span>{dataForDetail.release_date}</span>
          <div>
            <ul>
              {dataForDetail &&
                dataForDetail.genres.map((item: any) => {
                  return <li>{item.name}</li>;
                })}
            </ul>
          </div>
          <img
            style={{
              width: "440px",
              height: "300px",
            }}
            src={`https://image.tmdb.org/t/p/original/${dataForDetail.backdrop_path}`}
          />
        </>
      )}
    </div>
  );
};
