// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'

import BlackCup from "../../assets/shop/blackcup.jpeg";
import BlackCup1 from "../../assets/shop/blackcup1.jpeg";
import BlackCup2 from "../../assets/shop/blackcup2.jpeg";
import BlackCup3 from "../../assets/shop/blackcup3.jpeg";

import BlackShirt from "../../assets/shop/bshirt.jpeg";
import BlackShirt1 from "../../assets/shop/bshirt1.jpeg";
import BlackShirt2 from "../../assets/shop/bshirt2.jpeg";
import BlackShirt3 from "../../assets/shop/bshirt3.jpeg";

import BlackSweatshirt from "../../assets/shop/bsweatshirt.jpeg";
import BlackSweatshirt1 from "../../assets/shop/bsweatshirt1.jpeg";
import BlackSweatshirt2 from "../../assets/shop/bsweatshirt2.jpeg";
import BlackSweatshirt3 from "../../assets/shop/bsweatshirt3.jpeg";

import GraySweatshirt from "../../assets/shop/gsweatshirt.jpeg";
import GraySweatshirt1 from "../../assets/shop/gsweatshirt1.jpeg";
import GraySweatshirt2 from "../../assets/shop/gsweatshirt2.jpeg";
import GraySweatshirt3 from "../../assets/shop/gsweatshirt3.jpeg";

import RedSweatshirt from "../../assets/shop/rsweatshirt.jpeg";
import RedSweatshirt1 from "../../assets/shop/rsweatshirt1.jpeg";
import RedSweatshirt2 from "../../assets/shop/rsweatshirt2.jpeg";
import RedSweatshirt3 from "../../assets/shop/rsweatshirt3.jpeg";

import WhiteCup from "../../assets/shop/wcup.jpeg";
import WhiteCup1 from "../../assets/shop/wcup1.jpeg";
import WhiteCup2 from "../../assets/shop/wcup2.jpeg";
import WhiteCup3 from "../../assets/shop/wcup3.jpeg";

import WhiteHat from "../../assets/shop/what.jpeg";
import WhiteHat1 from "../../assets/shop/what1.jpeg";
import WhiteHat2 from "../../assets/shop/what2.jpeg";
import WhiteHat3 from "../../assets/shop/what3.jpeg";

import WhiteShirt from "../../assets/shop/wshirt.jpeg";
import WhiteShirt1 from "../../assets/shop/wshirt1.jpeg";
import WhiteShirt2 from "../../assets/shop/wshirt2.jpeg";
import WhiteShirt3 from "../../assets/shop/wshirt3.jpeg";

import WhiteSweatshirt from "../../assets/shop/wsweatshirt.jpeg";
import WhiteSweatshirt1 from "../../assets/shop/wsweatshirt1.jpeg";
import WhiteSweatshirt2 from "../../assets/shop/wsweatshirt2.jpeg";
import WhiteSweatshirt3 from "../../assets/shop/wsweatshirt3.jpeg";

import Sticker1 from "../../assets/featured/BKSticker1.png";
import Sticker2 from "../../assets/featured/BKSticker2.png";
import Sticker3 from "../../assets/featured/BKSticker3.png";
import Sticker4 from "../../assets/featured/BKSticker4.png";
import Sticker5 from "../../assets/featured/BKSticker5.png";

// import BKBanner from "../../assets/featured/BKBanner.png";
import BKPosterBlack from "../../assets/featured/BKPosterBlack.png";
import BKPosterFull from "../../assets/featured/BKPosterFull.png";

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: uuidv4(),
      title: "Black Mug BLAZED KID Logo",
      images: [BlackCup, BlackCup1, BlackCup2, BlackCup3],
      description: "Coffe Mug",
      content: "",
      colors: [],
      sizes: [],
      price: 13,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Black T-Shirt ",
      images: [BlackShirt, BlackShirt1, BlackShirt2, BlackShirt3],
      description: "Casual t-shirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 15,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Black Sweatshirt",
      images: [
        BlackSweatshirt,
        BlackSweatshirt1,
        BlackSweatshirt2,
        BlackSweatshirt3,
      ],
      description: "Sweatshirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 21,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Gray Sweatshirt",
      images: [
        GraySweatshirt,
        GraySweatshirt1,
        GraySweatshirt2,
        GraySweatshirt3,
      ],
      description: "Sweatshirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 21,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Red Sweatshirt",
      images: [RedSweatshirt, RedSweatshirt1, RedSweatshirt2, RedSweatshirt3],
      description: "Sweatshirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 27,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "White Mug",
      images: [WhiteCup, WhiteCup1, WhiteCup2, WhiteCup3],
      description: "Coffe Mug",
      content: "",
      colors: [],
      sizes: [],
      price: 13,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "What Hat",
      images: [WhiteHat, WhiteHat1, WhiteHat2, WhiteHat3],
      description: "Fashion style hat",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 35,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "White T-Shirt",
      images: [WhiteShirt, WhiteShirt1, WhiteShirt2, WhiteShirt3],
      description: "Simple logo shirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 20,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "White Sweatshirt",
      images: [
        WhiteSweatshirt,
        WhiteSweatshirt1,
        WhiteSweatshirt2,
        WhiteSweatshirt3,
      ],
      description: "Comfy thick sweatshirt",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 20,
      count: 1,
    },

    // FEATURED Item's
    {
      _id: uuidv4(),
      title: "Blazed Kid Sticker",
      images: [Sticker1],
      description: "Yellow",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Sticker",
      images: [Sticker2],
      description: "Purple",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Sticker",
      images: [Sticker3],
      description: "Red",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Sticker",
      images: [Sticker4],
      description: "Blue",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Sticker",
      images: [Sticker5],
      description: "Blue",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Poster Outline",
      images: [BKPosterBlack],
      description: "Poster",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid Poster Full",
      images: [BKPosterFull],
      description: "Poster",
      content: "",
      colors: [],
      sizes: [],
      price: 9,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
