import { render, screen } from "@testing-library/react";
import { GridCardsTvSHows } from "./index";

describe("GridCardsTvSHows", () => {
  it("renders EmptyData when listMovie is empty", () => {
    const listMovie = [] as any;
    render(<GridCardsTvSHows listMovie={listMovie} />);

    expect(screen.getByText("No se encontraron elementos")).toBeInTheDocument();
  });

  it("renders CardComponents when listMovie has data", () => {
    const listMovie = [
      { title: "Movie 1", poster_path: "path1" },
      { title: "Movie 2", poster_path: "path2" },
    ];
    render(<GridCardsTvSHows listMovie={listMovie} />);

    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
    expect(images[0]).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/path1`
    );
    expect(images[1]).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/path2`
    );
  });
});
