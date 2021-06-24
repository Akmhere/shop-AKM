import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
export default function Product({ product }) {
  return (
    <div className="text-left">
      <Link to={`product/${product._id}`}>
        <div>
          <div style={{ textAlign: "center" }}>
            <img src={product.image} className="img-fluid" alt="product" />
          </div>
          <h1>{product.name}</h1>

          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="far fa-star fa-1x"
            fullSymbol="fas fa-star fa-1x"
            readonly={true}
          />
          <h1>Price : {product.price}</h1>
        </div>
      </Link>
    </div>
  );
}
