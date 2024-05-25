"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Paginator({ items, itemsPerPage, type }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filterCategory = (items, type) => {
      return items.filter((item) => item.categoryId === type);
    };

    setFilteredItems(filterCategory(items, type));
    setCurrentPage(1); // Reset to first page whenever items or type changes
  }, [items, type]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const currentItems = filteredItems.slice(firstItemIndex, lastItemIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-col gap-16 h-full">
      <Card currentItems={currentItems} />
      <div className="self-center mt-auto">
        <button
          className="font-bold"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {" "}
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => goToPage(number)}
            className={`text-gray2 border px-4 py-2 rounded-md ${
              currentPage === number ? "font-bold text-black2 bg-third" : ""
            } mx-4`}
          >
            {number}
          </button>
        ))}
        <button
          className="font-bold"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Paginator;
