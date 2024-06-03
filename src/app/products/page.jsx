"use client";

import React, { useEffect, useState } from "react";
import { categories } from "../data/categories";
import Paginator from "../components/Paginator";
import { products } from "../data/products";

function Product() {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [categoryValue, setCategoryValue] = useState(
    categories[0]?.categoryId || 0
  );

  useEffect(() => {
    const handleresize = () => {
      setItemsPerPage(window.innerWidth > 1536 ? 12 : 9);
    };

    handleresize();

    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <div className="container flex flex-col gap-4 mx-auto lg:flex-row lg:gap-8">
      <section className="filter-section flex-2 w-full bg-white p-2 rounded-md lg:w-[256px] lg:p-4">
        <form className="flex items-center gap-2 sticky top-4 lg:flex-col lg:items-start">
          <label
            htmlFor="categories"
            className="text-lg font-bold text-primary"
          >
            ผลิตภัณฑ์
          </label>
          <div className="relative w-full flex-1">
            <select
              name="categories"
              className="w-full appearance-none border border-gray5 rounded-md px-4 py-2"
              id="categories"
              onChange={(e) => setCategoryValue(Number(e.target.value))}
              value={categoryValue}
            >
              {categories.map((category) => (
                <option
                  key={category.categoryId}
                  value={category.categoryId}
                  className="px-4 py-2"
                >
                  {category.name}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-2 right-4 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </form>
      </section>
      <section className="product-section flex-1">
        <Paginator
          items={products}
          itemsPerPage={itemsPerPage}
          type={categoryValue}
        />
      </section>
    </div>
  );
}

export default Product;
