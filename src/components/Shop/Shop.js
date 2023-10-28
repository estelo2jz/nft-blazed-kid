import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import "./shop.sass";

export default function Shop() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="shop">
      {products.slice(0, 9).map((product) => (
        <div className="shop__card" key={product._id}>
          <div className="shop__card__img">
            <Link to={`/shop/${product._id}`}>
              <img src={product.images[0]} alt="" />
            </Link>
          </div>
          <div className="shop__box">
            <h3 title={product.title}>
              <Link to={`/shop/${product._id}`}>{product.title}</Link>
            </h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            {/* <button onClick={() => addCart(product._id)}>
                Add to cart
              </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
