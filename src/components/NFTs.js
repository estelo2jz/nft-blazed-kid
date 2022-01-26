import React, { useContext } from 'react'
import { DataNFTContext } from './DataNFTProvider'
import { Link } from 'react-router-dom'
import "./nft.scss";

export default function Products() {
  const value = useContext(DataNFTContext)
  const [products] = value.products
  const addCart = value.addCart

  return (
    <div className="nft">
      {
        products.map(product => (
          <div className="nft__card" key={product._id}>
            <Link to={`/nft/${product._id}`}>
              <img src={product.images[0]} alt="" />
            </Link>
            <div className="nft__box">
              <h3 title={product.title}>
                <Link to={`/nft/${product._id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))
      }


    </div>
  )
}