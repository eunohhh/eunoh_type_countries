import api from "@/api/api";
import { Country } from "@/types/country.types";
import { FetchCountries, LoadMoreCountries, SelectCountry } from "@/types/functions.types";
import makeChunkArray from "@/utils/makeChunkArray";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCardSkeleton";

function CountryList() {
    const [chunkCountries, setChunkCountries] = useState<Country[][]>([]);
    const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    const [currentChunkIndex, setCurrentChunkIndex] = useState<number>(0);
    const chunkSize = 20;
    const { ref, inView } = useInView({
        threshold: 0,
    });
    // inView 가 잘 안될 때 사용
    // inView 가 의도치 않게 true 로 바뀌어서 무한 로딩 되는 것 방지
    const prevInViewRef = useRef(inView);

    const loadMoreCountries: LoadMoreCountries = useCallback(() => {
        const nextIndex = currentChunkIndex + 1;
        setDisplayedCountries((prev) => [...prev, ...chunkCountries[nextIndex]]);
        setCurrentChunkIndex(nextIndex);
    }, [currentChunkIndex, chunkCountries]);

    const handleSelectCountry: SelectCountry = (selectedCountry: Country) => {
        setDisplayedCountries(
            displayedCountries.filter((country) => country.cca2 !== selectedCountry.cca2)
        );
        setSelectedCountries([...selectedCountries, selectedCountry]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleUnselectCountry: SelectCountry = (selectedCountry: Country) => {
        setSelectedCountries(
            selectedCountries.filter((country) => country.cca2 !== selectedCountry.cca2)
        );
    };

    useEffect(() => {
        const fetchCountries: FetchCountries = async () => {
            const data = await api.getCountries();
            const chunks = makeChunkArray(data, chunkSize);
            setChunkCountries(chunks);
            if (chunks.length > 0) setDisplayedCountries(chunks[0]);
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        if (inView && !prevInViewRef.current && currentChunkIndex < chunkCountries.length - 1) {
            // console.log(currentChunkIndex, chunkCountries.length);
            loadMoreCountries();
        }
        // 여기서 prevInViewRef 를 업데이트 해줘야 함
        prevInViewRef.current = inView;
    }, [inView, currentChunkIndex, chunkCountries, loadMoreCountries]);

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
                {displayedCountries.length === 0
                    ? Array.from({ length: 20 }, (_, i) => <CountryCardSkeleton key={i} />)
                    : displayedCountries.map((country) => (
                          <CountryCard
                              key={country.cca2}
                              country={country}
                              isSelected={false}
                              onClick={handleSelectCountry}
                          />
                      ))}
            </section>
            <div ref={ref} className="h-1 w-full"></div>
        </section>
    );
}

export default CountryList;
