import Image from "next/image"
import Link from "next/link"

const PopularSearch: React.FC = () => {
    return (
        <div className="shadow my-2 rounded-lg md:p-1">
            <div><Image src={"/photography.webp"} alt="Delhi Card" width={400} height={200} className="rounded-t-lg" /></div>
            <div className="pt-2 pb-3"> <Link href={'/jkd'} className="text-main-dark text-left ps-3 text-sm">All Photographer</Link></div>
        </div>
    )
}

export default PopularSearch