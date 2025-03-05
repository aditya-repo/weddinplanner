import {
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavBar from "./_mobile_nav";
import MobileCities from "./_mobile_cities";

const MobileView: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full justify-between py-2 px-4 text-white bg-main-dark">
        <div className="flex items-center gap-4">
          <div className="">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="w-6 text-3xl pt-1" />
            </label>

            <div className="fixed inset-0 hidden peer-checked:block z-10">
              <label
                htmlFor="menu-toggle"
                className="absolute inset-0 w-full h-full cursor-pointer"
              ></label>
              <div className="w-88 absolute bg-white h-full fixed left-0 top-0 z-20 shadow-lg">
                <MobileNavBar />
              </div>
            </div>
          </div>

          <h2 className="text-xl py-1">Wedding Planner</h2>
        </div>

        <div className="flex gap-2">
          <MobileCities />
          <button
            className="bg-main-darker flex p-2 h-10 items-center rounded-full focus:outline-none"
            aria-label="Add User"
          >
            <FontAwesomeIcon icon={faUserPlus} className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
