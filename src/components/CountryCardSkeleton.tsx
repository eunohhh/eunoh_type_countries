function CountryCardSkeleton() {
    return (
        <div className="p-4 bg-gray-300 rounded-lg shadow-md animate-pulse">
            <div className="w-20 h-12 bg-gray-400 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-400 rounded mb-2 w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto"></div>
        </div>
    );
}

export default CountryCardSkeleton;
