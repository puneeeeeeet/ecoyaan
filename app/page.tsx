import { cartData } from "../lib/mockData";
import ProductCard from "../components/ProductCard";

export default async function HomePage() {

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(cartData), 500)
  );

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Eco-Friendly Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.cartItems.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}