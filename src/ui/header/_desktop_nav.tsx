"use client"; // Ensure this runs only on the client side in Next.js

import { useState } from "react";
import Link from "next/link";

// Define interface for props
interface MenuItemProps {
  type: string;
  description: string;
}

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems: { name: string; props: MenuItemProps }[] = [
    {
      name: "Venues",
      props: { type: "Venue", description: "Find the best venues" },
    },
    {
      name: "Vendors",
      props: { type: "Vendor", description: "Top-rated vendors" },
    },
    {
      name: "Photos",
      props: { type: "Photo", description: "Inspiration gallery" },
    },
    {
      name: "Blogs",
      props: { type: "Blog", description: "Latest trends & tips" },
    },
    {
      name: "E-invites",
      props: { type: "Invite", description: "Digital invitations" },
    },
  ];

  return (
    <div className="relative">
      <ul className="flex">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group hover:border-b-3 py-4 px-5"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={`/${item.name.trim().toLowerCase()}`} title={item.name}>
              {item.name}
            </Link>

            {/* Show NavbarBoard only when hovered */}
            {hoveredItem === item.name && (
              <div className="absolute left-0 top-full">
                <NavbarBoard {...item.props} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavbarBoard: React.FC<MenuItemProps> = ({ type, description }) => {
  return (
    <div className="w-[820px] bg-white text-gray-700 grid grid-cols-4 gap-4 py-4">
      <div className="flex-col pl-5">
        <p className="font-semibold text-main-dark mb-1.5">{type}</p>
        <p className="mb-6">{description}kldko</p>

        <p className="font-semibold text-main-dark mb-1.5">Makeup</p>
        <p className="mb-1.5">Family Makeup</p>
        <p className="mb-6">Bridal Makeup</p>
      </div>
      <div className="flex-col pl-5">
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
      </div>
      <div className="flex-col pl-5">
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
      </div>
      <div className="flex-col pl-5">
        <p className="mb-1.5">Photographer</p>
        <p className="mb-1.5">Photographer</p>
      </div>
    </div>
  );
};

export default Navbar;
