import axios, { AxiosInstance } from "axios";

const axiosInstance = (): AxiosInstance => {
  let apiEnv: string | undefined = process.env.REACT_APP_MOVIE
    ? process.env.REACT_APP_MOVIE
    : undefined;

  if (apiEnv === undefined || apiEnv === null) {
    throw new Error("API environment not found");
  }

  return axios.create({
    baseURL: `${apiEnv}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });
};

export default axiosInstance;
