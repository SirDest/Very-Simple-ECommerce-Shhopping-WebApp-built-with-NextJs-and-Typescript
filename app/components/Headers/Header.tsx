"use client";

import { CiShoppingCart } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  { name: "Products", href: "/products" },
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Electronics", href: "/category/electronics" },
  { name: "Jewelry", href: "/category/jewelry" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full h-fit flex justify-between items-center px-10 py-2 bg-none z-30">
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
        <ul className="flex gap-14">
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
      <a
        href="/cart"
        className="text-black text-2xl flex flex-row items-center outline-none ease-in-out duration-300  hover:scale-110"
      >
        <CiShoppingCart />
        <span className="m-auto text-center text-[15px] text-black">0</span>
      </a>
    </nav>
  );
};

export default Header;
