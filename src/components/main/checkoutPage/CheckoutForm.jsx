import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAxiosSecure from "../../../customHooks/UseAxiosSecure";
import UseCart from "../../../customHooks/UseCart";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const [refetch, cartData] = UseCart();
  const { user } = AuthProviderHook();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  // Calculate total items and total price
  const totalPrice = cartData?.reduce(
    (total, item) => total + parseInt(item.productPrice),
    0
  );

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    // Example payment processing logic
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("PaymentMethod created:", paymentMethod);
    }

    // confirm payment
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.error(confirmError);
    } else {
      console.log("PaymentMethod created:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        alert("your payment is completed");
        console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

        const payment = {
          email: user.email,
          price: totalPrice,
          date: moment().format("YYYY-MM-DD HH:mm:ss"),
          cartId: cartData.map((product) => product._id),
          productId: cartData.map((product) => product.productId),
          status: "pending",
          currency: paymentIntent.currency,
          transactionId: paymentIntent.id,
        };

        axiosSecure.post("/payments", payment).then((res) => {
          if (res.data?.result?.insertedId) {
            refetch();
            alert("complete payment insert");
            navigate('/dashboard/paymentHistory')
          }
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Secure Checkout
        </h2>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Total Amount: <span className="text-red-500">{totalPrice}</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
              className="py-3 px-4 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Pay Securely
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
