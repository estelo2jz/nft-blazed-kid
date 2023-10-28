import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataNFTContext } from "./DataNFTProvider";
import DetailsThumb from "./DetailsThumb";
import { Link } from "react-router-dom";
import "./nftDetails.sass";


export default function NFTDetails() {
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
        <div className="nft__details" key={product._id}>
          <div className="nft__left-section">
            <div className="nft__main-heading">
              <div className="nft__box__details__title">
                <h2 title={product.title}>{product.title}</h2>
              </div>
              <div className="nft__box__details__desc">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="nft__img-container">
              <img src={product.images[index]} alt="nft-image" />
            </div>
          </div>
          <div className="nft__box-details">
            <div className="nft__details__sub__imgs">
              <DetailsThumb images={product.images} setIndex={setIndex}>
                <img images={product.images} alt="nft-sub-images" />
              </DetailsThumb>
            </div>
            <div className="nft__details__view">
              <p>View on:</p>
              <div className="nft__details__view__socials">
                <a href={product.src} target="_blank">
                  OpenSea
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
