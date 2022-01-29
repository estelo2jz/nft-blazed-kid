import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";

import "./payment.scss";

export default function Payment() {
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

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="payment__outer">
      <div className="payment__top__heading">
        <div className="payment__top__continue">
          <p></p>
        </div>
        <div className="payment__top__total">
          <h3>Total: $ {total}</h3>
        </div>
      </div>
      <>
        <div className="payment__main__container">
          {cart.map((product) => (
            <div className="payment" key={product._id}>
              <div className="payment__details">
                <div className="payment__details__summary">
                  <div className="payment__details__title">
                    <p title={product.title}>
                      {product.title} x{product.count}
                    </p>
                  </div>
                  <div className="payment__details__desc">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="payment__bottom__nav">
          <div className="payment__bottom__nav__back">
            <Link to="/checkout">Return to Shipping</Link>
          </div>
          <div className="payment__bottom__nav__next">
            <Link to="/order" onClick={() => emptyCart()}>
              Complete Order
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
