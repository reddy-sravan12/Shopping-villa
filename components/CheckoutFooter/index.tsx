import { useEffect, useState } from "react";
import { useproductsContext } from "../../store/products";
import { getTheFinalPrice } from "../../utils/cart";
import classes from "./styles.module.css";

const CheckoutCard = () => {
  const { itemsIntoCart } = useproductsContext();
  const [total, setTotal] = useState(0);
  const caluculateTotal = () => {
    let total = 0;
    itemsIntoCart.map((each) => {
      total +=
        getTheFinalPrice(
          each.price,
          each.discounts.value,
          each.discounts.isFixed
        ) * each.noOfItems;
    });
    setTotal(total);
  };
  useEffect(() => {
    caluculateTotal();
  }, [itemsIntoCart]);
  return (
    <>

    {total > 0 &&<div style={{display:'flex',justifyContent:'space-between'}}><button>Buy now</button> <div className={classes.total}>Total: {total}</div></div>}
      </>
);
};

export default CheckoutCard;
