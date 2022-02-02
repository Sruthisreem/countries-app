import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountryList from "../components/CountryList/CountryList";
import { Country } from "../interfaces";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
type HomeProps = {
  countries: Country[];
  isSuccess: boolean;
};

const Home = ({ countries, isSuccess }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries App</title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Countries application for showing information about different countries around the world and details about them"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {isSuccess ? <CountryList countries={countries} /> : <ErrorComponent />}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  /**
   * Fetching the countries and return the country list with details
   * and the status of the request
   */
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=flags,capital,name,population"
    );
    const countries: Country[] = await response.json();

    return {
      props: {
        countries,
        isSuccess: true,
      },
    };
  } catch (error) {
    return {
      props: {
        countries: [],
        isSuccess: false,
      },
    };
  }
};
export default Home;
