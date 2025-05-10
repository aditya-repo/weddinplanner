import Link from "next/link";

const category = [
  { name: "Sherwani or Suits", link: "/venues", color: "#f6b896" },
  { name: "Salons for Men", link: "/photographers", color: "#d4bbd0" },
  { name: "Horses on Hire", link: "/bridal-makeup", color: "#e5d3bd" },
  { name: "Bachelor Parties ", link: "/vendors", color: "#dfb2ad" },
];

const GroomCard: React.FC = () => {
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

export default GroomCard;
