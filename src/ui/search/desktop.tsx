import SearchVendor from "./search";

const SearchBarDesktop: React.FC = () => {
    return (
        <div className="w-[800px] flex flex-col justify-center items-center">
            <div className="flex justify-center text-center text-3xl font-semibold text-white mb-8 drop-shadow-lg md:text-4xl">
                Plan your Dream Wedding
            </div>
            <div className="w-[90%]">
                <SearchVendor />
            </div>
        </div>
    );
};


export default SearchBarDesktop;