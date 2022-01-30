import { Country } from "../../interfaces";
import styles from "./BorderCountries.module.css";
import Image from "next/image";

type BorderCountry = {
  borderCountries: Country[];
};
const BorderCountries = ({ borderCountries }: BorderCountry) => {
  console.log(borderCountries);
  return (
    <div className={styles.border_countries_container}>
      <div className={styles.border_countries_grid}>
        {borderCountries?.map((country: any, index: number) => (
          <div className={styles.card}>
            <div className={styles.content}>
              <Image
                src={country.flags.png || country.flags.svg}
                alt={`${country.name.common}-flag`}
                layout="fill"
              />
            </div>
            <div className={styles.border_details}>
              <span>{country.name.common}</span>
              <span>{country.capital}</span>
              <span>{country.population}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BorderCountries;