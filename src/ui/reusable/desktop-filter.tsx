"use client"

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface propsType {
    id: number,
    name: string,
    icon: any
}

const DesktopFilter: React.FC<{ filterType: propsType[] }> = ({ filterType }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className=" bg-white w-full relative">
            <div style={{ gridTemplateColumns: `repeat(${filterType.length}, minmax(0, 1fr))` }} className="grid grid-cols-1 md:grid-cols-2 px-4 py-3" onClick={() => setIsOpen(!isOpen)}>
                {filterType.map((item: propsType, index: number) => (
                    <div key={index} className="flex gap-2 items-center text-gray-600 hover:text-main-dark text-sm">
                        <FontAwesomeIcon icon={item.icon} className="w-5" />
                        <p>{item.name} <FontAwesomeIcon icon={faAngleDown} className="w-5" /></p>
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="border-t border-gray-200 absolute bg-white z-10 w-full shadow-lg">
                    <h3 className="text-center mt-3 text-gray-700 text-2xl">Customize your search</h3>
                    <div style={{ gridTemplateColumns: `repeat(${filterType.length}, minmax(0, 1fr))` }} className="grid grid-cols-1 md:grid-cols-2 px-4 py-3">
                        {filterType.map((item: propsType, index: number) => (
                            <div key={index} className="flex gap-2 items-center text-gray-600 hover:text-main-dark">
                                <FontAwesomeIcon icon={item.icon} className="w-5" />
                                <p>{item.name} </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-600 hover:text-main-dark py-5">
                        <button className="hover:bg-gray-700 bg-white border-2 border-gray-700 text-gray-700  hover:text-white px-4 py-1 rounded-full">Reset</button>
                        <button className="hover:bg-main-dark bg-white hover:text-white text-main-dark px-4 py-1 border-2 border-main-dark text rounded-full">Search</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DesktopFilter