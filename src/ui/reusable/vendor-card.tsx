import { faInfoCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const VendorDisplayCard: React.FC = () => {
  return (
    <div className="hover:shadow md:rounded-xl p-3 bg-white">
      <div className="image relative">
        <Image
          src={"/vendor.webp"}
          height={200}
          width={400}
          alt="Vendor Name"
          className="rounded-lg w-full"
        />
        <div className="absolute bottom-2 right-2 text-white text-xs bg-white rounded-sm py-0.5 px-1"><FontAwesomeIcon icon={faInfoCircle} className="text-gray-400" /></div>
      </div>
      <div className="info-panel">
        <div className="flex justify-between items-center pt-2 text-gray-600">
          <h4 className="">Shehnai Farm</h4>
          <div>
            <FontAwesomeIcon icon={faStar} className="w-6 text-main-dark" />
            <span>4.9</span>
            <span className="text-sm text-gray-400 pl-2">5 {"(review)"}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
          <div>Ramkrishna Nagar</div>
          <div>Marriage Lawn</div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-500">Veg - </div>
            <div className="text-lg text-gray-800">₹ 900</div>
            <div className="text-xs text-gray-400">{"(per plate)"}</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-500">Non Veg -</div>
            <div className="text-lg text-gray-800">₹ 1100</div>
            <div className="text-xs text-gray-400">{"(per plate)"}</div>
          </div>
        </div>
        <div className="flex gap-2 text-xs mt-2">
          <div className="py-1 px-2 bg-gray-200">400-600 person</div>
          <div className="py-1 px-2 bg-gray-200">18 Rooms</div>
          <p className="py-1 px-2 underline text-gray-600">+3 more</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDisplayCard;
