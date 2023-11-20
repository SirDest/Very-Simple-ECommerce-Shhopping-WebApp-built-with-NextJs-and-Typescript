import Hero from "./components/Hero";
import Items from "./components/Items";
import Products from "./components/Scroll/Products";
import Electronics from "./components/categories/Electronics";
import JewelryScroll from "./components/categories/Jewelry";
import Men from "./components/categories/Men";
import Women from "./components/categories/Women";

export default function Home() {
  return (
    <main className="relative flex-col">
      <Hero />
      <Items />
      <Products />
      <div className="flex flex-col">
        <Men />
        <Women />
        <Electronics />
        <JewelryScroll />
      </div>
    </main>
  );
}
