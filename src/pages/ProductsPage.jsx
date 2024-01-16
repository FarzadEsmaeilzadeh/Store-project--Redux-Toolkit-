import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Card from "../components/Card";
import SideBar from "../components/SideBar";
import { fetchProducts } from "../features/product/productSlice";
// import { useProducts } from "../context/ProductContext";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helpers/helper";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  // const products = useProducts();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);
  // const products = [];

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
