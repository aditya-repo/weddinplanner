import Link from "next/link";

const category = [
  { name: "Venues", link: "/venues", color: "#f6b896" },
  { name: "Vendors", link: "/vendors", color: "#dfb2ad" },
  { name: "Photographers", link: "/photographers", color: "#d4bbd0" },
  { name: "Planning & Decors", link: "/planning-decors", color: "#f2d8d4" },
  { name: "Makeup & Bridal", link: "/bridal-makeup", color: "#e5d3bd" },
  { name: "Food & Catering", link: "/food-catering", color: "#d8dffc" },
];

const VendorCatalog: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {category.map((item) => (
        <div
          key={item.name}
          className="border border-gray-200 shadow px-5 py-5 text-center"
          style={{ backgroundColor: item.color }} 
        >
          <Link href={item.link} className="text-gray-700 text-lg font-semibold">
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VendorCatalog;
