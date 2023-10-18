import { render } from "@testing-library/react";
import { GridContainerCards } from "./index";

describe("GridContainerCards", () => {
  it("renders with children", () => {
    const { getByTestId } = render(
      <GridContainerCards>
        <div data-testid="child-element">Child Component</div>
      </GridContainerCards>
    );

    const childElement = getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });
});
