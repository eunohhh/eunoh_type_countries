import { Country } from "@/types/country.types";
import clsx from "clsx";

interface CountryCardProps {
    country: Country;
    isSelected: boolean;
    onClick: (country: Country) => void;
}

function CountryCard({ country, isSelected, onClick }: CountryCardProps) {
    return (
        <div
            onClick={() => onClick(country)}
            className={clsx(
                "p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform cursor-pointer",
                isSelected && "border-2 border-blue-500"
            )}
        >
            <img
                className="w-20 h-auto mx-auto mb-4"
                src={country.flags.svg}
                alt={country.flag}
            />
            <h3 className="text-xl font-semibold mb-2">
                {country.name.common}
            </h3>
            <p className="text-gray-600">{country.capital}</p>
        </div>
    );
}

export default CountryCard;
