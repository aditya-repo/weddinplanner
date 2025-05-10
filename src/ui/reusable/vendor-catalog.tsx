import Link from "next/link";

const category = [
  { name: "Banquet & Halls", link: "/venues", color: "#f6b896" },
  { name: "Photographers", link: "/photographers", color: "#d4bbd0" },
  { name: "Planning & Decors", link: "/planning-decors", color: "#f2d8d4" },
  { name: "Makeup & Bridal", link: "/bridal-makeup", color: "#e5d3bd" },
  { name: "Food & Catering", link: "/food-catering", color: "#d8dffc" },
  { name: "Other Vendors + ", link: "/vendors", color: "#dfb2ad" },
];

const VendorCatalog: React.FC = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {category.map((item) => (
        <div
          key={item.name} className=" flex flex-col items-center justify-center mb-3" >
          <div
            className="border border-gray-200 shadow h-24 w-24 md:h-40 md:w-40 rounded-full px-5 py-5 text-center"
            style={{ backgroundColor: item.color }}
          >
          </div>

            <Link href={item.link} className="text-gray-700 md:text-lg text-xs mt-2.5 flex justify-center font-semibold">
              <h4>{item.name}</h4>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default VendorCatalog;
