import { CountryDetails } from "../../interfaces";
import styles from "./CountryDetails.module.css";
type CountryDetail = {
  details: CountryDetails;
};
const CountryDetails = ({ details }: CountryDetail) => {
  return (
    <div className={styles.details_container}>
      <div>countryName</div>
      <div>Capital: {`capital`}</div>
      <div>Population: {`population`}</div>
      <div>Currency: {`currency`}</div>
      <div>Languages: {`languages`}</div>
    </div>
  );
};

export default CountryDetails;
