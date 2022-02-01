import { render, screen } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

describe("App", () => {
  it("renders and shows the error", () => {
    const error = "Failed to fetch the countries. Please try again.";
    render(<ErrorComponent />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
