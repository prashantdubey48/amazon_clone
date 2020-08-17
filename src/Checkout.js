import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="chekout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h3>Your Cart is Empty</h3>
            <p>You have no items in your cart. Add using Add to Cart button.</p>
          </div>
        ) : (
          <div className="checkout_title">
            <h3>Your Shopping Cart.</h3>
            {/* list of all items in cart */}
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                price={item.price}
                image={item.image}
                rating={item.rating}
                title={item.title}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
