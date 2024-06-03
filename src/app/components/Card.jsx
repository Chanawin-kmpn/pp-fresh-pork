import React from "react";
import "../card.css";
import Link from "next/link";

function Card({ currentItems }) {
  return (
    <ul className="product-cards-container flex flex-wrap md:-m-2 md:w-[calc(100%+16px)] lg:w-[calc(100%+4rem)] lg:-m-4 xl:-m-4">
      {currentItems.map((product) => (
        <Link
          key={product.productId}
          href={`/products/${product.productId}`}
          passHref
          className="m-2 w-[calc(50%-1rem)] max-h-[400px] sm:w-[calc(33.3333%-1rem)] md:w-[calc(25%-1rem)] md:m-2 lg:w-[calc(50%-2rem)] lg:m-4 xl:w-[calc(33.3333%-2rem)] xl:m-4 2xl:w-[calc(25%-2rem)]"
        >
          <li className="card flex flex-col h-[265px] lg:h-[400px] rounded-lg overflow-hidden shadow-md">
            <div className="product-image">
              <img src={product.productImg} alt="product image" />
            </div>
            <div className="product-detail relative flex-1 flex flex-col gap-4 justify-center items-center bg-white left-bottom-bg right-top-bg">
              <p className="text-md md:text-lg font-bold text-primary z-10">
                {product.name}
              </p>
              <p className="text-gray2 z-10">
                {product.productSize >= 1000
                  ? "1 กิโลกรัม"
                  : `${product.productSize} กรัม`}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Card;
