"use client";
import { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import { cartData } from "../../lib/mockData";
import { useRouter } from "next/navigation";
import StepIndicator from "../../components/StepIndicator";

export default function PaymentPage() {

  const { address } = useContext(CheckoutContext);
  const router = useRouter();

  const subtotal = cartData.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cartData.shipping_fee;

  return (
    <div>
<StepIndicator currentStep={3} />

      <h1 className="text-3xl font-bold mb-6">
        Confirm Order
      </h1>

      <div className="border p-4 mb-4">

        <h2 className="font-bold mb-2">
          Shipping Address
        </h2>

        <p>{address?.name}</p>
        <p>{address?.email}</p>
        <p>{address?.phone}</p>
        <p>{address?.city}, {address?.state}</p>

      </div>

      <div className="border p-4 mb-4">

        <h2 className="font-bold mb-2">
          Total: ₹{total}
        </h2>

      </div>

      <button
        onClick={() => router.push("/success")}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Pay Securely
      </button>

    </div>
  );
}