import React, { useEffect, useState } from "react";
import "../styles/categories.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { ProductsState } from "../redux/slices/productsSlice";

const Categories = () => {
  const productsSelector = useSelector((state: any) => state.products);
  const [open, setOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");

  let categories: Array<string> = ["all"];
  productsSelector.products.forEach((el: Product) => {
    if (!categories.includes(el.category as string)) {
      categories.push(el.category as string);
    }
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const onChangeCategory = (e: any) => {
    console.log(e);
    if (e.target.value !== null && e.target.value !== undefined) {
      setFilterCategory(e.target.value);
      console.log(e.target.value);
    }
    setOpen(false);
  };

  useEffect(() => {
    console.log("filter categ: " + filterCategory);
  }, [filterCategory]);

  return (
    <div className="categories">
      <div className="categories-title" onClick={handleOpen}>
        <p>{filterCategory}</p>
        <p> {open ? " ▲" : " ▼"} </p>
      </div>
      {open && (
        <div className="category-options">
          {categories.map((item) => (
            <div
              key={item}
              className="category-item"
              onChange={onChangeCategory}
            >
              <input type="radio" name={item} value={item} id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
