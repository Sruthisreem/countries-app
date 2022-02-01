import { render, screen } from "@testing-library/react";
import BorderCountries from "./BorderCountries";

describe("BorderCountries", () => {
  it("Should render all border countries", () => {
    const borderCountries = [
      {
        flags: {
          png: "https://flagcdn.com/w320/il.png",
          svg: "https://flagcdn.com/il.svg",
        },
        name: {
          common: "Israel",
          official: "State of Israel",
        },
        capital: ["Jerusalem"],
        population: 9216900,
      },
      {
        flags: {
          png: "https://flagcdn.com/w320/sy.png",
          svg: "https://flagcdn.com/sy.svg",
        },
        name: {
          common: "Syria",
          official: "Syrian Arab Republic",
        },
        capital: ["Damascus"],
        population: 17500657,
      },
    ];

    render(<BorderCountries borderCountries={borderCountries} />);
    expect(screen.getByText("Israel")).toBeInTheDocument();
    expect(screen.getByText("Jerusalem")).toBeInTheDocument();
    expect(screen.getByText("9,216,900")).toBeInTheDocument();

    expect(screen.getByText("Syria")).toBeInTheDocument();
    expect(screen.getByText("Damascus")).toBeInTheDocument();
    expect(screen.getByText("17,500,657")).toBeInTheDocument();
  });
});
