// pages/api/products.js

import { NextApiRequest, NextApiResponse } from "next";

let products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1090,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    discounts: { value: 100, isFixed: true },
    noOfItems: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 502,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    discounts: { value: 50, isFixed: false },
    noOfItems: 1,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 1005,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    discounts: { value: 100, isFixed: true },
    noOfItems: 1,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 700,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    discounts: { value: 200, isFixed: true },
    noOfItems: 1,
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 1695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    discounts: { value: 15, isFixed: false },
    noOfItems: 1,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 1068,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    discounts: { value: 20, isFixed: false },
    noOfItems: 1,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Fetch products
    res.status(200).json(products);
  }
}
