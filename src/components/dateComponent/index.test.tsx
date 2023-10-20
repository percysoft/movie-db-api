import { render, fireEvent } from "@testing-library/react";
import { DateComponent } from "./index";

describe("DateComponent", () => {
  it("should render the component", () => {
    const mockGetValue = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <DateComponent getValue={mockGetValue} />
    );
    const labelElement = getByText("Seleccionar fecha");
    const placeholderElement = getByPlaceholderText("YYYY-MM-DD");
    expect(labelElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });

  it("should call getValue with the selected date", () => {
    const mockGetValue = jest.fn();
    const { getByPlaceholderText } = render(
      <DateComponent getValue={mockGetValue} />
    );
    const inputElement = getByPlaceholderText("YYYY-MM-DD");
    fireEvent.change(inputElement, { target: { value: "2023-10-19" } });
    const date = new Date("2023-10-19");
    expect(mockGetValue).toHaveBeenCalledWith(date);
  });
});
