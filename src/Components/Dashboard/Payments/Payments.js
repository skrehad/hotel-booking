import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payments = () => {
  const booking = useLoaderData();
  console.log(booking);
  // console.log(booking);
  const { name, totalDay, price, startDate, endDate } = booking;

  return (
    <div className="text-black text-center mx-auto mt-20">
      <h3 className="text-3xl">Payment for {name}</h3>
      <p className="text-xl mt-4">
        Please pay <strong>${price * totalDay}</strong> for your booking hotel
        {""} {startDate} at {endDate}.Total Day:{totalDay}
      </p>
      <div className="w-96 text-center my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
