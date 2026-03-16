"use client";

import { useContext, useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CheckoutContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="border p-4 rounded-lg transition hover:shadow-md">

      <img
        src={product.image}
        className="w-full h-40 object-cover mb-3"
      />

      <h2 className="text-lg font-semibold">
        {product.product_name}
      </h2>

      <p className="text-green-600 font-bold">
        ₹{product.product_price}
      </p>

      <button
        onClick={handleAdd}
        className={`mt-3 px-4 py-2 rounded text-white
        ${added ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>

    </div>
  );
}