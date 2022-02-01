export interface Country {
  name: CountryName;
  capital?: Array<string>;
  flags: Flags;
  population: number;
}

export interface CountryDetailsType {
  name: CountryName;
  capital: Array<string>;
  flags: Flags;
  population: number;
  currencies: {
    [key: string]: Currency;
  };
  languages: { [key: string]: string };
  borders?: Array<string>;
}

export interface CountryName {
  common: string;
  official: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}
