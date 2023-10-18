import { render } from "@testing-library/react";
import { ErrorComponent } from "./index";

describe("ErrorComponent", () => {
  test("renders with default error message", () => {
    const { getByText } = render(<ErrorComponent />);
    expect(getByText("Hubo un error al cargar los datos.")).toBeInTheDocument();
  });

  test("renders with custom error message", () => {
    const { getByText } = render(
      <ErrorComponent label="Custom error message." />
    );
    expect(getByText("Custom error message.")).toBeInTheDocument();
  });
});
