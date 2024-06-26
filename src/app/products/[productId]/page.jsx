"use client";
import React from "react";
import { products } from "@/app/data/products";

function ProductDetail({ params }) {
  const id = params.productId;

  const product = products.find((p) => p.productId.toString() === id);

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col gap-4 items-start lg:flex-row">
      <div className="flex-1 ">
        <img className="rounded-md mx-auto" src={product.productImg} alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-2 bg-white p-4 rounded-md lg:gap-4">
        <div className="product-name flex flex-col gap-2 lg:gap-4">
          <h4 className="text-h4 font-bold text-primary">{product.name}</h4>
          <p className="text-sm text-gray2 lg:text-nm">{product.description}</p>
        </div>
        <div className="product-size flex flex-col gap-2 lg:gap-4">
          <h5 className="text-h5 font-bold text-primary">ขนาดผลิตภัณฑ์</h5>
          <p className="text-sm text-gray2 lg:text-nm">
            {product.productSize >= 1000
              ? "1 กิโลกรัม"
              : `${product.productSize} กรัม`}
          </p>
        </div>
        <div className="product-keeping flex flex-col gap-2 lg:gap-4">
          <h5 className="text-h5 font-bold text-primary">วิธีการเก็บรักษา</h5>
          <p className="text-sm text-gray2 lg:text-nm">แช่เย็น</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
