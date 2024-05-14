import React from "react";

function ProductDetail({ params }) {
  console.log(params);
  return <div>ProductDetail {params.productId}</div>;
}

export default ProductDetail;
