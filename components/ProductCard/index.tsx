import { CartItem } from "@/store/products";
import classes from "./styles.module.css";
import { getTheFinalPrice } from "../../utils/cart";

const ProductCard = ({ product }: { product: CartItem }) => {
  return (
    <>
      <figure className={classes.productImageCon}>
        <img
          src={product.image}
          alt={product.title}
          className={classes.productImage}
        />
      </figure>
      <h3 className={classes.productTitle}>{product.title}</h3>
      <p className={classes.price}>
        Price: <s>{product.price}</s> ₹
        {getTheFinalPrice(
          product.price,
          product.discounts?.value,
          product.discounts?.isFixed
        )}
      </p>
    </>
  );
};

export default ProductCard;
