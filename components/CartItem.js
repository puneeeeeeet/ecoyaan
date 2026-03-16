export default function CartItem({ item }) {
    return (
      <div className="flex items-center gap-4 border-b py-4">
        <img src={item.image} className="w-20 h-20" />
  
        <div className="flex-1">
          <h2 className="font-semibold">{item.product_name}</h2>
          <p>₹{item.product_price}</p>
        </div>
  
        <div>
          Qty: {item.quantity}
        </div>
  
        <div>
          ₹{item.product_price * item.quantity}
        </div>
      </div>
    );
  }