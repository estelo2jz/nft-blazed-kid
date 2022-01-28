import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";

import "./order.scss";

export default function Order() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
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
    <div className="order__outer">
      <div className="order__top__heading">
        <div className="order__top__continue">
          <p></p>
        </div>
        <div className="order__top__total">
          <h3>Total: $ {total}</h3>
        </div>
      </div>
      <>
        <div className="order__main__container">
          {cart.map((product) => (
            <div className="order" key={product._id}>
              <div className="order__details">
                <div className="order__details__summary">
                  <div className="order__details__title">
                    <p title={product.title}>{product.title} x{product.count}</p>
                  </div>
                  <div className="order__details__desc">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order__bottom__nav">
          <div className="order__bottom__nav__back">
            <Link to="/checkout">Return to Shipping</Link>
          </div>
          <div className="order__bottom__nav__next">
            <Link to="/payment">Continue to Payment</Link>
          </div>
        </div>
      </>
    </div>
  );
}
