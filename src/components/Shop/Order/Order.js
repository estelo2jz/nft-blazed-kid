import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";

import "./order.sass";

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
      {/* <div className="order__top__heading">
        <div className="order__top__item">
          <p>Item's coming your way!</p>
        </div>
      </div> */}
      {/* <>
        <div className="order__main__container">
          {cart.map((product) => (
            <div className="order" key={product._id}>
              <div className="order__details__title">
                <p title={product.title}>
                  {product.title} x{product.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </> */}
      <div className="order__bottom__nav">
        <div className="order__bottom__nav__continue">
          <Link to="/shop">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
