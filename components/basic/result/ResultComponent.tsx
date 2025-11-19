"use client";

import { SparklesText } from "@/components/ui/sparkles-text";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Produk A", price: "Rp100.000" },
  { id: 2, name: "Produk B", price: "Rp150.000" },
  { id: 3, name: "Produk C", price: "Rp200.000" },
];

const ResultComponent = () => {
  return (
    <div className="bg-main flex flex-col min-h-screen items-center p-6 gap-10">
      {/* Header */}
      <div className="bg-card-main w-[80vw] md:w-[50vw] h-[10vh] p-8 flex items-center justify-center rounded-xl">
        <SparklesText className="text-white text-3xl font-semibold tracking-wide">
          Personal Color
        </SparklesText>
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-card-main p-6 rounded-xl shadow-lg flex flex-col items-center"
          >
            <h2 className="text-white text-xl font-bold">{product.name}</h2>
            <p className="text-white mt-2">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResultComponent;
