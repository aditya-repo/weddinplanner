import Image from "next/image"
import Link from "next/link"

 const FeaturedVendor: React.FC = ()=>{
    return(
        <div className="shadow my-2 rounded-lg flex flex-col md:p-1">
            <div className=""><Image src={"/vendor.webp"} alt="Delhi Card" width={400} height={200} className="rounded-lg p-1" /></div>
            <div className="ps-3 py-1.5 pt-1">
                <Link href={'/jkd'} className=" text-left">
                    <div className="text-lg text-gray-700">Karma Lakeland</div>
                    <p className="text-sm text-gray-500">Karma Lakeland</p>
                    <h4 className="text-sm text-main-darker py-1"><span className="font-semibold">3,800 onwards</span> <span className="text-xs text-main-lighter">per plate</span></h4>
                </Link>
            </div>
        </div>
    )
 }

 export default FeaturedVendor