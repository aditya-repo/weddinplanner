import VendorDisplayCard from "@/ui/reusable/vendor-card";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const VendorList: React.FC = () => {
  return (
    <div className="px-6">
      <div className="header">
        <div className="text-gray-400 text-sm flex gap-2 pb-3 pt-5">
          <span>Home {">"}</span>
          <span>Vendors {">"}</span>
          <span>Wedding Venues </span>
        </div>
        <div className="flex  justify-between items-center pt-2 pb-4 px-4">
          <div className="text-main-darker mb-2">
            <h2 className="text-2xl">Wedding Venues in Patna</h2>
            <p>Showing 505 results as per your search criteria</p>
          </div>
          <div className="flex gap-4 mb-2">
            <div>
              <input
                type="text"
                className="outline-none border p-1.5 border-gray-200 shadow-sm px-4 rounded-lg w-[300px]"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-main-dark gap-2">
                <FontAwesomeIcon icon={faList} className="w-6" />
                <p>List</p>
              </div>
              <div className="flex items-center text-main-dark gap-2">
                <FontAwesomeIcon icon={faList} className="w-6" />
                <p>Grid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-display pb-4 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
          <Link href={'/vendors/1'}>
            <VendorDisplayCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
