import Link from "next/link";

const category = [
  { name: "Bridal Wear", link: "/venues", color: "#f6b896" },
  { name: "Weding Jewellery", link: "/photographers", color: "#d4bbd0" },
  { name: "Bridal Makeup Artists", link: "/bridal-makeup", color: "#e5d3bd" },
  { name: "Bridal Mehandi Artists", link: "/vendors", color: "#dfb2ad" },
];

const BrideCard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {category.map((item) => (
        <div
          key={item.name} className=" flex flex-col items-center justify-center mb-3" >
          <div
            className="border border-gray-200 shadow h-40 w-40 md:h-60 md:w-60 px-5 py-5 text-center"
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

export default BrideCard;
