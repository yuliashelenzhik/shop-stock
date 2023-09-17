import React, { useEffect, useState } from "react";
import "../styles/mainScreen.scss";
import { useGetAllProductsQuery } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../redux/slices/productsSlice";
import RegisterModal from "../components/modals/RegisterModal";
import LoginModal from "../components/modals/LoginModal";
import { setAuthenticated } from "../redux/slices/authSlice";
import AddProductModal from "../components/modals/AddProductModal";
import { openModal } from "../redux/slices/modalSlice";

const MainScreen = () => {
  const { data, isSuccess, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("authToken") ?? true
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedModal, setSelectedModal] = useState("Login");
  const isAuthSelector = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  // const [showAddProduct, setShowAddProduct] = useState(true);
  // const [filtered, setFiltered] = useState(data);
  const isAddProdOpen = useSelector((state: any) => state.modal.isVisible);

  useEffect(() => {
    setIsLogged(isAuthSelector);
  }, [isAuthSelector]);

  console.log("isAuthSelector");
  console.log(isAuthSelector);
  console.log("isLogged");
  console.log(isLogged);

  const getProducts = async () => {
    const res = await data;
    if (isSuccess && res) {
      dispatch(updateProducts(res));
    } else if (error) {
      console.log(error);
    }
  };

  getProducts();

  const onLogout = () => {
    console.log("log out");
    // if (isLogged) {
    localStorage.clear();
    dispatch(setAuthenticated(false));
    // setIsLogged(false);
    // }
  };

  const switchModal = () => {
    console.log("Switch Modal");
  };

  const getSelectedCategory = (data: string) => {
    setSelectedCategory(data);
  };

  const onAddProduct = () => {
    dispatch(openModal("AddProductModal"));
  };

  return (
    <div className="main-screen">
      {!isLogged && selectedModal === "Login" ? (
        <LoginModal switchModal={switchModal} />
      ) : !isLogged && selectedModal === "Login" ? (
        <RegisterModal switchModal={switchModal} />
      ) : (
        ""
      )}
      {/* {!isLogged && selectedModal === "Log in" ? (
        <RegisterModal />
      ) : (
        <LoginModal />
      )} */}
      {isLogged && (
        <>
          {isAddProdOpen ? <AddProductModal /> : ""}
          {/* <AddProductModal /> */}
          <p className="logout-btn" onClick={onLogout}>
            Log out
          </p>
          <h1>Our products</h1>
          <div className="menu">
            <Categories func={getSelectedCategory} />
            <button onClick={onAddProduct}>Add a product</button>
          </div>
          <div className="products-container">
            {isLoading ? (
              <p>Loading...</p>
            ) : data && selectedCategory !== "all" ? (
              data
                .filter((item: Product) => item.category === selectedCategory)
                .map((item: Product) => (
                  <div key={item.id}>
                    <ProductCard product={item} />
                  </div>
                ))
            ) : data && selectedCategory === "all" ? (
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
