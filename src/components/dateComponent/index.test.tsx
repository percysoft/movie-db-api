import { render, fireEvent } from "@testing-library/react";
import { DateComponent } from "./index";

describe("DateComponent", () => {
  test("renders with label", () => {
    const mockGetValue = jest.fn();
    const { getByText } = render(
      <DateComponent label="Seleccionar fecha" getValue={mockGetValue} />
    );
    expect(getByText("Seleccionar fecha")).toBeInTheDocument();
  });

  test("handles date change", () => {
    const mockGetValue = jest.fn();
    const { getByPlaceholderText } = render(
      <DateComponent label="Seleccionar fecha" getValue={mockGetValue} />
    );

    const dateInput = getByPlaceholderText("Fecha");
    fireEvent.change(dateInput, { target: { value: "2023-01-01" } });

    expect(mockGetValue).toHaveBeenCalledWith(new Date("2023-01-01"));
  });
});
