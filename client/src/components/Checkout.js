import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
export default function Checkout({ amount }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderstate;
  const dispatch = useDispatch();
  function validate() {
    if (!localStorage.getItem("currentUser")) {
      window.location.href = "/login";
    }
  }
  function tokenhandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }
  return (
    <div>
      {loading && <Loader />}
      {success && <Success success="Your Order Placed Successfully" />}
      {error && <Error error="Something Went wrong" />}
      <StripeCheckout
        token={tokenhandler}
        stripeKey="pk_test_51J458dSEAa2AmUQa2umsm6BTIdzY80MWhxnc622UIIoP1bzQZumd2KXUwo43mF1wbKj5BSfk4w2O7d26ifxqQaVq00BqRnhAAW"
        amount={amount * 100}
        shippingAddress
        billingAddress
        currency="INR"
      >
        <button className="btn" onClick={validate}>
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}
