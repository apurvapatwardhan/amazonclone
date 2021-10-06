import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";

function SubTotal(props) {
  const [state, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={0}
        prefix={"$"}
        displayType="text"
        decimalScale={2}
        thousandSeparator={true}
        renderText={(value) => (
          <>
            <p className="subtotal__title">
              Subtotal({state.basket.length} items):{" "}
              <strong>
                $
                {state.basket
                  .reduce((prev, curr) => {
                    prev += curr.price;
                    return prev;
                  }, 0)
                  .toFixed(2)}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      ></CurrencyFormat>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
