"use client"

import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

const allCities = [
    {
        category: "Cities",
        items: [
            { title: "All Cities", link: "/all-cities" },
            { title: "Patna", link: "/patna" },
            { title: "Ranchi", link: "/ranchi" },
            { title: "Delhi NCR", link: "/delhi-ncr" },
            { title: "Mumbai", link: "/mumbai" },
            { title: "Chennai", link: "/chennai" },
            { title: "Pune", link: "/pune" },
            { title: "Lucknow", link: "/lucknow" },
            { title: "Jaipur", link: "/jaipur" },
            { title: "Kolkata", link: "/kolkata" },
            { title: "Bangalore", link: "/bangalore" },
            { title: "Hyderabad", link: "/hyderabad" }
        ]
    },
    {
        category: "Popular Cities",
        items: [
            { title: "Gurgaon", link: "/gurgaon" },
            { title: "Goa", link: "/goa" },
            { title: "Udaipur", link: "/udaipur" },
            { title: "Chandigarh", link: "/chandigarh" },
            { title: "Jim Corbett", link: "/jim-corbett" },
            { title: "Ahmedabad", link: "/ahmedabad" },
            { title: "Indore", link: "/indore" },
            { title: "Agra", link: "/agra" },
            { title: "Kanpur", link: "/kanpur" },
            { title: "Kochi", link: "/kochi" }
        ]
    }
];


interface IallCities {
    category: string;
    items: { title: string, link: string }[];
}


const MobileCities: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [city, setCity] = useState<IallCities[]>(allCities);
    const [searchedKeyword, setSearchedKeyword] = useState<string>("");

    useEffect(() => {
        const search = () => {
            if (searchedKeyword.trim().length > 0) {
                const lowerCaseKeyword = searchedKeyword.trim().toLowerCase();
                const filteredCity = allCities.filter((singleCity) =>
                    singleCity.items.some((item) => item.title.toLowerCase().includes(lowerCaseKeyword))
                );
                setCity(filteredCity);
            } else {
                setCity(allCities);
            }
        };
    
        search();
    }, [searchedKeyword]);
    

    return (
        <div className="h-10">

            <button onClick={() => setActive(true)}
                className="bg-main-darker h-10 flex items-center p-2 rounded-full focus:outline-none"
                aria-label="Search"
            >
                <FontAwesomeIcon icon={faSearch} className="w-6" />
            </button>
            {active && (
                <div className="fixed  text-gray-800 inset-0 flex justify-center z-50">
                    <div className="w-full bg-white">
                        <div className="w-full bg-main-dark">
                            <div className="flex items-center  mb-1 gap-4 text-white p-4">
                                <FontAwesomeIcon icon={faClose} className="text-2xl text-gray-200 text-light" onClick={() => setActive(false)} />
                                <h2 className="text-xl font-semibold">Cities</h2>
                            </div>
                            <div className="px-5 pb-5 flex gap-0">
                                <FontAwesomeIcon icon={faSearch} className="h-4 p-3 pl-4 text-gray-500 bg-white rounded-l-full border-none " />
                                <input type="text" onChange={(e) => setSearchedKeyword(e.target.value)} className="rounded-r-full outline-none border-none py-2 w-full bg-white border-l-0" placeholder="Search City, State..." />
                            </div>
                        </div>
                        {city.map((item, index) => (

                            <div className="p-4 border-b border-gray-300" key={index}>
                                <h4 className="text-lg font-semibold text-main-dark">{item.category}</h4>
                                <div className="flex flex-wrap text-gray-500">
                                    {item.items.map((city, index) => (
                                        <Link key={index} href={`/${city.link.replace(" ", "-").toLowerCase()}`} className="py-2 text-sm basis-1/2" title={city.title}>{city.title}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>)}
        </div>
    )
};

export default MobileCities