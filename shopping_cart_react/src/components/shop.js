import React, { useEffect, useState } from "react";
import "../styles/shop.css";
import uniqid from "uniqid";
import Cart from "./cart";

const Shop = ({setTotal,totals}) => {
  const [shopItems, setShopItems] = useState([
    {
      name: "a",
      amount: 0,
      image: require("../images/download.jpeg"),
      price: 5,
      key: uniqid(),
    },
    {
      name: "b",
      image: require("../images/download (1).jpeg"),
      price: 10,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "c",
      image: require("../images/download (2).jpeg"),
      price: 15,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "d",
      image: require("../images/download (3).jpeg"),
      price: 20,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "e",
      image: require("../images/download (4).jpeg"),
      price: 25,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "f",
      image: require("../images/download (5).jpeg"),
      price: 30,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "g",
      image: require("../images/download (6).jpeg"),
      price: 35,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "h",
      image: require("../images/download (7).jpeg"),
      price: 40,
      amount: 0,
      key: uniqid(),
    },
    {
      name: "i",
      image: require("../images/download (8).jpeg"),
      price: 45,
      amount: 0,
      key: uniqid(),
    },
  ]);
  
  const inputHandler = (e) => {
    shopItems.forEach((item) => {
      if (item.key === e.target.getAttribute("data-key"))
        item.amount = e.target.value;
    });
  };
  const buttonClicked = (e) => {
    shopItems.forEach((item) => {
      if (item.key === e.target.getAttribute("data-key")) {
        setTotal((item.price * item.amount)+totals);
      }
    });
  };

  return (
    <div className="Shop">
      <ul className="shop_items">
        {shopItems.map((item) => (
          <li key={item.key}>
            <div className="object_image">
              <img src={item.image} />
            </div>
            <div className="shopbuttons">
              <input
                type="number"
                placeholder="Enter your amount"
                min="1"
                onChange={inputHandler}
                data-key={item.key}
              ></input>
              <img
                src={require("../images/add-to-cart.png")}
                data-key={item.key}
                onClick={buttonClicked}
              />
            </div>
            <div className="itemcosts">
              <div className="perPrice">per:{item.price}$</div>
            </div>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Shop;
