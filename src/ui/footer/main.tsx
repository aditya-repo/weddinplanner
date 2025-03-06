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

        <div className="bg-gray-100 py-20">
            <div className="mx-auto md:w-[1300px] grid grid-cols-2 md:grid-cols-5 gap-4 px-6">
                {menuCategories.map((menu) => (
                    <div key={menu.category}>
                        <h3 className="font-semibold text-main-darker mb-3">{menu.category}</h3>
                        <ul className="space-y-2">
                            {menu.items.map((list) => (
                                <li key={list.title}>
                                    <Link href={list.href} className="text-gray-600 hover:text-main-dark hover:underline">
                                        {list.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-gray-100 py-4 border-t border-gray-300 text-sm text-gray-600">
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

export default Footer