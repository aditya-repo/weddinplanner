"use client"

import { faCaretDown, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const MobileCities: React.FC = () => {
    const [active, setActive] = useState<Boolean>(false);
    const cities = ["All Cities","Patna", "Ranchi", "Delhi NCR", "Mumbai", "Chennai", "Pune", "Lucknow", "Jaipur", "Kolkata", "Bangalore", "Hyderabad"];
    const popularcities =  ["Gurgaon", "Goa", "Udaipur", "Chandigarh", "Jim Corbett", "Ahmedabad", "Indore", "Agra", "Kanpur", "Kochi"];


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
                                <input type="text" className="rounded-r-full outline-none border-none py-2 w-full bg-white border-l-0" placeholder="Search City, State..." />
                            </div>
                        </div>
                        <div className="p-4 border-b border-gray-300">
                            <h4 className="text-lg font-semibold text-main-dark">Top Cities</h4>
                            <div className="flex flex-wrap text-gray-500">
                                {cities.map((city, index) => (
                                    <Link key={index} href={`/${city.replace(" ", "-").toLowerCase()}`} className="py-2 text-sm basis-1/2">{city}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 border-b border-gray-300">
                            <h4 className="text-lg font-semibold text-main-dark">Popular Cities</h4>
                            <div className="flex flex-wrap text-gray-500">
                                {popularcities.map((city, index) => (
                                    <Link key={index} href={`/${city.replace(" ", "-").toLowerCase()}`} className="py-2 text-sm basis-1/2">{city}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
};

export default MobileCities