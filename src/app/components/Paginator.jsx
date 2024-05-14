"use client";
import React, { useState } from "react";
import Card from "./Card";

function Paginator({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

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
      <div className="self-end mt-auto">
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
              currentPage === number ? "font-bold text-gray5 bg-primary" : ""
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
