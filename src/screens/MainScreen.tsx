import React from "react";
import "../styles/mainScreen.scss";
import { useGetAllProductsQuery } from "../api/productsApi";
import ProductCard from "../components/ProductCard";

const MainScreen = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  return (
    <div className="main-screen">
      <h1>Our products</h1>
      <div className="products-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          data.map((item: Product) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))
        ) : (
          <p>Couldn't get products</p>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
