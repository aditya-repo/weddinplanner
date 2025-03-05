"use client"

import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const DesktopCities: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState<Boolean>(false);
    const cities = ["All Cities","Patna", "Ranchi", "Delhi NCR", "Mumbai", "Chennai", "Pune", "Lucknow", "Jaipur", "Kolkata", "Bangalore", "Hyderabad"];

    return (
        <div className="group">
            <div className="py-1.5 px-4 flex justify-between items-center bg-white gap-10 rounded-xs" onClick={() => setShowOverlay(!showOverlay)}>
                <div className="text-xs text-light">All Cities</div>
                <FontAwesomeIcon icon={faCaretDown} className="h-4" />
            </div>
            {showOverlay && (
                <div>
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        className="fixed inset-0 z-10 h-full w-full transition-opacity duration-300"
                        onClick={() => setShowOverlay(false)}>
                    </div>
                    <div className="absolute inset-0 flex items-start justify-center bg-opacity-50">
                        <div className="bg-white py-5 border border-gray-200 shadow-lg rounded-sm text-dark z-20 w-[720px] mt-[60px]">
                            <div className="flex items-center justify-between px-5">
                                <div className="input-bar px-4 flex items-center">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="h-4 p-3 pl-4 text-gray-500 border border-gray-200 border-r-0"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search City, State..."
                                        className="w-[600px] h-[42px] px-2 outline-none border border-gray-200 border-l-0"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-4 px-4 py-8">
                                {cities.map((item, index) => (
                                    <Link key={index} href={`/${item.trim().toLowerCase().replace("  "," ").replace(" ","-")}-wedding`} >
                                    <div className="flex flex-col items-center mb-3">
                                        <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                                        <div className="text-xs mt-2">{item}</div>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}

export default DesktopCities