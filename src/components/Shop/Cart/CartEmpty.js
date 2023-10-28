import React from "react";
import './cartEmpty.scss';

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__container">
        <p>Your Cart Is Empty!</p>
      </div>
    </div>
  );
};

export default CartEmpty;
