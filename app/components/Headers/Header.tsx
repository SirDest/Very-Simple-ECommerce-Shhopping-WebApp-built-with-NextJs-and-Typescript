"use client";

import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

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
      <div className="flex items-center justify-center gap-4">
        <a
          href="/"
          className="text-black text-[15px] flex flex-row items-center outline-none ease-in-out duration-300  hover:scale-110"
        >
          <span className="m-auto text-2xl">
            <CiShoppingCart />
          </span>
          <p className="m-auto text-center text-black">0</p>
          {/* <div className="flex gap-1">
            <span className="text-[10px] m-auto">Cart</span>
            <span className="text-[15px] text-red-700">0</span>
          </div> */}
        </a>
      </div>
    </nav>
  );
};

export default Header;
