import Image from "next/image";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import BorderCountries from "../components/BorderCountries/BorderCountries";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "../styles/Country.module.css";
import { CountryDetailsType, Country } from "../interfaces";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";

type CountryProp = {
  countryDetails: CountryDetailsType;
  borderCountries: Country[];
  isSuccess: boolean;
};
const CountrySelectedDetails = ({
  countryDetails,
  borderCountries,
  isSuccess,
}: CountryProp) => {
  return (
    <div className={styles.country_details_container}>
      <Head>
        <title>countryDetails</title>
      </Head>
      {isSuccess ? (
        <>
          <Link passHref href={`/`}>
            <div data-testid="bckbtn" className={styles.back_button}>
              <AiOutlineArrowLeft />
              <span> Back</span>
            </div>
          </Link>
          <div className={styles.country_details}>
            <div className={styles.image_container}>
              <div className={styles.flag_container}>
                <Image
                  src={countryDetails.flags.png || countryDetails.flags.svg}
                  alt={`${countryDetails.name.common}-flag`}
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.country_details_section}>
              <CountryDetails
                countryItemDetails={countryDetails}
              ></CountryDetails>
            </div>
            <div className={styles.label_heading}>Bordering Countries</div>
            <div className={styles.bordering_countries}>
              {borderCountries.length ? (
                <BorderCountries
                  borderCountries={borderCountries}
                ></BorderCountries>
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </>
      ) : (
        <ErrorComponent />
      )}
    </div>
  );
};

export async function getStaticPaths() {
  // This function gets called at build time and
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=name`);
  const countries = await res.json();

  // Get the paths we want to pre-render based on countries
  const paths = countries?.map(({ name }: any) => ({
    params: { country: name.common },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  try {
    const { country } = params;
    // This function gets called at build time and fetches the selected country details
    const res = await fetch(
      encodeURI(
        `https://restcountries.com/v3.1/name/${country}?fields=name,flags,capital,population,currencies,borders,languages`
      )
    );
    const selectedCountrydetails = (await res.json()) || [];
    const borders = selectedCountrydetails && selectedCountrydetails[0].borders;
    var borderData: Country[] = [];
    for (let border of borders) {
      /**
       *  This function gets called at build time and fetches the bordering
       *  country details for each border of selected country.
       */
      const borderCountryDetails = await fetch(
        `https://restcountries.com/v3.1/alpha/${border}?fields=flags,name,capital,population`
      );
      let data = await borderCountryDetails.json();
      borderData.push(data);
    }
    // Pass country details and bordering country details to the page via props
    return {
      props: {
        countryDetails: selectedCountrydetails[0],
        borderCountries: borderData,
        isSuccess: true,
      },
    };
  } catch (error) {
    return {
      props: {
        countryDetails: {},
        borderCountries: [],
        isSuccess: false,
      },
      revalidate: false,
    };
  }
}

export default CountrySelectedDetails;
