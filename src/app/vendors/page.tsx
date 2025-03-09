import VenueSearch from "@/ui/reusable/venue-search";
import Carousel from "@/ui/reusable/carousel";
import VendorCatalog from "@/ui/reusable/vendor-catalog";
import isMobileDevice from "@/util/isMobileScreen";
import Link from "next/link";
import PhotographerSearch from "@/ui/reusable/photographer-search";

const VendorPage: React.FC = async () => {


    const isMobile = await isMobileDevice();
    const venuecount = isMobile ? 1.8 : 3.6
    const photosearch = isMobile ? 2.1 : 4.6


    return (
        <div className="pb-10">
            <div className="mx-auto max-w-[1300px]">
                <div className="md:px-1">
                    <div className="header px-4">
                        <div className="text-gray-400  text-xs md:text-sm flex gap-2 pb-3 pt-5">
                            <p><Link href={'/'} className="hover:text-main-dark">Home </Link></p><span>{">"}</span>
                            <p><Link href={'/vendors'} className="hover:text-main-dark">Vendors </Link></p><span>{">"}</span>
                            <p><Link href={'/vendors'} className="hover:text-main-dark">Wedding Venues </Link></p>
                        </div>
                    </div>

                    <div className="px-4 my-8">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg text-main-dark font-semibold">Popular Searches</h4>
                        </div>
                        <VendorCatalog />
                    </div>


                    <div className="px-4">
                        <h4 className="text-lg  text-main-dark font-semibold">Venues Near You</h4>
                        <Carousel desktop={3.6} mobile={1.8} initialSize={venuecount} >
                            <VenueSearch />
                            <VenueSearch />
                            <VenueSearch />
                            <VenueSearch />
                            <VenueSearch />
                        </Carousel>
                    </div>

                    <div className="px-4 mt-10">
                        <h4 className="text-lg  text-main-dark font-semibold">Top Pre Wedding Photographers</h4>
                        <Carousel desktop={4.6} mobile={2.1} initialSize={photosearch} >
                            <PhotographerSearch />
                            <PhotographerSearch />
                            <PhotographerSearch />
                            <PhotographerSearch />
                            <PhotographerSearch />
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VendorPage;
