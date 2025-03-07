import Image from "next/image";
import VendorMetaInfo from "./_desktop_meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite, faStar, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import VendorDisplayCard from "../reusable/vendor-card";



const VendorDestopMain: React.FC = () => {



    return (
        <div className="pt-4 pb-10">
            <div className="flex flex-wrap text-gray-500 gap-1 px-3 my-3 text-sm">
                <div>Home {" > "}</div>
                <div>Vendors {" > "}</div>
                <div>Wedding Venues {" > "}</div>
                <div>Wedding Venues Delhi NCR {" > "}</div>
                <div>Wedding Venues Shahdara</div>
            </div>
            <div className="md:flex gap-6">
                <div className="md:w-3/5 mt-3">
                    <Image src={"/vendor.webp"} height={200} className="object-cover w-full max-h-97" width={400} alt="Vendor Name" />
                    <VendorMetaInfo />

                    <div className="mt-4 flex text-sm items-center shadow-sm  px-8 gap-8 bg-white py-3 text-gray-600">
                        <h5 className="hover:text-main-dark">Banquets</h5>
                        <h5 className="hover:text-main-dark">Projects</h5>
                        <h5 className="hover:text-main-dark">About</h5>
                        <h5 className="hover:text-main-dark">Menu</h5>
                        <h5 className="hover:text-main-dark">Reviews</h5>
                    </div>

                    <div className="bg-white shadow mt-5 text-gray-500">
                        <h5 className="text-lg border border-gray-200  px-5 py-3">Areas Available (4)</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 font-light pb-6">
                            <div className="flex items-center px-6 py-5 gap-5">
                                <FontAwesomeIcon icon={faSatellite} className="w-12 text-4xl" />
                                <div><h4 className="text-lg">60 Seating | 120 Floating</h4><p className="text-sm">Utsav 1</p></div>
                            </div>
                            <div className="flex items-center px-6 gap-5">
                                <FontAwesomeIcon icon={faSatellite} className="w-12 text-4xl" />
                                <div><h4 className="text-lg">60 Seating | 120 Floating</h4><p className="text-sm">Utsav 1</p></div>
                            </div>
                            <div className="flex items-center px-6 gap-5">
                                <FontAwesomeIcon icon={faSatellite} className="w-12 text-4xl" />
                                <div><h4 className="text-lg">60 Seating | 120 Floating</h4><p className="text-sm">Utsav 1</p></div>
                            </div>
                            <div className="flex items-center px-6 gap-5">
                                <FontAwesomeIcon icon={faSatellite} className="w-12 text-4xl" />
                                <div><h4 className="text-lg">60 Seating | 120 Floating</h4><p className="text-sm">Utsav 1</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/5 px-2 mt-3">
                    <div className="mb-5 shadow">

                        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-300">
                            <div>Local Price</div>
                            <div className="text-main-dark">Pricing info {" > "}</div>
                        </div>

                        <div className="px-4 py-4 flex justify-between items-center border-b border-gray-300">
                            <div className=" basis-1/2">
                                <h5 className="text-gray-600 text-xs mb-2 font-semibold">Room Price</h5>
                                <div className="text text-gray-500">₹ 900 <span className="text-sm text-gray-400">per room</span></div>
                            </div>
                            <div className=" basis-1/2">
                                <h5 className="text-gray-600 text-xs mb-2 font-semibold">Starting Price of Decor</h5>
                                <div className="text text-gray-500">₹ 150,000 <span className="text-sm text-gray-400">per room</span></div>
                            </div>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-300">
                            <div className="text text-xl text-main-dark">₹ 2000 <span className="text-sm text-main-dark">per plate </span><span className="text-sm text-gray-400">{" (taxes extra)"}</span></div>
                            <div className="text-gray-700 text-xs">Veg price</div>
                        </div>
                        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-300">
                            <div className="text text-xl text-main-dark">₹ 4000 <span className="text-sm text-main-dark">per plate </span><span className="text-sm text-gray-400">{" (taxes extra)"}</span></div>
                            <div className="text-gray-700 text-xs">Non Veg price</div>
                        </div>
                    </div>
                    <div className="mb-5 shadow bg-main-lighter">
                        <div className="px-4 py-3 flex  items-center border-b border-gray-300">
                            <div className="text text-xl text-main-dark">Destination Price</div>
                        </div>
                        <div className="px-4 py-4 flex justify-between items-center border-b border-gray-300">
                            <div className="text text-xl text-main-dark">₹20.50 Lakhs</div>
                            <div className=" basis-1/2">
                                <h5 className="text-gray-600 text-xs mb-2 font-semibold">/day for 80 rooms</h5>
                                <div className="text-sm text-gray-400">(incl. Rooms + 3 Meals + Venue)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow mt-5 bg-white text-gray-600">
                <div className="description">
                    <h5 className="text-lg border border-gray-200  px-5 py-3">The Leela Ambience Convention Hotel Delhi</h5>
                    <div className="grid grid-cols-1 border border-gray-200 font-light p-4 text-sm">
                        <p className="mb-2">Situated in the heart of Delhi, Radisson Blu Hotel in Paschim Vihar offers a stunning blend of contemporary design and luxurious wedding venue. The hotel&apos;s interior is inspired by a neo-gothic theme, exuding a regal and opulent atmosphere. Whether you&apos;re planning a small, intimate wedding or a grand affair, Radisson Blu offers four individual ballrooms that can be combined to create a magnificent setting. The venue pays meticulous attention to detail to ensure all your needs are met, promising a truly memorable wedding experience.</p>
                        <h4 className="mb-2 mt-4"><strong className="font-semibold">Space Available and Capacity at Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p>The hotel features 178 spacious rooms and 21 elegant suites, each tastefully designed with chic style and comfortable furnishings. The hotel offers graceful and elegant spaces for ceremonies and receptions, with a dedicated team of wedding specialists to help you plan your event. The highlight is Olympus, West Delhi&apos;s largest banquet hall, spanning over 12,000 square feet and accommodating up to 800 guests. The plush seating arrangements and stunning decor add to the grandeur of the venue.</p>
                        <h4 className="mb-2 mt-4"><strong className="font-semibold">Cuisines at Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p>The hotel offers a diverse range of cuisines to elevate your guest&apos;s dining experience. You can consult with the in-house chef to create a buffet menu that suits your taste and preferences, ensuring a culinary delight for all your guests.</p>

                        <h4 className="mb-2 mt-4"><strong className="font-semibold">Location of Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p>Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                </div>
                <div className="details grid grid-cols-2 md:grid-cols-4 text-gray-700 border border-gray-200 ">
                    <div className="p-4">
                        <h4 className="mb-2">Been on <span className="text-main-dark">Weddin Planner</span> Since</h4>
                        <p className="text-xs text-gray-600">9 years 10 Month</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                    <div className="p-4">
                        <h4 className="mb-2">Room Count</h4>
                        <p className="text-xs text-gray-600">178 Rooms</p>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow mt-5 text-gray-700">
                <h5 className="text-lg border border-gray-200  px-5 py-3">FAQ about Radisson Blu Hotel New Delhi Paschim Vihar</h5>
                <div className="p-4 border border-gray-200 font-light pb-6">
                    <div className="py-2 px-5 bg-gray-100 gap-5 mb-3 rounded-lg">
                        <h4 className="mb-1 mt-1"><strong className="font-semibold">Location of Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p className="mb-1">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="py-3 px-5 bg-gray-100 gap-5 mb-3 rounded-lg">
                        <h4 className="mb-1 mt-1"><strong className="font-semibold">Location of Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p className="mb-1">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="py-3 px-5 bg-gray-100 gap-5 mb-3 rounded-lg">
                        <h4 className="mb-1 mt-1"><strong className="font-semibold">Location of Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p className="mb-1">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="py-3 px-5 bg-gray-100 gap-5 mb-3 rounded-lg">
                        <h4 className="mb-1 mt-1"><strong className="font-semibold">Location of Radisson Blu Hotel New Delhi Paschim Vihar</strong></h4>
                        <p className="mb-1">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow mt-5 text-gray-700">
                <h5 className="text-lg border border-gray-200  px-5 py-3">Review for Radisson Blu Hotel New Delhi Paschim Vihar</h5>
                <div className="font-light border border-gray-200">
                    <div className="py-3 px-8 border-b border-gray-200">
                        <div className="flex items-center gap-4 mb-2">
                            <div><FontAwesomeIcon icon={faUserCircle} className="w-14 text-6xl" /></div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <h4 className="mb-1 mt-1"><strong className="font-semibold">Shreya Kumari</strong></h4>
                                    <div className="w-16 text-sm h-6 bg-yellow-600 text-white rounded flex items-center justify-center pr-1"><FontAwesomeIcon icon={faStar} className="w-6" /> 5.0 </div>
                                </div>
                                <p className="text-gray-500 text-sm">Reviewed 4 years ago</p>
                            </div>
                        </div>
                        <p className="mb-1 text-sm text-gray-600">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="py-3 px-8 border-b border-gray-200">
                        <div className="flex items-center gap-4 mb-2">
                            <div><FontAwesomeIcon icon={faUserCircle} className="w-14 text-6xl" /></div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <h4 className="mb-1 mt-1"><strong className="font-semibold">Shreya Kumari</strong></h4>
                                    <div className="w-16 text-sm h-6 bg-yellow-600 text-white rounded flex items-center justify-center pr-1"><FontAwesomeIcon icon={faStar} className="w-6" /> 5.0 </div>
                                </div>
                                <p className="text-gray-500 text-sm">Reviewed 4 years ago</p>
                            </div>
                        </div>
                        <p className="mb-1 text-sm text-gray-600">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="py-3 px-8 border-b border-gray-200">
                        <div className="flex items-center gap-4 mb-2">
                            <div><FontAwesomeIcon icon={faUserCircle} className="w-14 text-6xl" /></div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <h4 className="mb-1 mt-1"><strong className="font-semibold">Shreya Kumari</strong></h4>
                                    <div className="w-16 text-sm h-6 bg-yellow-600 text-white rounded flex items-center justify-center pr-1"><FontAwesomeIcon icon={faStar} className="w-6" /> 5.0 </div>
                                </div>
                                <p className="text-gray-500 text-sm">Reviewed 4 years ago</p>
                            </div>
                        </div>
                        <p className="mb-1 text-sm text-gray-600">Located in Paschim Vihar, the hotel is easily accessible and offers a majestic setting for your wedding celebrations. Its strategic location and exquisite amenities make it a premier choice for weddings in Delhi NCR.</p>
                    </div>
                    <div className="flex justify-center py-2">
                        <div className="px-8 py-1.5 rounded-full border border-main-dark text-main-dark">
                            View all
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow mt-5 text-gray-700">
                <div className="flex justify-between items-center border px-3 border-gray-200 ">
                    <h5 className="text-lg px-2 py-3">Browse Similar Wedding Venues</h5>
                    <Link href={'/'} className="px-5 py-0.5 border-2 rounded-full border-main-dark text-main-dark hover:bg-main-dark hover:text-white">View More</Link>
                </div>
                <div className="p-4 border grid grid-cols-1 md:grid-cols-3 border-gray-200 font-light pb-6 gap-6">
                    <VendorDisplayCard />
                    <VendorDisplayCard />
                    <VendorDisplayCard />
                </div>
            </div>
        </div>
    );
}

export default VendorDestopMain