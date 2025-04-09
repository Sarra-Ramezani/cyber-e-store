import Banner4 from "../assets/images/banner4-macbook-pro.png";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductCardsContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  const productCards = [
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
    { image: Banner4, name: "Macbook pro", price: "900" },
  ];

  return (
    <div
      id="products-container"
      className=" flex flex-row justify-center gap-4 flex-wrap"
    >
      {productCards.map((product) => (
        <ProductCard
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
