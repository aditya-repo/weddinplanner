import isMobileDevice from "@/util/isMobileScreen";
import { faCommentSms, faInfoCircle, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const VendorDisplayCard: React.FC = async () => {
  const isMobile = await isMobileDevice()
  return (
    <div className="hover:shadow md:rounded-xl p-3 bg-white">

      <Link href={'/vendors/1'}>
        <div className="image relative">
          <Image
            src={"/vendor.webp"}
            height={200}
            width={400}
            alt="Vendor Name"
            className="rounded-lg w-full"
          />
          <div className="absolute bottom-2 right-2 text-white text-xs bg-gray-300 rounded-sm py-0.5 px-1">
            <div className="text-gray-500 flex items-center">
              <div className="text-sm">
                <FontAwesomeIcon icon={faStar} className="w-6 text-main-dark" />
                <span>4.9</span>
              </div>
              <span className="pl-2">5 {"(review)"}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="info-panel">
        <Link href={'/vendors/1'}>
          <div className="flex justify-between items-center pt-2 text-gray-600 mb-1">
            <h4 className="">Shehnai Farm</h4>
            <div className="py-0.5 px-2 text-sm bg-gray-200">400-600 person</div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
            <div>Ramkrishna Nagar</div>
            <div>Marriage Lawn</div>
          </div>
        </Link>

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
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs mt-2">
            <div className="py-1 px-2 bg-gray-200">18 Rooms</div>
            <div className="py-1 px-2 bg-gray-200">Inhouse Decor</div>
            <div className="py-1 px-2 bg-gray-200">3 More +</div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FontAwesomeIcon icon={faInfoCircle} className="w-4 text-main-dark" />
            <span className="text-xs text-gray-600 underline">View Page</span>
          </div>
        </div>
      </div>
      {isMobile && <div className="flex justify-between items-center gap-4 mt-3">
        <div className="flex items-center basis-1/2 border-2 border-main-dark gap-2 bg-main-lighter text-main-dark py-1.5 px-2 rounded-full py-2.5 justify-center">
          <FontAwesomeIcon icon={faCommentSms} className="w-4 text-main-dark" />
          <h4 className="text-gray-600 text-sm">Safe Chat</h4>
        </div>
        <div className="flex items-center basis-1/2 border-2 border-main-dark bg-main-lighter text-main-dark py-1.5 px-2 rounded-full py-2.5 gap-3 justify-center">
          <FontAwesomeIcon icon={faPhone} className="w-4 text-main-dark" />
          <h4 className="text-sm text-gray-600">Make a Call</h4>
        </div>
      </div>}
      <details className="mt-3 text-gray-600">
        <summary className="cursor-pointer text-main-dark">More about Shehnai Farm</summary>
        <div className="text-sm mx-4 mt-1">
          <p>Here are some cool features of this tab implementation:</p>
          <ul>
            <li>No JavaScript required</li>
            <li>Works in most modern browsers</li>
            <li>Simple and accessible</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default VendorDisplayCard;
