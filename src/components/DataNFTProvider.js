import { v4 as uuidv4 } from "uuid";

import BK00 from "../assets/images/NFT/bkid000.jpeg";
import BK01 from "../assets/images/NFT/bkid001.jpeg";
import BK02 from "../assets/images/NFT/bkid002.jpeg";
import BK03 from "../assets/images/NFT/bkid003.jpeg";
import BK04 from "../assets/images/NFT/bkid004.jpeg";
import BK05 from "../assets/images/NFT/bkid005.jpeg";
import BK06 from "../assets/images/NFT/bkid006.jpeg";
import BK07 from "../assets/images/NFT/bkid007.jpeg";
import BK08 from "../assets/images/NFT/bkid008.jpeg";
import BK09 from "../assets/images/NFT/bkid009.jpeg";
import BK010 from "../assets/images/NFT/bkid010.jpeg";

import BK011 from "../assets/images/NFT/bkid011.png";
import BK012 from "../assets/images/NFT/bkid012.png";
import BK013 from "../assets/images/NFT/bkid013.png";
import BK014 from "../assets/images/NFT/bkid014.png";
import BK015 from "../assets/images/NFT/bkid015.png";
import BK016 from "../assets/images/NFT/bkid016.png";
import BK017 from "../assets/images/NFT/bkid017.png";
import BK018 from "../assets/images/NFT/bkid018.png";
import BK019 from "../assets/images/NFT/bkid019.png";
import BK020 from "../assets/images/NFT/bkid020.png";

import Q000 from "../assets/q-1.gif";

import React, { createContext, useState, useEffect } from "react";

export const DataNFTContext = createContext();

export const DataNFTProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: uuidv4(),
      title: "Blazed Kid Braces Collection",
      src: "https://opensea.io/collection/blazed-kid-nft",
      images: [BK01, BK02, BK03, BK04, BK05, BK06, BK07, BK08, BK09, BK010],
      description: "A collection of Blazed Kid with unique attributes.",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: "",
      count: 1,
    },
    {
      _id: uuidv4(),
      title: "Blazed Kid LOL Collection",
      src: "https://opensea.io/collection/blazed-kid-nft",
      images: [
        BK011,
        BK012,
        BK013,
        BK014,
        BK015,
        BK016,
        BK017,
        BK018,
        BK019,
        BK020,
      ],
      description: "A collection of Blazed Kid with unique attributes.",
      content: "",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: "",
      count: 1,
    },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },
    // {
    //   _id: uuidv4(),
    //   title: "Blazed Kid ??? Collection",
    //   // src: "",
    //   images: [Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000, Q000],
    //   description: "A collection of Blazed Kid with unique attributes.",
    //   content: "",
    //   colors: ["red", "black", "teal"],
    //   sizes: ["XL", "L", "M", "XM", "LX"],
    //   price: "",
    //   count: 1,
    // },

    // {
    //   "_id": uuidv4(),
    //   "title": "Blazed Kid ??? Collection",
    //   src : "",
    //   "images": [
    //     BK01, BK02, BK03, BK04, BK05, BK06, BK07, BK08, BK09, BK010,
    //   ],
    //   "description": "A collection of Blazed Kid with unique attributes.",
    //   "content": "",
    //   "colors": ["red", "black", "teal"],
    //   "sizes": ["XL", "L", "M", "XM", "LX"],
    //   "price": "",
    //   "count": 1
    // },
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
    } else {
      alert("The product has been added to cart.");
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
    <DataNFTContext.Provider value={value}>
      {props.children}
    </DataNFTContext.Provider>
  );
};
