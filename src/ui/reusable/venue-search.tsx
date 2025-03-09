import Image from "next/image"
import Link from "next/link"

const VenueSearch : React.FC = ()=>{
    return(
        <div className="shadow my-2 rounded-lg flex flex-col mt-3">
            <div className=""><Image src={"/blog.avif"} alt="Delhi Card" width={400} height={200} className="rounded-lg h-50 w-full" /></div>
            <div className="ps-3 py-1.5 pt-1">
                <Link href={'/jkd'} className=" text-left">
                    <div className="text-lg text-gray-700">Govind Garden</div>
                    <h5 className="text-xs text-gray-400"><span>Patliputra Colony , New Delhi </span></h5>
                    <h4 className="text-xl text-main-dark mt-1">10,000-20,000</h4>
                </Link>
            </div>
        </div>
    )
}

export default VenueSearch