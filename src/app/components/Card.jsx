import React from "react";
import "../card.css";
import Link from "next/link";

function Card({ currentItems }) {
  return (
    <ul className="product-cards-container flex flex-wrap gap-x-2 gap-y-4 lg:gap-8">
      {currentItems.map((product) => (
        <Link
          key={product.productId}
          href={`/products/${product.productId}`}
          passHref
          className="flex-1 basis-[160px] xxxsm:max-w-[156px] xxsm:max-w-[167.5px] xsm:max-w-[192.5px] lg:flex-none lg:basis-0 lg:max-w-none"
        >
          <li className="card flex flex-col h-[265px] lg:min-w-[256px] 2xl:max-w-[288px] lg:h-[400px] rounded-lg overflow-hidden shadow-md">
            <div className="product-image">
              <img src={product.productImg} alt="product image" />
            </div>
            <div className="product-detail relative flex-1 flex flex-col gap-4 justify-center items-center bg-white left-bottom-bg right-top-bg">
              <p className="text-lg font-bold text-primary z-10">
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
