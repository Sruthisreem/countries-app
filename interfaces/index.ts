export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital: Array<string>;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
}
