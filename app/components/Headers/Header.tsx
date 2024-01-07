"use client";

import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const links = [
  { name: "Products", href: "/products" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/Girls" },
  { name: "Electronics", href: "/electronics" },
  { name: "Jewelry", href: "/jewelry" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full h-fit flex justify-between items-center px-4 py-2 bg-none z-30">
      <div className="group hover:scale-125 ease-in-out duration-300">
        <a
          href="/"
          className="text-black group hover:text-green-600 ease-in-out duration-300 font-bold md:text-[25px]"
        >
          ad
          <span className="text-green-600 group-hover:text-black ease-in-out duration-300">
            EC
          </span>
        </a>
      </div>
      <div className="lg:flex hidden ">
        <ul className="flex gap-16">
          {links.map(({ name, href }, i) => (
            <li key={i}>
              {pathname === href ? (
                <a className="text-black font-semibold" href={href}>
                  {name}
                </a>
              ) : (
                <a className="text-gray-400 hover:text-black" href={href}>
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a
          href="/"
          className="text-black flex flex-col gap-2 items-center md:px-5 md:py-3 px-3 py-2 border-2 border-green-600 outline-none ease-in-out duration-300  hover:bg-green-600"
        >
          <span className="m-auto">
            <FaShoppingCart />
          </span>
          <div className="flex gap-1">
            <span className="text-[10px] m-auto">Cart</span>
            <span className="text-[13px] text-red-700">0</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
