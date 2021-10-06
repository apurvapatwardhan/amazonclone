import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";

function CheckoutItem(props) {
  const ratings = [];

  for (let i = 0; i < props.rating; i++) {
    ratings.push(1);
  }

  const [state, dispatch] = useStateValue();
  const { id, title, price, rating, src } = props;
  const removeFromBasketHandler = () => {
    console.log("In remove");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        src,
      },
    });
  };

  return (
    <div className="checkoutitem">
      <img src={props.src} className="checkoutitem__image" alt="chimg" />
      <div className="checkoutitem__info">
        <h2>{props.title}</h2>
        <p>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div class="product__rating">
          {ratings.map((st, ind) => (
            <i
              class="fa fa-star icon-color"
              aria-hidden="true"
              key={Math.random().toString()}
            ></i>
          ))}
        </div>
        <button type="button" onClick={() => removeFromBasketHandler()}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
