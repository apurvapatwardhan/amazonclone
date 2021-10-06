import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://th.bing.com/th/id/OIP.QrQ1eCc2FUlq_MJJxQwiAgHaEJ?w=322&h=181&c=7&r=0&o=5&pid=1.7"
          alt="ad"
          className="checkout__ad"
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        <div className="checkout__items">
          {state.basket.map((item, index) => (
            <CheckoutItem
              src={item.src}
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={index}
              id={item.id}
              index={index}
              
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal></SubTotal>
      </div>
    </div>
  );
}

export default Checkout;
