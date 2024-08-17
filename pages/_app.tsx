import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ProductsWrapper from "../store/products";
import Navbar from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsWrapper>
      <Navbar />
      <Component {...pageProps} />
    </ProductsWrapper>
  );
}
