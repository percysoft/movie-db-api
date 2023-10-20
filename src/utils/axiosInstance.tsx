import axios from "axios";

const createAxiosInstance = () => {
  const apiEnv = process.env.REACT_APP_MOVIE;

  if (!apiEnv) {
    throw new Error("API environment not found");
  }

  const instance = axios.create({
    baseURL: apiEnv,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  return instance;
};

export default createAxiosInstance;
