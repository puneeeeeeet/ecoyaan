import "./globals.css";
import { ReactNode } from "react";
import { CheckoutProvider } from "../context/CheckoutContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ecoyaan Checkout",
  description: "Simplified checkout flow built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
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