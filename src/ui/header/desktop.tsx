import {
  faCaretDown,
  faCloudDownload,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./_desktop_nav";
import DesktopCities from "./_desktop_cities";
import SearchVendor from "./search_vendor";

const DesktopView: React.FC = () => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="w-full flex items-center bg-main-darker justify-between py-1.5 px-10">
        <div className="flex items-center gap-8">
          <p className="text-sm text-white">
            India&apos;s Favourite Wedding Planning Platform
          </p>
          <DesktopCities />
        </div>
        <div className="flex gap-4">
          <div className="flex text-white items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faFileText} className="h-4" />
            <h4>Write a Review</h4>
          </div>
          <div className="flex text-white items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faCloudDownload} className="h-4" />
            <h4>Download App</h4>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Navbar start */}
      <div className="w-full bg-main-dark flex justify-between px-10 gap-x-12 text-white h-[58px]">
        <div className="flex gap-10 relative">
          <div className="text-lg md:text-3xl py-1.5 pt-2">Wedding Planner</div>
          <Navbar />
        </div>
        <div className="flex items-center gap-8">
          <SearchVendor />
          <div className="bg-main-darker flex py-1 rounded-full md:px-10">
            Login
          </div>
        </div>
      </div>
      {/* Navbar end */}
    </div>
  );
};


export default DesktopView;



