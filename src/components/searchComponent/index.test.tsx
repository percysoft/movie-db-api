import { render, screen, fireEvent } from "@testing-library/react";
import { SearchComponent } from "./index";

test("renders search component", () => {
  const mockHandleButton = jest.fn();
  const mockGetValue = jest.fn();

  render(
    <SearchComponent
      placeholder="Buscar"
      textButton="Buscar"
      handleButton={mockHandleButton}
      getValue={mockGetValue}
    />
  );

  const input = screen.getByPlaceholderText("Buscar");
  const button = screen.getByText("Buscar");

  fireEvent.change(input, { target: { value: "ironman" } });
  fireEvent.click(button);

  expect(mockGetValue).toHaveBeenCalledWith("ironman");
  expect(mockHandleButton).toHaveBeenCalled();
});
