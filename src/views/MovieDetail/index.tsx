import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailRequest } from "../../redux/actions/movie";
import { ErrorComponent } from "../../components/errorComponent";
import {
  Container,
  ContainerDashboard,
  ContainerGender,
  ContainerImg,
  ContainerInfo,
  ContainerLoad,
  SpanDetail,
} from "./index.style";
import { Loader, LoadingComponent } from "../../components/loader";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getMovieDetailRequest(Number(id)));
  }, [id]);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <ContainerDashboard>
      {movie.error ? (
        <ErrorComponent />
      ) : (
        <Container>
          <LoadingComponent loading={dataForDetail.loading} />
          <ContainerImg>
            {isLoading && (
              <ContainerLoad>
                <Loader loading={true} />
              </ContainerLoad>
            )}
            <img
              src={`${CONSTANS.URL_IMAGE}/${dataForDetail?.backdrop_path}`}
              onLoad={handleImageLoad}
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
    </ContainerDashboard>
  );
};
