import { renderHook, act } from "@testing-library/react";
import { useInfiniteScroll } from "./useScrollInfinite";

describe("useInfiniteScroll", () => {
  it("should call the callback when the user has scrolled to the bottom of the page", () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useInfiniteScroll(callback));

    const scrollEvent = new Event("scroll");
    Object.defineProperty(window, "innerHeight", { value: 800 });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 1000,
    });
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 200,
    });

    act(() => {
      window.dispatchEvent(scrollEvent); // Dispara el evento de desplazamiento
    });

    expect(callback).toHaveBeenCalled();
  });
});
