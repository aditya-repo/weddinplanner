import Navigation from "@/ui/header/navigation";
import FeaturedVendor from "@/ui/main-page/featured";
import LatestBlog from "@/ui/main-page/latest-blog";
import PopularSearch from "@/ui/main-page/pop-search";
import VenueSearch from "@/ui/main-page/venue-search";
import Carousel from "@/ui/reusable/carousel";
import SearchBarDesktop from "@/ui/search/desktop";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Navigation />
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
        <div>
          <h4 className="px-4 text-lg text-main-dark font-semibold">Popular Venue Searches</h4>
          <Carousel desktop={3} mobile={1}>
            <VenueSearch />
            <VenueSearch />
            <VenueSearch />
            <VenueSearch />
          </Carousel>
        </div>
        <div className="mt-5">
          <h4 className="px-4 text-lg text-main-dark font-semibold">Popular Searches</h4>
          <Carousel desktop={4} mobile={2}>
            <PopularSearch />
            <PopularSearch />
            <PopularSearch />
            <PopularSearch />
          </Carousel>
        </div>

        <div className="px-4 my-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg mb-3 text-main-dark font-semibold">Popular Searches</h4>
            <Link className="text-main-dark" href={"nklsd"}>View all Categories <FontAwesomeIcon icon={faAngleRight} className="h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 shadow px-5 py-5 text-center">
              Venues
            </div>
            <div className="rounded-lg border border-gray-200 shadow px-5 py-5 text-center">
              Vendor
            </div>
            <div className="rounded-lg border border-gray-200 shadow px-5 py-5 text-center">
              Vendor
            </div>
            <div className="rounded-lg border border-gray-200 shadow px-5 py-5 text-center">
              Vendor
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="px-4 text-lg text-main-dark font-semibold">Featured Vendors</h4>
          <Carousel desktop={4} mobile={2}>
            <FeaturedVendor />
            <FeaturedVendor />
            <FeaturedVendor />
            <FeaturedVendor />
          </Carousel>
        </div>

        <div className="mt-5 mb-20">
          <h4 className="px-4 text-lg text-main-dark font-semibold">Latest Blogs</h4>
          <Carousel desktop={3} mobile={1}>
            <LatestBlog />
            <LatestBlog />
            <LatestBlog />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
