import React from 'react'

export default function DetailsThumb({ images, setIndex }) {
  return (
    <div className="nft__details__thumb">
      {
        images.map((img, index) => (
          <img src={img} alt="" key={index}
            onClick={() => setIndex(index)} />
        ))
      }
    </div>
  )
}