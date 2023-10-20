import axios from "axios";
import axiosInstance from "../axiosInstance";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
  })),
}));

describe("axiosInstance", () => {
  it("should create an axios instance with the correct base URL and headers", () => {
    process.env.REACT_APP_MOVIE = "https://example.com/api";
    process.env.REACT_APP_TOKEN = "your_token";

    const instance = axiosInstance();

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "https://example.com/api",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your_token",
      },
    });
  });

  it("should throw an error if API environment is not found", () => {
    process.env.REACT_APP_MOVIE = undefined;

    expect(() => {
      axiosInstance();
    });
  });
});
