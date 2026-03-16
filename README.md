# Ecoyaan Checkout Flow

This project is a simplified **Checkout Flow** inspired by the Ecoyaan platform. It demonstrates a multi-step checkout experience using **Next.js, React, Tailwind CSS, and Context API** with **Server-Side Rendering (SSR)**.

The application allows users to browse products, add them to a cart, enter shipping details, review the order, and simulate a payment.

---

## 🚀 Live Demo
Deployed App: https://your-vercel-link.vercel.app

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Context API (State Management)
- Next.js Server Components for SSR

---

## ✨ Features

- Product listing page
- Add to cart functionality
- Dynamic cart count in navbar
- Multi-step checkout flow
- Shipping address form with validation
- Order summary and confirmation
- Simulated payment
- Responsive UI for mobile and desktop
- Clean component-based architecture

---

## 🛒 Checkout Flow

Home → Cart → Shipping Address → Payment → Success

### 1. Home Page
Displays eco-friendly products where users can browse and add items to the cart.

### 2. Cart Page
Shows added items with quantity and pricing. Displays subtotal, shipping fee, and grand total.

### 3. Shipping Address
Form to collect user details including:
- Full Name
- Email
- Phone Number
- PIN Code
- City
- State

Basic validation is implemented.

### 4. Payment Page
Displays the order summary and shipping details. User can click **Pay Securely** to simulate payment.

### 5. Success Page
Displays a confirmation message when the order is successfully placed.

---

## ⚡ Server-Side Rendering

Product data is fetched using **Next.js Server Components**, which enables server-side rendering before sending HTML to the client.

Benefits:
- Faster initial page load
- Better SEO
- Improved performance

---

## 🧠 State Management

Global state is managed using **React Context API**.

The context stores:
- Cart items
- Product quantities
- Shipping address details

This allows data sharing across all checkout steps.

---


## 💻 Run Locally

Clone the repository

Navigate into the project


cd ecoyaan-checkout


Install dependencies


npm install


Run the development server


npm run dev


Open the browser and visit


http://localhost:3000


---

## ☁️ Deployment

The application is deployed using **Vercel**.

Steps:
1. Push the project to GitHub
2. Import the repository into Vercel
3. Deploy

---

## 🔮 Future Improvements

Possible enhancements include:
- Persist cart using localStorage
- Increase / decrease product quantity
- Remove items from cart
- Payment gateway integration
- Backend API integration
- User authentication

---

## 👨‍💻 Author

Puneet Chhabra