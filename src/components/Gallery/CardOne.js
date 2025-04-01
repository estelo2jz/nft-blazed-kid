import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import NFTDataOne from "../Home/data";

// import Card from "./Card";

function CardOne() {
  return (
    <div class="wrapper">
      <div class="container">
        {NFTDataOne.map((item, index) => {
          return (
            <Link to={item.path}>
              <div key={index} class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>{item.title}</h3>
                    <a href="#">{item.currentPrice}</a>
                  </div>
                </div>
                <div class="face face2">
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

export default CardOne;
