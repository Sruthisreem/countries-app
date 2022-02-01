import { CountryDetailsType } from "../../interfaces";
import styles from "./CountryDetails.module.css";
import { mapKeysToString } from "../../utils/helper";

type CountryDetail = {
  details: CountryDetailsType;
};
const CountryDetails = ({ details }: CountryDetail) => {
  return (
    <div className={styles.details_container}>
      <h3>{details?.name?.common || "Not Available"}</h3>
      <div>Capital: {details?.capital || "Not Available"}</div>
      <div>
        Population:{" "}
        {new Intl.NumberFormat("en-US").format(details?.population) ||
          "Not Available"}
      </div>
      <div>
        Currency:{" "}
        {details?.currencies
          ? mapKeysToString(details.currencies)
          : "Not Available"}
      </div>
      <div>
        Languages:{" "}
        {details?.languages
          ? Object.values(details.languages).join(",")
          : "Not Available"}
      </div>
    </div>
  );
};

export default CountryDetails;
