import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product(props) {
  const ratings = [];

  for (let i = 0; i < props.rating; i++) {
    ratings.push(1);
  }

  const [state, dispatch] = useStateValue();

  const { id, title, price, rating, src } = props;

  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
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
    <div className="product">
      <div className="product__description">{props.title}</div>
      <div className="product__price">
        <small>$</small>
        <strong>{props.price}</strong>
      </div>
      <div class="product__rating">
        {ratings.map((st, ind) => (
          <i class="fa fa-star icon-color" aria-hidden="true" key={ind}></i>
        ))}
      </div>
      <div className="product__image__div">
        <img src={props.src} alt="prd_image" className="product_image" />
      </div>
      <div className="product__basket">
        <button type="button" onClick={addToBasketHandler}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
