import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faXTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link"

const menuCategories = [
    {
        category: "Planning",
        items: [
            { title: "Start Planning", href: "/start-planning" },
            { title: "Search By Vendor", href: "/search-vendor" },
            { title: "Search By City", href: "/search-city" },
            { title: "Download Our App", href: "/download-app" },
            { title: "Top Rated Vendors", href: "/top-rated-vendors" },
            { title: "Destination Wedding", href: "/destination-wedding" },
            { title: "Wedding Ideas", href: "/wedding-ideas" }
        ]
    },
    {
        category: "Inspiration & Blogs",
        items: [
            { title: "Wedding Blog", href: "/wedding-blog" },
            { title: "Wedding Inspiration Gallery", href: "/wedding-inspiration-gallery" },
            { title: "Real Wedding", href: "/real-wedding" },
            { title: "Submit Wedding", href: "/submit-wedding" },
            { title: "Photo Gallery", href: "/photo-gallery" }
        ]
    },
    {
        category: "Bridal & Groom",
        items: [
            { title: "Bridal Wear", href: "/bridal-wear" },
            { title: "Wedding Jewellery", href: "/wedding-jewellery" },
            { title: "Bridal Makeup & Hair", href: "/bridal-makeup-hair" },
            { title: "Wedding Decor", href: "/wedding-decor" },
            { title: "Wedding Photography", href: "/wedding-photography" },
            { title: "Groom Wear", href: "/groom-wear" },
            { title: "Invitations & Favors", href: "/invitations-favors" },
            { title: "Wedding Accessories", href: "/wedding-accessories" },
            { title: "Mehendi Designs", href: "/mehendi-designs" },
            { title: "Home", href: "/" }
        ]
    },
    {
        category: "Company",
        items: [
            { title: "About WedMeGood", href: "/about" },
            { title: "Careers", href: "/careers" },
            { title: "Contact Us", href: "/contact" },
            { title: "Site Map", href: "/site-map" },
            { title: "Terms & Conditions", href: "/terms" },
            { title: "Privacy Policy", href: "/privacy" },
            { title: "Cancellation Policy", href: "/cancellation-policy" },
            { title: "Wedding Invitation Maker", href: "/wedding-invitation-maker" }
        ]
    },
    {
        category: "Wedding Invitations",
        items: [
            { title: "Wedding Card Designs", href: "/wedding-card-designs" },
            { title: "Save the Date Templates", href: "/save-the-date-templates" },
            { title: "Invitation Video Templates", href: "/invitation-video-templates" }
        ]
    }
];


const Footer: React.FC = () => {
    return (
        <div>
            <div className="bg-gray-200 pt-10">
                <div className="mx-auto md:w-[1300px] px-6">
                    <FooterCompanyInfo />
                </div>
            </div>
            <div className="bg-gray-200 py-10">
                <div className="mx-auto md:w-[1300px] grid grid-cols-2 md:grid-cols-5 gap-4 px-6">
                    {menuCategories.map((menu) => (
                        <div key={menu.category}>
                            <h3 className="font-semibold text-main-darker mb-3">{menu.category}</h3>
                            <ul className="space-y-2">
                                {menu.items.map((list) => (
                                    <li key={list.title}>
                                        <Link href={list.href} className="text-gray-600 text-sm md:text-md hover:text-main-dark hover:underline">
                                            {list.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 py-4 border-t border-gray-300 text-sm text-gray-600">
                <div className="mx-auto md:w-[1300px] flex justify-between items-center">
                    <div className="flex gap-3">
                        <div>© 2025</div>
                        <div>Weddin Planner</div>
                    </div>
                    <div className="flex gap-3">
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const FooterCompanyInfo: React.FC = () => {
    return (
        <div className="md:flex gap-6 border-b border-gray-300 pb-4 pt-4">
            <div className="basis-6/12 mb-6">
                <h3 className="font-semibold text-main-darker mb-3"><span className="text-2xl">WeddinPlanner</span> - Your Personal Wedding Planner</h3>
                <p className="text-gray-700 mb-2">Plan your wedding with Us</p>
                <p className="text-gray-600 md:text-md text-sm text-justify">Get best quote from Radisson Blu Hotel New Delhi Paschim Vihar and book your date! Send enquiry to your selected list of Wedding Venues at WedMeGood and choose the best. Browse for more Wedding Venues in West Delhi, Delhi NCR and more wedding vendors in Delhi NCR at WedMeGood and plan your wedding hassle free.</p>
            </div>
            <div className="basis-4/12 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Registered Address</h3>
                    <p className="text-gray-700">Second Floor, Ocus Technopolis, Sector 54 Golf Course Road, Gurgaon, Haryana, India, 122002</p>
                    <div>
                        <h5 className="font-semibold text-gray-800 mb-3 mt-5">Get Latest Blog Alerts</h5>
                        <div className="flex pr-3">
                            <input type="text" className="outline-none border p-2 flex-grow border-gray-300 rounded-none" placeholder="Email*" />
                            <button type="submit" className="bg-main-dark w-30 text-white px-4" >Submit</button>
                        </div>
                    </div>
            </div>
            <div className="basis-2/12 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Follow us on:</h3>
                <ul className="text-gray-700">
                    <li className="mb-1.5"><FontAwesomeIcon icon={faFacebook} className="w-6" /> Facebook</li>
                    <li className="mb-1.5"><FontAwesomeIcon icon={faXTwitter} className="w-6" /> Twitter</li>
                    <li className="mb-1.5"><FontAwesomeIcon icon={faPinterest} className="w-6" /> Pinterest</li>
                    <li className="mb-1.5"><FontAwesomeIcon icon={faInstagram} className="w-6" /> Instagram</li>
                    <li className="mb-1.5"><FontAwesomeIcon icon={faYoutube} className="w-6" /> Youtube</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer