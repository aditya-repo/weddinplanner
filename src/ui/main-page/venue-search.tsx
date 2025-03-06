import Image from "next/image"
import Link from "next/link"

const VenueSearch : React.FC = ()=>{
    return(
        <div className="shadow my-4 border border-gray-200 rounded-lg flex items-center p-2">
            <div className="basis-5/12"><Image src={"/delhi_bg.webp"} alt="Delhi Card" width={400} height={200} className="rounded-lg" /></div>
            <div className="basis-7/12 ps-3">
                <h3>Banqut Hall</h3>
                <div className="flex flex-wrap">
                    <Link href={"/kjdssj"} className="text-main-dark">Patna |</Link>
                    <Link href={"/kjdssj"} className="text-main-dark">Patna |</Link>
                    <Link href={"/kjdssj"} className="text-main-dark">Patna |</Link>
                    <Link href={"/kjdssj"} className="text-main-dark">Patna |</Link>
                </div>
                <Link href={'/jkd'} className="text-sm text-main-dark underline">All localities</Link>
            </div>
        </div>
    )
}

export default VenueSearch