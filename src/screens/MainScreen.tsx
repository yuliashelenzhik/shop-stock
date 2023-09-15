import React, { useState } from "react";
import "../styles/mainScreen.scss";
import { useGetAllProductsQuery } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import { useDispatch } from "react-redux";
import { updateProducts } from "../redux/slices/productsSlice";
import RegisterModal from "../components/modals/RegisterModal";

const MainScreen = () => {
  const { data, isSuccess, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);

  const getAndSaveProducts = async () => {
    const res = await data;
    if (isSuccess && res) {
      dispatch(updateProducts(res));
    } else if (error) {
      console.log(error);
    }
  };

  getAndSaveProducts();

  return (
    <div className="main-screen">
      {!isLogged && <RegisterModal />}
      {isLogged && (
        <>
          <h1>Our products</h1>
          <Categories />
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
        </>
      )}
    </div>
  );
};

export default MainScreen;
