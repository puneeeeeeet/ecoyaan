"use client";

import Link from "next/link";
import { useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";

export default function Navbar() {

  const { cart } = useContext(CheckoutContext);

  return (
    <div className="flex justify-between items-center mb-8">

      <Link href="/">
        <h1 className="text-2xl font-bold">
          Ecoyaan Store
        </h1>
      </Link>

      <Link href="/cart">
        <button className="border px-4 py-2 rounded">
          Cart ({cart.length})
        </button>
      </Link>

    </div>
  );
}