import { ProductType } from "@/typings";
import Image from "next/image";

const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType[] = await res.json();
  const productData = data.slice(0, 7);
  return productData;
};

const ProductScrollCard = async () => {
  const product = await products();

  return (
    <div className="flex gap-4">
      {product.map(
        ({ title, id, category, description, image, price, rating }) => (
          <div
            key={id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-1 transition-transform duration-300 group-hover:scale-110 brightness-50"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center text-white">
              <p className="p-8 pb-0 text-2xl font-black uppercase text-white font-serif">
                {title}
              </p>
              <p className="p-8 text-2xl text-white">${price}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductScrollCard;
