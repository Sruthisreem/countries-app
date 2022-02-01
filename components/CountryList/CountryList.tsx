import styles from "./CountryItem.module.css";
import { Country } from "../../interfaces";
import CountryItem from "../CountryItem/CountryItem";
type CountryListProps = {
  countries: Country[];
};
const CountryList = ({ countries }: CountryListProps) => {
  return (
    <>
      {countries?.map((country, index: number): any => (
        <CountryItem
          key={`${index}-${country.name.common}`}
          country={country}
        />
      ))}
    </>
  );
};

export default CountryList;
