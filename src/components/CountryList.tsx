import api from "@/api/api";
import { Country } from "@/types/country.types";
import { FetchCountries, SelectCountry } from "@/types/functions.types";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCardSkeleton";

function CountryList() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries: FetchCountries = async () => {
            const response = await api.getCountries();
            setCountries(response);
        };
        fetchCountries();
    }, []);

    const handleSelectCountry: SelectCountry = (country: Country) => {
        setCountries(countries.filter((c) => c.cca2 !== country.cca2));
        setSelectedCountries([...selectedCountries, country]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleUnselectCountry: SelectCountry = (country: Country) => {
        setSelectedCountries(selectedCountries.filter((c) => c.cca2 !== country.cca2));
    };

    return (
        <section className="container mx-auto min-h-screen">
            <h2 className="text-2xl font-semibold text-center pt-4">Favorite Countries</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {selectedCountries.map((country) => (
                    <CountryCard
                        key={country.cca2}
                        country={country}
                        isSelected={true}
                        onClick={handleUnselectCountry}
                    />
                ))}
            </section>
            <h1 className="text-3xl font-bold text-center mb-8 mt-4">Countries</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {countries.length === 0 ? (
                    <CountryCardSkeleton />
                ) : (
                    countries.map((country) => (
                        <CountryCard
                            key={country.cca2}
                            country={country}
                            isSelected={false}
                            onClick={handleSelectCountry}
                        />
                    ))
                )}
            </section>
        </section>
    );
}

export default CountryList;
