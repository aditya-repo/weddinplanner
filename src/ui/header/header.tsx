import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faCloudDownload, faFileText}  from "@fortawesome/free-solid-svg-icons"

interface HeaderProps {
  // Add any props you might need here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full flex items-center bg-main-darker justify-between py-1.5 px-10">
      <div className="flex items-center gap-8">
        <p className="text-sm text-white">India's Favourite Wedding Planning Platform</p>
        <div className="py-1.5 px-4 flex justify-between items-center bg-white gap-10 rounded-xs">
          <div className="text-xs text-light">All Cities</div>
          <FontAwesomeIcon icon={faCaretDown} className="h-4"/>
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
  );
};

export default Header;