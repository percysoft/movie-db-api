import { render } from "@testing-library/react";
import { LoadingComponent } from "./index";

describe("LoadingComponent", () => {
  test("renders LoadingOverlay and LoadingSpinner when loading is true", () => {
    const { container } = render(<LoadingComponent loading={true} />);
    const loadingSpinner = container.querySelector(
      '[data-testid="loading-container"]'
    );
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("does not render LoadingOverlay and LoadingSpinner when loading is false", () => {
    const { container } = render(<LoadingComponent loading={false} />);
    const loadingSpinner = container.querySelector(
      '[data-testid="loading-container"]'
    );
    expect(loadingSpinner).toBeNull();
  });
});
