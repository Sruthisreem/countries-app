import { render, screen } from "@testing-library/react";
import CountryItem from "./CountryItem";

describe("CountryItem", () => {
  const countryDetails = {
    flags: {
      png: "https://flagcdn.com/w320/sd.png",
      svg: "https://flagcdn.com/sd.svg",
    },
    name: {
      common: "Sudan",
      official: "Republic of the Sudan",
    },
    currencies: { SDG: { name: "Sudanese pound", symbol: "" } },
    capital: ["Khartoum"],
    languages: { ara: "Arabic", eng: "English" },
    population: 43849269,
  };
  it("Should render the country with it's details", () => {
    render(<CountryItem country={countryDetails} />);
    expect(screen.getAllByText("Sudan")[0]).toBeInTheDocument();
    expect(screen.getByText("Khartoum")).toBeInTheDocument();
    expect(screen.getByText("Population: 43,849,269")).toBeInTheDocument();
  });
});
