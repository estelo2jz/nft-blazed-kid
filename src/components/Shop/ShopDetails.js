import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";
import DetailsThumb from "./ShopDetailsThumb";
import "./shopDetails.scss";

import Featured from "../Shop/Items/Featured/Featured";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div>
      <>
        {details.map((product) => {
          return (
            <div className="shop__details" key={product._id}>
              <div
                className="shop__img-container"
                onMouseMove={handleMouseMove}
                ref={imgDiv}
                onMouseLeave={() =>
                  (imgDiv.current.style.backgroundPosition = `center`)
                }
              >
                <img src={product.images[index]} alt="" />
              </div>

              <div className="shop__box-details">
                <div className="shop__box-details__title">
                  <h2 title={product.title}>{product.title}</h2>
                </div>
                <div className="shop__box-details__desc">
                  <p>{product.description}</p>
                  <p>{product.content}</p>
                </div>
                <div className="shop__box-details__imgs">
                  <DetailsThumb images={product.images} setIndex={setIndex} />
                </div>
                <div className="shop__box-details__sizes">
                  <Sizes sizes={product.sizes} />
                </div>
                <div className="shop__box-details__price">
                  <h3>${product.price}</h3>
                </div>
                <div className="shop__box-details__cart">
                  {/* to="/cart" */}
                  <div
                    className="shop__cart"
                    onClick={() => addCart(product._id)}
                  >
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
      <div>
        <Featured />
      </div>
    </div>
  );
}
