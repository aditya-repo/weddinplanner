"use client";

import { useState } from "react";
import Link from "next/link";

// Define interface for props
interface MenuItemProps {
  type: string;
  description: string;
}

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems: { name: string;link: string; props: MenuItemProps }[] = [
    {
      name: "Venues",
      link: "venues",
      props: { type: "Venue", description: "Find the best venues" },
    },
    {
      name: "Vendors",
      link: "vendors",
      props: { type: "Vendor", description: "Top-rated vendors" },
    },
    {
      name: "Photos",
      link: "photo-gallery",
      props: { type: "Photo", description: "Inspiration gallery" },
    },
    {
      name: "Blogs",
      link: "wedding-blog",
      props: { type: "Blog", description: "Latest trends & tips" },
    },
    {
      name: "E-invites",
      link: "e-invites",
      props: { type: "Invite", description: "Digital invitations" },
    },
  ];

  return (
    <div className="relative">
      <ul className="flex">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group hover:border-b-3 py-4 px-2 md:px-5"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={`/${item.link.trim().toLowerCase()}`} title={item.name}>
              {item.name}
            </Link>

            {hoveredItem === item.name && (
              <div className="absolute left-0 top-full z-100">
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
      <p className="mb-6">{description}</p>

      <p className="font-semibold text-main-dark mb-1.5">Makeup</p>
      <p className="mb-1.5">Family Makeup</p>
      <p className="mb-6">Bridal Makeup</p>
    </div>
      <div className="flex-col pl-5">
        <p className="font-semibold text-main-dark mb-1.5">{type}</p>
        <p className="mb-6">{description}</p>

        <p className="font-semibold text-main-dark mb-1.5">Makeup</p>
        <p className="mb-1.5">Family Makeup</p>
        <p className="mb-6">Bridal Makeup</p>
      </div>
      <div className="flex-col pl-5">
        <p className="font-semibold text-main-dark mb-1.5">{type}</p>
        <p className="mb-6">{description}</p>

        <p className="font-semibold text-main-dark mb-1.5">Makeup</p>
        <p className="mb-1.5">Family Makeup</p>
        <p className="mb-6">Bridal Makeup</p>
      </div>
      <div className="flex-col pl-5">
        <p className="font-semibold text-main-dark mb-1.5">{type}</p>
        <p className="mb-6">{description}</p>

        <p className="font-semibold text-main-dark mb-1.5">Makeup</p>
        <p className="mb-1.5">Family Makeup</p>
        <p className="mb-6">Bridal Makeup</p>
      </div>
    </div>
  );
};

export default Navbar;
