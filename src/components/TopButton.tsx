function TopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            onClick={scrollToTop}
            className="rounded-full bg-white fixed bottom-4 right-4 p-2 cursor-pointer shadow-md hover:bg-gray-50"
        >
            {"↑"}
        </div>
    );
}

export default TopButton;
