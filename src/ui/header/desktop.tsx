import {
  faCaretDown,
  faCloudDownload,
  faFileText,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./_desktop_nav";

const DesktopView: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="w-full flex items-center bg-main-darker justify-between py-1.5 px-10">
        <div className="flex items-center gap-8">
          <p className="text-sm text-white">
            India's Favourite Wedding Planning Platform
          </p>
          <div className="py-1.5 px-4 flex justify-between items-center bg-white gap-10 rounded-xs">
            <div className="text-xs text-light">All Cities</div>
            <FontAwesomeIcon icon={faCaretDown} className="h-4" />
          </div>
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
          <div className="text-3xl py-1.5">Wedding Planner</div>
          <Navbar />
        </div>
        <div className="flex items-center gap-8">
          <div className="bg-main-darker flex p-2 rounded-full ">
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
          </div>
          <div className="bg-main-darker flex py-1 rounded-full px-10">
            Login
          </div>
        </div>
      </div>
      {/* Navbar end */}
    </div>
  );
};

export default DesktopView;
