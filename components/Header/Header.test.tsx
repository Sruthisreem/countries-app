import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Should render the header with the text Countries App", () => {
    render(<Header />);
    expect(screen.getByText("Countries App")).toBeInTheDocument();
  });
});
