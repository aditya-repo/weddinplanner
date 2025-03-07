"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WeddingCategory {
    category: string;
    items: { title: string; link: string }[];
}

interface Props {
    filteredCategories: WeddingCategory[]
  }


  const weddingCategories = [
    {
        category: "Venues",
        items: [
            { title: "Banquet Halls", link: "/banquet-halls" },
            { title: "Marriage Garden / Lawns", link: "/marriage-garden-lawns" },
            { title: "Wedding Resorts", link: "/wedding-resorts" },
            { title: "Small Function / Party Halls", link: "/small-function-party-halls" },
            { title: "Destination Wedding Venues", link: "/destination-wedding-venues" },
            { title: "Kalyana Mandapams", link: "/kalyana-mandapams" }
        ]
    },
    {
        category: "Services",
        items: [
            { title: "Photographers", link: "/photographers" },
            { title: "Pre Wedding Locations", link: "/pre-wedding-shoot-locations" },
            { title: "Pre Wedding Photographers", link: "/pre-wedding-photographers" },
            { title: "Bridal Makeup", link: "/bridal-makeup" },
            { title: "Family Makeup", link: "/family-makeup" },
            { title: "Mehendi Artist", link: "/mehendi-artist" }
        ]
    },
    {
        category: "Vendors",
        items: [
            { title: "Food & Catering Services", link: "/food-catering-services" },
            { title: "Wedding Planners", link: "/wedding-planners" },
            { title: "Decorators", link: "/decorators" },
            { title: "DJs", link: "/djs" },
            { title: "Sangeet Choreographer", link: "/sangeet-choreographer" },
            { title: "Wedding Entertainment", link: "/wedding-entertainment" }
        ]
    }
];

const SearchVendor: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchedKeyword, setSearchedKeyword] = useState<string>("");   
    const [filteredCategories, setFilteredCategories] = useState<WeddingCategory[]>(weddingCategories);

    useEffect(() => {
        const search = () => {
            const filtered = weddingCategories.filter((category) => {
                const lowerCaseKeyword = searchedKeyword.trim().toLowerCase();
                return category.items.some((item) => item.title.toLowerCase().includes(lowerCaseKeyword));
            });
            setFilteredCategories(filtered);
        }
        search()
    }, [searchedKeyword])


    return (
        <div className="relative">
            <div className="flex w-full">
                <div className="bg-white pl-5 rounded-l-full items-center flex p-2  border-1 border-main-dark border-r-0">
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-main-dark" />
                </div>
                <input
                    className="flex-grow md:w-[600px] h-11 rounded-r-full py-2 bg-white outline-0  text-gray-600  border-1 border-main-dark border-l-0"
                    type="text"
                    placeholder="Search Venues, Vendors"
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                    onChange={(e) => setSearchedKeyword(e.target.value)}
                />
            </div>

            {isDropdownOpen && <SearchDropdown filteredCategories={filteredCategories} />}
        </div>
    );
};


const SearchDropdown: React.FC<Props> = ({filteredCategories}) => {

    if (filteredCategories.length === 0) {
        return (
            <div className="absolute w-full mt-[1px] z-100">
                <div className="bg-white text-dark text-sm text-gray-600 py-4 px-3 md:px-5 rounded-2xl shadow-2xl border-2 border-main-dark">
                    <p className="font-semibold text-main-darker text-center mb-1.5">No Match? Don&#39;t worry, just search it</p>
                </div>
            </div>
        );
        
    }

    return (
        <div className="absolute w-full mt-[1px] z-100">
            <div className="bg-white text-dark text-xs md:text-sm text-gray-600 py-4 px-3 md:px-5 rounded-2xl shadow-2xl border-2 border-main-dark">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {filteredCategories.map((category, index) => (
                        <div key={index} className="mb-3">
                            <p className="font-semibold text-main-darker mb-1.5">{category.category}</p>
                            {category.items.map((item, index) => (
                                <Link key={index} href={item.link} className="hover:underline hover:text-main-dark">
                                    <p className="mb-2.5">{item.title}</p>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchVendor