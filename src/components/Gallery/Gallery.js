import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "../Home/data";
import "./gallery.scss";
// import CardOne from "./CardOne";

function Gallery() {
  return (
    <div className="gallery__container">
      <div id="overview" className="gallery__section-content">
        {/* <CardOne title img currentPrice /> */}
        {NFTDataOne.map((item, index) => {
          return (
            <Link to="/nft">
              <div key={index} className="gallery__nft-container">
                <div className="gallery__nft-heading">
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery__nft-img">
                  <img src={item.img} alt="NTF's" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;



// import React from "react";
// import { Link } from "react-router-dom";
// import NFTDataOne from "../Home/data";
// import "./gallery.scss";

// const Gallery = () => {
//   return (
//     <div className="gallery__container">
//       <div id="overview" className="gallery__grid">
//         {NFTDataOne.map((item, index) => (
//           <Link to={`/nft/${item.id}`} key={item.id || index} className="gallery__card">
//             <div className="gallery__image-wrapper">
//               <img src={item.img} alt={item.title} className="gallery__image" />
//             </div>
//             <div className="gallery__content">
//               <h3 className="gallery__title">{item.title}</h3>
//               {/* Optionally: <p>{item.description}</p> */}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
