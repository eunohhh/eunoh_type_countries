import { Country } from "./country.types";

export type GetCountries = () => Promise<Country[]>;

export type FetchCountries = () => Promise<void>;

export type SelectCountry = (country: Country) => void;

export type LoadMoreCountries = () => void;
