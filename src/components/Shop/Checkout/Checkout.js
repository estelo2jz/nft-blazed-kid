import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";

import "./checkout.scss";

export default function Checkout() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  return (
    <div className="checkout__outer">
      <div>
        <div className="checkout__total__total">
          <h3>Total: $ {total}</h3>
        </div>
        <div className="checkout__heading">
          <p>Item's you have bought!</p>
        </div>
      </div>
      <>
        <div className="checkout__main__container">
          {cart.map((product) => (
            <div className="checkout" key={product._id}>
              <div className="checkout__img__container">
                <img src={product.images[0]} alt="nft-image" />
              </div>
              <div className="checkout__details">
                <div className="checkout__details__summary">
                  <div className="checkout__details__desc">
                    <p>{product.description}</p>
                  </div>
                  <div className="checkout__details__content">
                    <p>{product.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout__bottom__nav">
          <div className="checkout__bottom__nav__back">
            <Link to="/cart">Return to Cart</Link>
          </div>
          <div className="checkout__bottom__nav__next">
            <Link to="/shipping">Continue to Shipping</Link>
          </div>
        </div>
      </>
    </div>
  );
}
