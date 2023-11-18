import Header from "./components/Headers/Header";
import ResHeader from "./components/Headers/ResHeader";
import Hero from "./components/Hero";
import Items from "./components/Items";

export default function Home() {
  return (
    <main className="relative flex-col">
      <div className="flex flex-col w-full absolute h-fit">
        <Header />
        <ResHeader />
      </div>
      <Hero />
      <Items />
    </main>
  );
}
