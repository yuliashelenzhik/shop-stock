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
import { showModal } from "../redux/slices/modalSlice";
import ConfirmRemoveModal from "../components/modals/ConfirmRemoveModal";

const MainScreen = () => {
  const { data, isSuccess, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("authToken") !== null ?? true;
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const isAuthSelector = useSelector(
  //   (state: any) => state.auth.isAuthenticated
  // );
  const isConfirmRemoveOpen = useSelector(
    (state: any) =>
      state.modal.isVisible && state.modal.modal === "ConfirmRemoveModal"
  );
  const isLoginModalOpen = useSelector(
    (state: any) => state.modal.isVisible && state.modal.modal === "LoginModal"
  );
  const isRegisterModalOpen = useSelector(
    (state: any) =>
      state.modal.isVisible && state.modal.modal === "RegisterModal"
  );
  const isAddProdOpen = useSelector(
    (state: any) =>
      state.modal.isVisible && state.modal.modal === "AddProductModal"
  );

  useEffect(() => {
    if (!isLogged) {
      dispatch(showModal({ modal: "LoginModal", isVisible: true }));
    }
  }, []);

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
    localStorage.clear();
    dispatch(setAuthenticated(false));
    dispatch(showModal({ modal: "LoginModal", isVisible: true }));
  };

  const getSelectedCategory = (data: string) => {
    setSelectedCategory(data);
  };

  const onAddProduct = () => {
    dispatch(showModal({ modal: "AddProductModal", isVisible: true }));
  };

  return (
    <div className="main-screen">
      {isLoginModalOpen && <LoginModal />}
      {isRegisterModalOpen && <RegisterModal />}

      {isLogged && (
        <>
          {isAddProdOpen ? <AddProductModal /> : ""}
          {isConfirmRemoveOpen ? <ConfirmRemoveModal /> : ""}

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
