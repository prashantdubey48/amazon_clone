import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ id, title, price, image, rating }) {
    const [{ basket },dispatch] = useStateValue();

    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }
  return (
    <div className="checkout_product">
      <img className="product_image" src={image} alt="" />
     
      <div className="checkout_product_info">
        <p class='title'>{title}</p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
