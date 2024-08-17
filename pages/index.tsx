import { useContext, useEffect, useState } from "react";
import classes from "./global.module.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { CartItem, useproductsContext } from "../store/products";
import Toast from "@/components/Miscellaneous/Toast";
import { getTheFinalPrice } from "../utils/cart";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { products, setProducts, setItemsIntoCart, itemsIntoCart } =
    useproductsContext();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  const updateTheCart = (product: CartItem) => {
    console.log(product);
    const existingIndex = itemsIntoCart.findIndex(
      (item) => item.id === product.id
    );
    const lastUpdatedCart = itemsIntoCart;
    if (existingIndex !== -1) {
      console.log("fuck");
      lastUpdatedCart.splice(existingIndex, 1, {
        ...lastUpdatedCart[existingIndex],
        noOfItems: lastUpdatedCart[existingIndex]?.noOfItems + 1,
      });
      setItemsIntoCart(lastUpdatedCart);
    } else {
      setItemsIntoCart((prev) => [...prev, product]);
    }
    setShowToast(true);
  };

  console.log(itemsIntoCart);

  return (
    <div className={classes.app}>
      <Toast
        message="Added to cart successfully"
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <main className={classes.main}>
        <i className={classes.shopNow}>Your Ultimate Shopping Destination.</i>
        {products ? (
          <ul className={classes.productsListCon}>
            <>
              {products.map((product) => (
                <li key={product.id} className={classes.list}>
                  <ProductCard product={product} />
                  <button
                    className={classes.cartBtn}
                    onClick={() => updateTheCart(product)}
                  >
                    Add to cart
                  </button>
                  <hr className={classes.divider} />
                </li>
              ))}
            </>
          </ul>
        ) : (
          <div className={classes.loader}></div>
        )}
      </main>
      <Footer />
    </div>
  );
}
