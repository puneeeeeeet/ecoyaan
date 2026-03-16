import "./globals.css";
import { CheckoutProvider } from "../context/CheckoutContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ecoyaan Checkout"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CheckoutProvider>
  <div className="max-w-4xl mx-auto p-6">
    <Navbar />
    {children}
  </div>
</CheckoutProvider>
      </body>
    </html>
  );
}