import api from "@/api/api";
import { Country } from "@/types/country.types";
import { FetchCountries, SelectCountry } from "@/types/functions.types";
import makeChunkArray from "@/utils/makeChunkArray";
import { useEffect, useRef, useState } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCardSkeleton";

const CHUNK_SIZE = 20;

function CountryList() {
    const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    const { ref, inView }: InViewHookResponse = useInView({
        threshold: 0,
    });
    // 아래 두 항목을 useState 에서 useRef로 변경
    // 모든 나라를 담을 배열
    const chunkCountriesRef = useRef<Country[][]>([]);
    // 현재 보여지는 배열의 인덱스
    const currentChunkIndexRef = useRef<number>(0);

    const handleSelectCountry: SelectCountry = (selectedCountry: Country) => {
        setDisplayedCountries(
            displayedCountries.filter<Country>(
                (country): country is Country => country.cca2 !== selectedCountry.cca2
            )
        );
        setSelectedCountries((prev) => [...prev, selectedCountry]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleUnselectCountry: SelectCountry = (selectedCountry: Country) => {
        setSelectedCountries(
            selectedCountries.filter<Country>(
                (country): country is Country => country.cca2 !== selectedCountry.cca2
            )
        );
        setDisplayedCountries((prev) => [selectedCountry, ...prev]);
    };

    useEffect(() => {
        const fetchCountries: FetchCountries = async () => {
            const data: Country[] = await api.getCountries();
            const chunks = makeChunkArray<Country>(data, CHUNK_SIZE);
            chunkCountriesRef.current = chunks;
            if (chunks.length > 0) setDisplayedCountries(chunks[0]);
        };
        fetchCountries();
    }, []);

    // 의존성 배열에 inView만 적용하는 것으로 해결!
    useEffect(() => {
        if (inView && currentChunkIndexRef.current < chunkCountriesRef.current.length - 1) {
            // 아래 콘솔 로그에서 하나씩 증가하는 것을 확인할 수 있음
            // console.log(currentChunkIndexRef.current, chunkCountriesRef.current.length);
            currentChunkIndexRef.current += 1;
            setDisplayedCountries((prev) => [
                ...prev,
                ...chunkCountriesRef.current[currentChunkIndexRef.current],
            ]);
        }
    }, [inView]);

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

// 아래는 테스트 용 코드
// useEffect(() => {
//     if (inView && currentChunkIndex < chunkCountries.length - 1) {
//         console.log(currentChunkIndex, chunkCountries.length);
//         loadMoreCountries();
//     }
// }, [inView, currentChunkIndex, chunkCountries, loadMoreCountries]);
