import DesktopFilter from "@/ui/reusable/desktop-filter";
import VendorDisplayCard from "@/ui/reusable/vendor-card";
import VendorsLink from "@/ui/reusable/vendors-link";
import isMobileDevice from "@/util/isMobileScreen";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleLeft, faAngleRight, faBowlFood, faLocationArrow, faLocationPin, faPerson, faRestroom, faRupee, faSearch, faSort, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const filterType = [
  {
    id: 1,
    name: "Locality",
    icon: faLocationArrow
  },
  {
    id: 2,
    name: "No of Guests",
    icon: faPerson
  },
  {
    id: 3,
    name: "Room Count",
    icon: faRestroom
  },
  {
    id: 4,
    name: "Price per plate",
    icon: faBowlFood
  },
  {
    id: 5,
    name: "Rental Cost (per function)",
    icon: faRupee
  },
  {
    id: 6,
    name: "Venue Type",
    icon: faSpaceAwesome
  },
  {
    id: 7,
    name: "Space Type",
    icon: faLocationPin
  },
  {
    id: 8,
    name: "Rating",
    icon: faStar
  }
]

const VendorList: React.FC = async () => {
  const isMobile = await isMobileDevice();

  return (
    <div className="pb-10">
      <div className="desktop-filter bg-white">
        {!isMobile && (
          <DesktopFilter filterType={filterType} />
        )}
      </div>
      <div className="mx-auto max-w-[1300px]">
        <div className="md:px-1">
          <div className="header px-4">
            <div className="text-gray-400  text-xs md:text-sm flex gap-2 pb-3 pt-5">
              <p><Link href={'/'} className="hover:text-main-dark">Home </Link></p><span>{">"}</span>
              <p><Link href={'/vendors'} className="hover:text-main-dark">Vendors </Link></p><span>{">"}</span>
              <p><Link href={'/vendors'} className="hover:text-main-dark">Wedding Venues </Link></p>
            </div>
            {!isMobile ? (
              <DesktopHeader />) : (
              <MobileHeader />
            )}
          </div>
          <div className="data-display pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <VendorDisplayCard />
                <VendorDisplayCard />
                <VendorDisplayCard />
                <VendorDisplayCard />
                <VendorDisplayCard />
                <VendorDisplayCard />
            </div>
          </div>
          <div className="page-navigation mt-10">
            <div className="flex justify-center gap-2">
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <p className="text-main-dark">1</p>
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <p className="text-main-dark">2</p>
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <p className="text-main-dark">...</p>
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <p className="text-main-dark">7</p>
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
                <p className="text-main-dark">8</p>
              </div>
              <div className="border border-gray-200 shadow h-2 w-2 md:h-4 md:w-4 flex items-center justify-center px-5 py-5 text-center">
              <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="my-10">
            <VendorsLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;


const DesktopHeader: React.FC = () => {
  return (
    <div className="flex  justify-between items-center pt-2 pb-4">
      <div className="text-gray-700 mb-2">
        <h2 className="text-2xl">Wedding Venues in Patna</h2>
        <p className="text-sm text-gray-600">Showing <span className="text-gray-800"><strong>505 results</strong></span> as per your search criteria</p>
      </div>
      <div className="flex gap-4 mb-2">
        <div className="flex items-center shadow-sm rounded-lg">
          <FontAwesomeIcon icon={faSearch} className="w-6 pl-3 py-2.5 bg-white text-gray-500 border border-gray-200 border-r-0 rounded-l-lg" />
          <input
            type="text"
            className="outline-none border p-1.5 border-gray-200 border-l-0 bg-white  px-2 rounded-r-lg w-[300px]"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  )
}

const MobileHeader: React.FC = () => {
  return (
    <div className="flex-col full  justify-between items-center">
      <div className="text-gray-700 mb-2">
        <h2 className="text-xl mb-2">Wedding Venues in Patna</h2>
        <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600"><span className="text-gray-800"><strong>505 results found</strong></span></p>
        <div className="text-sm border-2 border-main-darker shadow rounded-lg py-1 px-2 bg-main-dark text-white flex items-center"><div>Change Category</div> <FontAwesomeIcon icon={faAngleDown} className="pl-1 text-sm w-4"/></div>
        </div>
      </div>
      <div className="flex flex-grow w-full gap-4 mb-2 mt-3">
        <div className="flex items-center shadow-sm rounded-lg w-full bg-white">
          <FontAwesomeIcon icon={faSearch} className="w-6 pl-3 py-2.5 text-gray-500 border bg-white border-gray-200 border-r-0 rounded-l-lg" />
          <input
            type="text"
            className="outline-none border p-1.5 bg-white border-gray-200 border-l-0 w-[100%] px-2 rounded-r-lg"
            placeholder="Search..."
          />
        </div>

      </div>
        <div className="flex gap-2 flex-wrap py-2 mb-2">
          <div className="text-sm border-2 border-gray-600 shadow rounded-full  py-1.5 px-4 bg-main-lighter text-gray-600 flex items-center">
            <div><FontAwesomeIcon icon={faSort} className="pl-1 pr-2 text-sm w-4"/>Filter<FontAwesomeIcon icon={faAngleDown} className="pl-1 text-sm w-4"/></div>
          </div>
          <div className="text-sm border-2 border-gray-600 shadow rounded-full  py-1.5 px-4 bg-main-lighter text-gray-600 flex items-center">
            <div>Sort <FontAwesomeIcon icon={faAngleDown} className="pl-1 text-sm w-4"/></div>
          </div>
          <div className="text-sm border-2 border-gray-600 shadow rounded-full  py-1.5 px-4 bg-main-lighter text-gray-600 flex items-center">
            <div>Rated +4.5 <FontAwesomeIcon icon={faAngleDown} className="pl-1 text-sm w-4"/></div>
          </div>
        </div>
    </div>
  )
}