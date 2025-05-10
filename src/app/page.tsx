import FeaturedVendor from "@/ui/main-page/featured";
import LatestBlog from "@/ui/main-page/latest-blog";
import PopularSearch from "@/ui/main-page/pop-search";
import PopVenue from "@/ui/main-page/pop-venue";
import BrideCard from "@/ui/reusable/bride-card";
import Carousel from "@/ui/reusable/carousel";
import GroomCard from "@/ui/reusable/groom-card";
import VendorCatalog from "@/ui/reusable/vendor-catalog";
import SearchBarDesktop from "@/ui/search/desktop";
import isMobileDevice from "@/util/isMobileScreen";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const isMobile = isMobileDevice();
  const venuecount = await isMobile ? 1.1 : 2.6
  const popcount = await isMobile ? 2.2 : 4.3
  const featurecount = await isMobile ? 1.2 : 3.2
  const blogcount = await isMobile ? 1.2 : 3.2
  return (
    <div>
      <div className="relative">
        <Image
          src="/delhi_bg.webp"
          alt="banner"
          className="w-full md:h-[500px] h-[360px]  object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute left-0 bottom-1/6 md:bottom-1/5 flex items-center justify-center w-full">
          <SearchBarDesktop />
        </div>
      </div>
      <div className="md:mx-auto ml-0  mt-5 max-w-[1300px]">



        <div className="mt-5 px-4">
          <h4 className="pl-1 text-lg text-main-dark font-semibold">Featured Vendors</h4>
          <Carousel desktop={3.5} mobile={1.5} initialSize={featurecount}>
            <FeaturedVendor />
            <FeaturedVendor />
            <FeaturedVendor />
            <FeaturedVendor />
          </Carousel>
        </div>

        <div className="px-4 my-5 ">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg text-main-dark font-semibold">Popular Searches</h4>
            <Link className="text-main-dark" href={"nklsd"}>View all Categories <FontAwesomeIcon icon={faAngleRight} className="h-4" /></Link>
          </div>
          <VendorCatalog />
        </div>

        <div className="px-4">
          <h4 className="text-lg  text-main-dark font-semibold">Popular Venue Searches</h4>
          <Carousel desktop={2.6} mobile={1.1} initialSize={venuecount} >
            <PopVenue />
            <PopVenue />
            <PopVenue />
            <PopVenue />
            <PopVenue />
          </Carousel>
        </div>

        <div className="px-4 my-5 ">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg text-main-dark font-semibold">Wedding Planning for Bride</h4>
          </div>
          <BrideCard />
        </div>

        <div className="px-4 my-5 ">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg text-main-dark font-semibold">Wedding Planning for Groom</h4>
          </div>
          <GroomCard />
        </div>


        <div className="mt-5 px-4">
          <h4 className="text-lg text-main-dark font-semibold">Popular Searches</h4>
          <Carousel desktop={4.3} mobile={1.6} initialSize={popcount}>
            <PopularSearch />
            <PopularSearch />
            <PopularSearch />
            <PopularSearch />
            <PopularSearch />
          </Carousel>
        </div>



        <div className="mt-5 mb-20 px-4">
          <h4 className="text-lg text-main-dark font-semibold">Latest Blogs</h4>
          <Carousel desktop={3} mobile={1.2} initialSize={blogcount}>
            <LatestBlog />
            <LatestBlog />
            <LatestBlog />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
