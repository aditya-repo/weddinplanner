import Link from "next/link"
const weddingServices = [
    { title: "Wedding Photographers", link: "/wedding-photographers" },
    { title: "Wedding Jewellery", link: "/wedding-jewellery" },
    { title: "Bridal Makeup Artists", link: "/bridal-makeup-artists" },
    { title: "Bridal Wear", link: "/bridal-wear" },
    { title: "Groom Wear", link: "/groom-wear" },
    { title: "Wedding Decorators", link: "/wedding-decorators" },
    { title: "Wedding Catering", link: "/wedding-catering" },
    { title: "Wedding Cards", link: "/wedding-cards" },
    { title: "Wedding Cakes", link: "/wedding-cakes" },
    { title: "Wedding Venues", link: "/wedding-venues" },
    { title: "Wedding Videography", link: "/wedding-videography" },
    { title: "Bridal Mehendi Artists", link: "/bridal-mehendi-artists" },
    { title: "Trousseau Packers", link: "/trousseau-packers" },
    { title: "Sangeet Choreographers", link: "/sangeet-choreographers" },
    { title: "Wedding Favors", link: "/wedding-favors" },
    { title: "Wedding Planners", link: "/wedding-planners" },
    { title: "Wedding Accessories", link: "/wedding-accessories" },
    { title: "DJ", link: "/dj" },
    { title: "Family Makeup", link: "/family-makeup" },
    { title: "Wedding Pandits / Priests", link: "/wedding-pandits-priests" },
    { title: "Bartenders", link: "/bartenders" },
    { title: "Wedding Entertainment", link: "/wedding-entertainment" },
    { title: "Pre Wedding Photographers", link: "/pre-wedding-photographers" },
    { title: "Pre Wedding Shoot Locations", link: "/pre-wedding-shoot-locations" },
    { title: "Beauty and Wellness", link: "/beauty-and-wellness" }
  ];
  


const VendorsLink: React.FC = () => {
    return (
        <div className="mt-5 px-4">
            <h4 className="mb-3">Wedding Vendors</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2">
                {weddingServices.map((item) => (
                    <Link href={item.link} key={item.title} className="text-gray-500 text-xs md:text-sm text-xs hover:text-main-dark hover:underline">
                        <h4>{item.title}</h4>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default VendorsLink