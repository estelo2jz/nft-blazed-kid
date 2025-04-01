import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";

import "./shipping.scss";

export default function Shipping() {
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
    <div className="shipping__outer">
      <div className="shipping__top__heading">
        <div className="shipping__top__continue">
          <p></p>
        </div>
        <div className="shipping__top__total">
          <h3>Total: $ {total}</h3>
        </div>
      </div>
      <>
        <div className="shipping__main__container">
          {cart.map((product) => (
            <div className="shipping" key={product._id}>
              <div className="shipping__details">
                <div className="shipping__details__summary">
                  <div className="shipping__details__title">
                    <p title={product.title}>{product.title} x{product.count}</p>
                  </div>
                  <div className="shipping__details__desc">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shipping__bottom__nav">
          <div className="shipping__bottom__nav__back">
            <Link to="/checkout">Return to Shipping</Link>
          </div>
          <div className="shipping__bottom__nav__next">
            <Link to="/payment">Continue to Payment</Link>
          </div>
        </div>
      </>
    </div>
  );
}
