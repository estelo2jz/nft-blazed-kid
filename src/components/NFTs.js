import React, { useContext } from "react";
import { DataNFTContext } from "./DataNFTProvider";
import { Link } from "react-router-dom";
import "./nft.scss";

export default function Products() {
  const value = useContext(DataNFTContext);
  const [products] = value.products;

  return (
    <div className="nft-catalog__container">
      <div className="nft-catalog__header">
        <h1>Collections Catalog</h1>
      </div>

      <div className="nft">
        {products.map((product, index) => {
          // Fallback array in case product.images has fewer than 3 images for the stack effect
          const images = product.images || [];
          const img1 = images[0] || "";
          const img2 = images[1] || img1;
          const img3 = images[2] || img1;

          return (
            <div className="nft__card-wrapper" key={product._id || index}>
              <Link to={`/nft/${product._id}`} className="nft__card">
                
                {/* 3D Stacked Card Fan Effect */}
                <div className="nft__stack">
                  <div className="nft__stack-item card-back-2">
                    <img src={img3} alt="" />
                  </div>
                  <div className="nft__stack-item card-back-1">
                    <img src={img2} alt="" />
                  </div>
                  <div className="nft__stack-item card-front">
                    <img src={img1} alt={product.title} />
                    <div className="card-overlay"></div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="nft__box">
                  <h3 title={product.title}>{product.title}</h3>
                  <p>{product.description}</p>
                  <span className="explore-link">Explore Collection →</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}