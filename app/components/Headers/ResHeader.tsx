"use client";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Men", href: "/men" },
  { name: "Women", href: "/Girls" },
  { name: "Electronics", href: "/electronics" },
  { name: "Jewelry", href: "/jewelry" },
];

const ResHeader = () => {
  const pathname = usePathname();
  return (
    <div className="z-30">
      <ul className="lg:hidden flex justify-evenly py-2 w-full h-fit bg-none">
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
