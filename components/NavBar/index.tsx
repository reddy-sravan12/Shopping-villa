import Image from "next/image";
import { FaOpencart } from "react-icons/fa";
import classes from "./styles.module.css";
import { useproductsContext } from "../../store/products";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { itemsIntoCart } = useproductsContext();
  const route = useRouter();
  const isHome = route.asPath === "/";

  return (
    <nav className={classes.nav}>
      <figure>
        <Image src="/assets/logo.png" alt={"logo"} width={25} height={25} />
      </figure>
      {isHome && (
        <Link href={"/cart"}>
          <div className={classes.cartCon}>
            <FaOpencart className={classes.cart} />
            <span className={classes.cartChip}>{itemsIntoCart.length}</span>
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
