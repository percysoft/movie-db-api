import { render, screen, fireEvent } from "@testing-library/react";
import { GridContainerCards } from "./index";
import { CONSTANS } from "../../../constant/constans";

describe("GridContainerCards", () => {
  const mockData = [
    {
      id: 1,
      title: "Example Title 1",
      poster_path: "example_path_1.jpg",
    },
    {
      id: 2,
      title: "Example Title 2",
      poster_path: "example_path_2.jpg",
    },
  ];

  it("renders CardComponent for each data item", () => {
    const mockCallback = jest.fn();
    render(<GridContainerCards data={mockData} callback={mockCallback} />);

    expect(screen.getAllByTestId("card-component")).toHaveLength(
      mockData.length
    );
  });

 

  it("calls the callback function with the correct argument", () => {
    const mockCallback = jest.fn();
    render(<GridContainerCards data={mockData} callback={mockCallback} />);

    const firstCard = screen.getAllByTestId("card-component")[0];
    fireEvent.click(firstCard);

    expect(mockCallback).toHaveBeenCalledWith(mockData[0].id);
  });
});
