"use client";

import { useState } from "react";
import MenuItemHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import { Boxes, HomeIcon, Settings2 } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("");

  const menus = [
    { route: "/", icon: HomeIcon, label: "Dashboard" },
    { route: "", label: "management", header: true },
    { route: "/sales-order", icon: Boxes, label: "Sales Order" },
    { route: "/settings", icon: Settings2, label: "Settings" },
  ];

  return (
    <div className="flex w-[220px] flex-col bg-base-secondary dark:bg-base-secondary-dark  p-4 gap-6 rounded-lg shadow-xl">
      {/* Logo */}
      <div className="flex justify-center items-center gap-4">
        <img src="https://img.logoipsum.com/289.svg" alt="Logo" className="w-2/3 h-12" />
      </div>

      {/* Separator */}
      <hr className="border-gray-400 dark:border-gray-700" />

      {/* Menu Items */}
      <div className="flex flex-col gap-3">
        {menus.map(({ route, icon, label, header }) => {
          if (header) {
            return <MenuItemHeader label={label} />;
          }

          return (
            <MenuItem
              label={label}
              icon={icon}
              isActive={active === route}
              onClick={() => setActive(route)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
