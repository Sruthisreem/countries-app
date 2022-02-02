import { CountryDetailsType } from "../../interfaces";
import styles from "./CountryDetails.module.css";
import { mapKeysToString } from "../../utils/helper";

type CountryDetail = {
  countryItemDetails: CountryDetailsType;
};
const CountryDetails = ({ countryItemDetails }: CountryDetail) => {
  return (
    <div className={styles.details_container}>
      <h3>{countryItemDetails?.name?.common || "Not Available"}</h3>
      <div>Capital: {countryItemDetails?.capital || "Not Available"}</div>
      <div>
        Population:{" "}
        {new Intl.NumberFormat("en-US").format(
          countryItemDetails?.population
        ) || "Not Available"}
      </div>
      <div>
        Currency:{" "}
        {countryItemDetails?.currencies
          ? mapKeysToString(countryItemDetails.currencies)
          : "Not Available"}
      </div>
      <div>
        Languages:{" "}
        {countryItemDetails?.languages
          ? Object.values(countryItemDetails.languages).join(",")
          : "Not Available"}
      </div>
    </div>
  );
};

export default CountryDetails;
