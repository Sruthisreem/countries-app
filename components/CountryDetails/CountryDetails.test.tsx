import { render, screen } from "@testing-library/react";
import CountryDetails from "./CountryDetails";

describe("CountryDetails", () => {
  it("Should render the country Details", () => {
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
    render(<CountryDetails details={countryDetails} />);
    expect(screen.getByText("Sudan")).toBeInTheDocument();
    expect(screen.getByText("Capital: Khartoum")).toBeInTheDocument();
    expect(screen.getByText("Currency: SDG")).toBeInTheDocument();
    expect(screen.getByText("Population: 43,849,269")).toBeInTheDocument();
  });
});
