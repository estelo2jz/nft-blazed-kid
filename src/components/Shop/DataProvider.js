// import WhiteT from '../../assets/shop/shirt.jpg'
// import BlackHoodie from '../../assets/shop/blackhoodie.jpg'
// import  from '../../assets/shop/blackshirt.jpg'
// import  from '../../assets/shop/cup.jpg'
// import  from '../../assets/shop/grayhoodie.jpg'
// import  from '../../assets/shop/redhoodie.jpg'
// import  from '../../assets/shop/whitehat.jpg'
// import  from '../../assets/shop/whitehoodie.jpg'
// import  from '../../assets/shop/blackcup.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'
// import  from '../../assets/shop/.jpg'

import BlackCup from '../../assets/shop/blackcup.jpeg'
import BlackCup1 from '../../assets/shop/blackcup1.jpeg'
import BlackCup2 from '../../assets/shop/blackcup2.jpeg'
import BlackCup3 from '../../assets/shop/blackcup3.jpeg'

import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id": uuidv4(),
      "title": "Wacth Product 01",
      "images": [
        BlackCup, BlackCup1, BlackCup2, BlackCup3,
      ],
      "description": "White T-shirt.",
      "content": "White T-shirt.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 101,
      "count": 1
    },
  ])

  const [cart, setCart] = useState([])

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product._id === id
      })
      setCart([...cart, ...data])
    }
  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart) setCart(dataCart)
  }, [])

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart])


  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart
  }


  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}