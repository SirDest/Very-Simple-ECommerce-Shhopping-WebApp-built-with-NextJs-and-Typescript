"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProductScrollCard from "./ProductScrollCard";

const ProductScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="h-screen top-0 flex overflow-hidden items-center sticky ">
        <motion.div style={{ x }} className="flex">
          <ProductScrollCard />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductScroll;
