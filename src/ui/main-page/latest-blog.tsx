import Image from "next/image"
import Link from "next/link"

const LatestBlog: React.FC = ()=>{
    return(
        <div className="shadow my-2 border border-gray-200 rounded-lg flex flex-col">
        <div className=""><Image src={"/blog.avif"} alt="Delhi Card" width={400} height={200} className="rounded-t-lg h-50 w-full" /></div>
        <div className="ps-3 py-1.5 pt-1">
            <Link href={'/jkd'} className=" text-left">
                <div className="text-lg text-gray-700 py-2">8 Resorts In Delhi/NCR Which Are Perfect For A Staycation!</div>
                <p className="text-sm text-gray-500">Whether it&apos;s for your first night after the wedding, your minimoon or just for a weekend away. </p>
                <h4 className="text-xs text-gray-400 py-3"><span>16 Nov, 2018</span></h4>
            </Link>
        </div>
    </div>
    )
}

export default LatestBlog