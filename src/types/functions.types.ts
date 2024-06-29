import { Country } from "./country.types";

export type GetCountries = () => Promise<Country[]>;

export type FetchCountries = () => void;

export type SelectCountry = (country: Country) => void;

export type LoadMoreCountries = () => void;
