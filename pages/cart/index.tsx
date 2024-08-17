import { CartItem, useproductsContext } from "../../store/products";
import classes from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CheckoutCard from "@/components/CheckoutFooter";

const Cart = () => {
  const { itemsIntoCart, setItemsIntoCart } = useproductsContext();

  const deleteItem = (product: CartItem) => {
    const existingIndex = itemsIntoCart.findIndex(
      (item) => item.id === product.id
    );
    const lastUpdatedCart = itemsIntoCart;
    lastUpdatedCart.splice(existingIndex, 1);
    setItemsIntoCart([...lastUpdatedCart]);
  };

  const handleSameItem = (product: CartItem, toAddMore: boolean) => {
    const existingIndex = itemsIntoCart.findIndex(
      (item) => item.id === product.id
    );
    const lastUpdatedCart = itemsIntoCart;
    const selectedProduct = lastUpdatedCart[existingIndex];
    if (selectedProduct.noOfItems <= 1 && !toAddMore) {
      console.log("koi");
      deleteItem(product);
      return;
    }
    lastUpdatedCart.splice(existingIndex, 1, {
      ...selectedProduct,
      noOfItems: toAddMore
        ? selectedProduct.noOfItems + 1
        : selectedProduct.noOfItems - 1,
    });
    setItemsIntoCart([...lastUpdatedCart]);
  };

  return (
    <>
      <div className={classes.cartContainer}>
        <h2 className={classes.mycart}>My Cart</h2>
        {itemsIntoCart.length > 0 ? (
          <ul className={classes.productsListCon}>
            <>
              {itemsIntoCart.map((product) => (
                <li key={product.id} className={classes.list}>
                  <ProductCard product={product} />
                  {/* <button className={classes.cartBtn} onClick={()=>updateTheCart(product)}>Add to cart</button> */}
                  <div className={classes.productBottomOptions}>
                    <div className={classes.productClassesContainer}>
                      <button onClick={() => handleSameItem(product, false)}>
                        -
                      </button>
                      <span>{product.noOfItems}</span>
                      <button onClick={() => handleSameItem(product, true)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => deleteItem(product)}
                      className={classes.deleteBtn}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </li>
              ))}
            </>
          </ul>
        ) : (
          <div className={classes.backToHomeCon}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9fiRgff_4iT8T3IG1XLbpwr9XHWgNaBw0A&usqp=CAU"
              className={classes.noRecordFound}
            />
            <Link href="/" className={classes.home}>
              Back to Home
            </Link>
          </div>
        )}
      </div>
      <CheckoutCard />
    </>
  );
};

export default Cart;
