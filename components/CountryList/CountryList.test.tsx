import { render, screen } from "@testing-library/react";
import CountryList from "./CountryList";

describe("CountryList", () => {
  const countryDetails = [
    {
      flags: {
        png: "https://flagcdn.com/w320/so.png",
        svg: "https://flagcdn.com/so.svg",
      },
      name: {
        common: "Somalia",
        official: "Federal Republic of Somalia",
      },
      capital: ["Mogadishu"],
      population: 15893219,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/io.png",
        svg: "https://flagcdn.com/io.svg",
      },
      name: {
        common: "British Indian Ocean Territory",
        official: "British Indian Ocean Territory",
      },
      capital: ["Diego Garcia"],
      population: 3000,
    },
  ];
  it("Should render the countries according to the data list", () => {
    const { container } = render(<CountryList countries={countryDetails} />);
    expect(container.getElementsByClassName("country_item").length).toBe(2);
  });

  it("Should check first country is rendered", () => {
    render(<CountryList countries={countryDetails} />);
    expect(screen.getByText("Mogadishu")).toBeInTheDocument();
    expect(screen.getByText("Population: 15,893,219")).toBeInTheDocument();
  });
});
