import React from "react";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";
export default function Homescreen() {
  const getallProductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallProductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="something went wrong..." />
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-2 p-2 card shadow">
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
