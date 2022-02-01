import { Country } from "../../interfaces";
import styles from "./BorderCountries.module.css";
import Image from "next/image";

type BorderCountry = {
  borderCountries: Country[];
};
const BorderCountries = ({ borderCountries }: BorderCountry) => {
  return (
    <div className={styles.border_countries_container}>
      <div className={styles.border_countries_grid}>
        {borderCountries?.map((country: any, index: number) => (
          <div
            className={styles.border_card}
            key={`${index}-${country.name.common}`}
          >
            <div className={styles.content}>
              <Image
                src={country.flags.png || country.flags.svg}
                alt={`${country.name.common}-flag`}
                layout="fill"
              />
            </div>
            <div className={styles.border_details}>
              <span>{country?.name?.common || "Not Available"}</span>
              <span>{country?.capital || "Not Available"}</span>
              <span>
                {new Intl.NumberFormat("en-US").format(country?.population) ||
                  "Not Available"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BorderCountries;
