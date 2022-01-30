export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital?: Array<string>;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
}

export interface CountryDetails {
  common: string;
  capital: Array<string>;
  population: number;
  currencies: object;
  languages: object;
}
