import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataNFTContext } from "./DataNFTProvider";
import Colors from "./Colors";
import Sizes from "./Sizes";
import DetailsThumb from "./DetailsThumb";
import { Link } from "react-router-dom";

import "./details.scss";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataNFTContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          {/* <div className="img-container" onMouseMove={handleMouseMove}
              style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
              onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}>
                <img src={{product.images[index]}} alt="nft-image" />
              </div> */}
          <div className="img-container">
            <img src={product.images[index]} alt="nft-image" />
          </div>

          <div className="box-details">
            <div>
              <h2 title={product.title}>{product.title}</h2>
            </div>
            <div>
              {/* <h3>${product.price}</h3> */}
              {/* <Colors colors={product.colors} /> */}
              {/* <Sizes sizes={product.sizes} /> */}
              {/* <p>{product.content}</p> */}
              <p>{product.description}</p>
            </div>
            <div className="details__sub__imgs">
              <DetailsThumb images={product.images} setIndex={setIndex}>
                <img images={product.images} alt="nft--sub-images" />
              </DetailsThumb>
              {/* <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                  Add to cart
                </Link> */}
            </div>
            <div className="details__view">
              <p>View this NFT on:</p>
              <div className="details__view__socials">
                <a href={product.src} target="_blank">
                  Rarible
                </a>
                {/* <a href="https://opensea.io/explore-collections" target="_blank">
                  Open Sea
                </a>
                <a href="https://rarity.tools/" target="_blank">
                  rarity
                </a>
                <a href="https://mintable.app/browse?chain=eth" target="_blank">
                  Mintale
                </a>
                <a href="https://protonmint.com/explore" target="_blank">
                  Proton
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
