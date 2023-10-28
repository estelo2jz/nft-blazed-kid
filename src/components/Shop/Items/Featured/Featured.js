import React, { useContext } from "react";
import { DataContext } from "../../DataProvider";
import { Link } from "react-router-dom";
import "./featured.scss";

export default function Featured() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="featured">
      {products.slice(9, 20).map((product) => (
        <div className="featured__card" key={product._id}>
          <div className="featured__card__img">
          <Link to={`/shop/${product._id}`}>
            <img src={product.images[0]} alt="" />
          </Link>
          </div>
          <div className="featured__box">
            <h4 title={product.title}>
              <Link to={`/shop/${product._id}`}>{product.title}</Link>
            </h4>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
