import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailRequest } from "../../redux/actions/movie";
import { ErrorComponent } from "../../components/errorComponent";
import {
  Container,
  ContainerGender,
  ContainerImg,
  ContainerInfo,
  SpanDetail,
} from "./index.style";
import { LoadingComponent } from "../../components/loader";
import { CONSTANS } from "../../constant/constans";

interface IOption {
  name: string;
}
export const DashboardDetailComponent = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state: any) => state);
  const { dataForDetail, loading } = movie;

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
        <Container>
          <LoadingComponent loading={dataForDetail.loading} />
          <ContainerImg>
            <img
              src={`${CONSTANS.URL_IMAGE}/${dataForDetail?.backdrop_path}`}
            />
          </ContainerImg>

          <ContainerInfo>
            <SpanDetail>{dataForDetail?.original_title}</SpanDetail>
            <SpanDetail>{dataForDetail?.overview}</SpanDetail>
            <SpanDetail>{dataForDetail?.release_date}</SpanDetail>
            <ContainerGender>
              <SpanDetail>Generos</SpanDetail>
              <div>
                {dataForDetail &&
                  dataForDetail.genres &&
                  dataForDetail?.genres.map((item: IOption, key: string) => {
                    return (
                      <span key={`${item.name}-${key}`}>-{item.name}</span>
                    );
                  })}
              </div>
            </ContainerGender>
          </ContainerInfo>
        </Container>
      )}
    </div>
  );
};
