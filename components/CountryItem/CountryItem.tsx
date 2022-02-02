import Link from "next/link";
import Image from "next/image";
import styles from "./CountryItem.module.css";
import { Country } from "../../interfaces";
type Props = {
  country: Country;
};
/**
 * A country card view item with flag, country name, capital and population
 */
export default function CountryItem({ country }: Props): JSX.Element {
  return (
    <Link passHref href={`/${country.name.common}`}>
      <div
        id="country-item"
        data-testid={`country-${country.name.common}`}
        className={styles.country_item}
      >
        <fieldset className={styles.country_container}>
          <legend>{country.name.common}</legend>
          <div className={styles.country_container}>
            <div className={styles.flag_container}>
              <div className={styles.image_container}>
                <Image
                  src={country.flags.png}
                  alt={`${country.name.common}-Flag`}
                  layout="fill"
                  object-position="center"
                />
              </div>
              <div className={styles.details_container}>
                <span>{country.name.common}</span>
                <span>{country.capital}</span>
              </div>
            </div>
            <div className={styles.population_container}>
              Population:{" "}
              {new Intl.NumberFormat("en-US").format(country.population)}
            </div>
          </div>
        </fieldset>
      </div>
    </Link>
  );
}
