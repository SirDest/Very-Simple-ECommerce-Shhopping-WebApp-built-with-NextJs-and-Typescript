"use client";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Products", href: "/products" },
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Electronics", href: "/category/electronics" },
  { name: "Jewelry", href: "/category/jewelry" },
];

const ResHeader = () => {
  const pathname = usePathname();
  return (
    <div className="z-10">
      <ul className="lg:hidden text-[14px] flex justify-evenly py-2 w-full h-fit bg-none">
        {links.map(({ name, href }, i) => (
          <li key={i}>
            {pathname === href ? (
              <a className="text-black font-bold" href={href}>
                {name}
              </a>
            ) : (
              <a className="text-black hover:text-green-600" href={href}>
                {name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResHeader;
