import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navigation: React.FC = () => {
    return (
        <div className="w-full bg-main-dark flex justify-between px-10 gap-x-12 text-white h-[58px]">
            <div className="flex gap-10">

                <div className="text-3xl py-2">Wedding Planner</div>
                <div className="relative">
                    <ul className="flex">
                        {["Venues", "Vendors", "Photos", "Blogs", "E-invites"].map((item, index) => (
                            <li key={index} className=" hover:border-b-3 py-4 px-5">
                                <Link href={`/${item.trim().toLowerCase()}`} title={item.trim()} className="">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute top-[58px]">

                        <NavbarBoard />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="bg-main-darker flex p-2 rounded-full "><FontAwesomeIcon icon={faSearch} className="w-4 h-4" /></div>
                <div className="bg-main-darker flex py-1 rounded-full px-10">Login</div>
            </div>
        </div>
    );
};

const NavbarBoard: React.FC = () => {
    return (
        <div className="w-[720px] h-20 bg-main-darker grid grid-cols-4 gap-4 text-dark">
            <div className="flex-col pl-5">
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
            </div>
            <div className="flex-col pl-5">
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
            </div>
            <div className="flex-col pl-5">
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
            </div>
            <div className="flex-col pl-5">
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
                <div className="text-dark">Photographer</div>
            </div>
        </div>
    )
}

export default Navigation;