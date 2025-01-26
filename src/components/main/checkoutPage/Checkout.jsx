import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"; // Separate form component

// Load Stripe public key from environment variable
const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-cyan-200">
      <h2 className="text-3xl font-bold text-center text-[#164193] mb-6">Secure Payment</h2>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;