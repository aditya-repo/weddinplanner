import { faHeartCircleCheck, faImage, faLocationArrow, faPen, faPhone, faShare, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const VendorMetaInfo: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
        <div className="w-[100%] md:w-[94%] bg-white shadow border border-gray-200 rounded-xs md:mt-[-40px]">
            <div className="flex justify-between items-center pt-3 px-5">
                <h3 className="text-xl font-semibold text-gray-600 flex-grow">The Leela Ambience Convention Hotel Delhi</h3>
                <div className="md:text-lg flex items-center gap-1 font-semibold py-1.5 px-4 bg-green-500 text-white w-[84px] h-[40px]"> <FontAwesomeIcon icon={faStar} className="w-4 pb-1" /> 4.9</div>
            </div>
            <div className="flex justify-between py-3 px-5">
                <div className="">
                    <h5 className="text-gray-600"><FontAwesomeIcon icon={faLocationArrow} className="w-6" /> Shahdara, Delhi NCR <span className="text-sm text-gray-400">{"(view on map)"}</span></h5>
                    <p className="text-xs text-gray-400 pl-7 mt-1.5">The Leela Ambience Convention Hotel, Delhi, New Delhi, Delhi, India</p>
                </div>
                <p className="py-1.5 pl-4 text-gray-500">22 reviews</p>
            </div>
            <div className="flex py-3 px-5">
                <div>
                    <h5 className="text-green-600"><FontAwesomeIcon icon={faPhone} className="w-6" /> Contact </h5>
                    <p className="text-xs text-gray-500 pl-7 mt-1.5">+91 7050020658</p>
                </div>
            </div>
            <div className="grid grid-cols-4 bg-gray-50 text-gray-600">
                <div className="flex justify-center items-center gap-2 border border-gray-200 py-3">
                    <FontAwesomeIcon icon={faImage} className="w-5" />
                    <p className="text-xs">110 Photos</p>
                </div>
                <div className="flex justify-center items-center gap-2 border border-gray-200 py-3">
                    <FontAwesomeIcon icon={faHeartCircleCheck} className="w-5" />
                    <p className="text-xs">Shortlist</p>
                </div>
                <div className="flex justify-center items-center gap-2 border border-gray-200 py-3">
                    <FontAwesomeIcon icon={faPen} className="w-5" />
                    <p className="text-xs">Write a Review</p>
                </div>
                <div className="flex justify-center items-center gap-2 border border-gray-200 py-3">
                    <FontAwesomeIcon icon={faShare} className="w-5" />
                    <p className="text-xs">Share</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default VendorMetaInfo