"use client"; // Ensures it runs in the client side in Next.js

import {
  faAngleDown,
  faCameraRetro,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavBar: React.FC = () => {
  return (
    <div className="bg-white text-gray-600 peer-checked/menu:block z-100">
      <div className="flex gap-2 py-4 px-6 items-center border-b border-gray-200">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="font-semibold">Signup / Signin</div>
      </div>

      <div className="pt-3 pb-2 px-6">
        <div className="font-semibold">Wedding Categories</div>
      </div>

      <details className="group">
        <summary className="flex justify-between items-center py-2 px-4 cursor-pointer list-none">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faHome} className="w-6" />
            </div>
            <div className="font-semibold">Venues</div>
          </div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="w-4 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>

        <div className="pl-14 space-y-3 border-l border-gray-300">
          <div className="cursor-pointer hover:text-gray-900">
            Banquet Halls
          </div>
          <div className="cursor-pointer hover:text-gray-900">
            Wedding Lawns
          </div>
          <div className="cursor-pointer hover:text-gray-900">Hotels</div>
          <div className="cursor-pointer hover:text-gray-900">Resorts</div>
        </div>
      </details>
      <details className="group">
        <summary className="flex justify-between items-center py-2 px-4 cursor-pointer list-none">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faCameraRetro} className="w-6" />
            </div>
            <div className="font-semibold">Photographers</div>
          </div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="w-4 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>

        <div className="pl-14 space-y-3 border-l border-gray-300">
          <div className="cursor-pointer hover:text-gray-900">
            Photographers
          </div>
        </div>
      </details>
    </div>
  );
};

export default MobileNavBar;
