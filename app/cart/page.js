"use client";

import { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import Link from "next/link";
import StepIndicator from "../../components/StepIndicator";

export default function CartPage() {

  const { cart } = useContext(CheckoutContext);

  const shippingFee = 50;

  return (
    <div>

      <StepIndicator currentStep={1} />

      <h1 className="text-3xl font-bold mb-6">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p>Your cart is empty</p>
      )}

      {cart.map((item) => (
        <CartItem key={item.product_id} item={item} />
      ))}

      {cart.length > 0 && (
        <>
          <OrderSummary
            items={cart}
            shipping={shippingFee}
          />

          <Link href="/checkout">
            <button className="bg-green-600 text-white px-6 py-3 mt-6 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}

    </div>
  );
}