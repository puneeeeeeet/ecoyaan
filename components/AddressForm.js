"use client";
import { useContext, useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { useRouter } from "next/navigation";

export default function AddressForm() {

  const { setAddress } = useContext(CheckoutContext);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      alert("Phone must be 10 digits");
      return;
    }

    setAddress(form);
    router.push("/payment");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Full Name"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <input
        name="pin"
        placeholder="PIN Code"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <input
        name="state"
        placeholder="State"
        className="border p-2 w-full"
        required
        onChange={handleChange}
      />

      <button className="bg-green-600 text-white px-6 py-3 rounded">
        Continue to Payment
      </button>

    </form>
  );
}