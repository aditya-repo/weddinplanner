"use client";

import { faAngleDown, faAppleWhole, faCartArrowDown, faClose, faGear, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const SearchVendor: React.FC = () => {
    const [search, setSearch] = useState(false);
    const [currentdropdown, setCurrentdropdown] = useState("Vendors, Photos, Articles")
    const [dropdown, setDrowdown] = useState(false)

    const dropdownlist = ["All", "Vendors", "Photos", "Articls"]

    return (
        <div>
            <div className="bg-main-darker flex p-2 rounded-full" onClick={() => setSearch(true)} >
                <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
            </div>
            {search && (
                <div className="fixed bg-white text-gray-600 inset-0 flex justify-center z-50">
                    <div className="py-8 px-10 w-full">
                        <div className="flex justify-between items-center py-4 mb-3">
                            <div><FontAwesomeIcon icon={faClose} className="text-4xl text-gray-500 text-light" onClick={() => setSearch(false)} /></div>
                            <div>
                                <h2 className="text-2xl">Everything you need, to plan your dream Wedding!</h2>
                                <p className="text-center">Search for vendors, ideas, real wedding stories and more!</p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className=" w-[780px]">
                                <div className="input-bar flex">
                                    <div className="relative">
                                        <div className="flex relative border-b-2 w-[188px] justify-between gap-20  bg-main-dark text-white p-3" onMouseEnter={() => setDrowdown(true)} onMouseLeave={() => setDrowdown(false)}>
                                            <div className="flex gap-4">
                                                <div><FontAwesomeIcon icon={faGear} className="w-6 text-2xl" /></div>
                                                <div>All</div>
                                            </div>
                                            <div><FontAwesomeIcon icon={faAngleDown} className="w-6 text-2xl" /></div>
                                        </div>
                                        <div className="absolute w-[188px] z-50" onMouseEnter={() => setDrowdown(true)} onMouseLeave={() => setDrowdown(false)}>
                                            {dropdown && (
                                                dropdownlist.map((item, key) => (
                                                    <div key={key} className="flex relative justify-between bg-main-dark hover:bg-main-darker text-white p-3" onClick={(event) => setCurrentdropdown(event.currentTarget.innerText)
                                                    }>
                                                        <div className="flex gap-4">
                                                            <div>
                                                                <FontAwesomeIcon icon={faGear} className="w-6 text-2xl" />
                                                            </div>
                                                            <div>{item}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <input type="text" placeholder={`Search: Wedding ${currentdropdown}`} className="w-full p-3 pl-4 outline-none border-2 border-gray-200 rounded-none" />
                                    </div>
                                </div>
                                <div className="search-recommendation mt-30">
                                    <div className="mb-3">Popular Searches</div>
                                    <div className="flex flex-wrap">
                                        {["Photographers in Delhi", "Bridal Makeup in Delhi", "Venues in Delhi", "Photographers in Mumbai"].map((item, key) => (
                                            <Link href={"/"} key={key} className="py-1.5 px-8 rounded-full border-2 border-gray-200 hover:border-main-dark mb-3 mx-2">{item}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchVendor;
