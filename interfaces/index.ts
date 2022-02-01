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
  currencies: Currency[];
  languages: Language[];
  borders?: Array<string>;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: any;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}
