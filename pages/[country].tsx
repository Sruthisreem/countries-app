import Image from "next/image";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import BorderCountries from "../components/BorderCountries/BorderCountries";
// import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "../styles/Country.module.css";

const Country: any = ({ params }: any) => {
  let test = {
    common: "string",
    capital: ["Array<string>"],
    population: 24234534,
    currencies: ["object"],
    languages: ["dfgdf"],
  };
  let test2 = [
    {
      flags: {
        png: "https://flagcdn.com/w320/nz.png",
        svg: "https://flagcdn.com/il.svg",
      },
      name: {
        common: "Israel",
        official: "State of Israel",
        nativeName: [Object],
      },
      capital: ["Jerusalem"],
      population: 9216900,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/ws.png",
        svg: "https://flagcdn.com/ws.svg",
      },
      name: {
        common: "Samoa",
        official: "Independent State of Samoa",
        nativeName: [Object],
      },
      capital: ["Apia"],
      population: 198410,
    },
  ];
  return (
    <div className={styles.country_details_container}>
      <Head>
        <title>countryDetails</title>
      </Head>
      <Link href={`/`}>
        <div className={styles.back_button}>
          <AiOutlineArrowLeft />
          <span> Back</span>
        </div>
      </Link>
      <div className={styles.country_details}>
        <div className={styles.image_container}>
          <div className={styles.flag_container}>
            <Image
              src={"https://flagcdn.com/w320/nz.png"}
              alt={`-flag`}
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.country_details_section}>
          <CountryDetails details={test}></CountryDetails>
        </div>
        <div>Bordering Countries</div>
        <div className={styles.bordering_countries}>
          <BorderCountries borderCountries={test2}></BorderCountries>
        </div>
      </div>
    </div>
  );
};

export default Country;
