import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";
export default function Productdescsreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;
  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);
  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="something went wrong" />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card m-2 p-2">
              <h1>{product.name}</h1>
              <img
                src={product.image}
                className="img-fluid m-3 bigimg"
                alt="curproduct"
              />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6  text-left">
            <div className="m-2">
              <h1>Price : {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addtocart}>
                ADD TO CART
              </button>
            </div>
            <hr />
            <Review product={product} />
          </div>
        </div>
      )}
    </div>
  );
}
