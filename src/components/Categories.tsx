import React, { useEffect, useState } from "react";
import "../styles/categories.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { ProductsState } from "../redux/slices/productsSlice";

const Categories = (props: any) => {
  const productsSelector = useSelector((state: any) => state.products);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  let categories: Array<string> = ["all"];
  productsSelector.products.forEach((el: Product) => {
    if (!categories.includes(el.category as string)) {
      categories.push(el.category as string);
    }
  });

  props.func(selectedCategory);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onChangeCategory = (e: any) => {
    if (e.target.value !== null && e.target.value !== undefined) {
      setSelectedCategory(e.target.value);
    }
    setOpen(false);
  };

  return (
    <>
      <div className="categories">
        <div className="categories-title" onClick={handleOpen}>
          <p>{selectedCategory}</p>
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
    </>
  );
};

export default Categories;
