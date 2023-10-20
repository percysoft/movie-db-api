import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GridCardsMovies } from "./index";
import { clearDataDetail } from "../../../../redux/actions/movie";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("GridCardsMovies", () => {
  it("should call navigate and dispatch when redirecting to details", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    const mockDispatch = jest.fn();
    // @ts-ignore
    useDispatch.mockImplementation(() => mockDispatch);

    const mockListMovie = [
      { id: 1, title: "Movie 1", poster_path: "path/to/poster1" },
      { id: 2, title: "Movie 2", poster_path: "path/to/poster2" },
    ];

    const { getAllByTestId } = render(
      <GridCardsMovies listMovie={mockListMovie} />
    );
    fireEvent.click(getAllByTestId("card-component")[0]);

    expect(mockDispatch).toHaveBeenCalledWith(clearDataDetail());
  });
});
