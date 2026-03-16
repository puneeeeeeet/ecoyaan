export default function OrderSummary({ items, shipping }) {

    const subtotal = items.reduce(
      (acc, item) => acc + item.product_price * item.quantity,
      0
    );
  
    const total = subtotal + shipping;
  
    return (
      <div className="border p-4 rounded-lg mt-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
  
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
  
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping}</span>
        </div>
  
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    );
  }