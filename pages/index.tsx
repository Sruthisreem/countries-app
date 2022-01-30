import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountryItem from "../components/CountryItem/CountryItem";
import { Country } from "../interfaces";

type HomeProps = {
  countries: Country[];
  isSuccess: boolean;
};

const Home = ({ countries, isSuccess }: HomeProps) => {
  console.log("countries", countries);
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
        {isSuccess ? (
          countries?.map((country, index: number): any => (
            <CountryItem country={country} />
          ))
        ) : (
          <div>error</div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
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
