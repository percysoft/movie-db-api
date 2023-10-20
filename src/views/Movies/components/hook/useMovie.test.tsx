import { renderHook, act } from "@testing-library/react";
import { useFetchMovie } from "./useMovie";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("useFetchMovie", () => {
  it("should dispatch the correct actions", () => {
    const page = 1;
    const valueInputMovie = "someValue";
    const setValueInputMovie = jest.fn();
    const mockDispatch = jest.fn();

    // @ts-ignore
    useDispatch.mockImplementation(() => mockDispatch);
    setValueInputMovie("someValue");
    const { result } = renderHook(() =>
      useFetchMovie(mockDispatch, page, valueInputMovie, setValueInputMovie)
    );

    act(() => {
      result.current;
    });

    expect(setValueInputMovie).toHaveBeenCalledWith(valueInputMovie);
  });
});
