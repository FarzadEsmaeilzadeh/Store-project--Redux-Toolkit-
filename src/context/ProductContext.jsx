import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
}

const useProducts = () => {
  const product = useContext(productsContext);
  return product;
};

const useProductsDetails = (id) => {
  const product = useContext(productsContext);
  const result = product.find((item) => item.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductsDetails };
