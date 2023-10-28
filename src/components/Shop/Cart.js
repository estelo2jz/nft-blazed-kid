import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

import CartEmpty from "../Shop/Cart/CartEmpty";
import "./cart.scss";

export default function Cart() {
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

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    // if (window.confirm("Do you want to delete this product?")) {
    // }
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  if (cart.length === 0) return <CartEmpty />;

  return (
    <div className="cart__outer">
      <div className="cart__total__payment">
        <Link to="/shop">continue shopping</Link>
      </div>
      <>
        <div className="cart__main__container">
          {cart.map((product) => (
            <div className="cart" key={product._id}>
              <div className="cart__img__container">
                <img src={product.images[0]} alt="nft-image" />
              </div>
              <div className="cart__details">
                <div className="cart__details__summary">
                  <div className="cart__details__title">
                    <p title={product.title}>{product.title}</p>
                  </div>
                  <div className="cart__details__desc">
                    <p>{product.description}</p>
                  </div>
                  <div className="cart__details__content">
                    <p>{product.content}</p>
                  </div>
                  <div className="cart__details__price">
                    <p>${product.price}</p>
                  </div>
                </div>
                <div className="cart__amount">
                  <button
                    className="cart__count"
                    onClick={() => reduction(product._id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span>{product.count}</span>
                  <button
                    className="cart__count"
                    onClick={() => increase(product._id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>

                <div
                  className="cart__delete"
                  onClick={() => removeProduct(product._id)}
                >
                  X
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart__total">
          <div className="cart__total__total">
            <p>Total: <span>$ {total}</span></p>
          </div>
          <div className="cart__total__payment">
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </>
    </div>
  );
}
