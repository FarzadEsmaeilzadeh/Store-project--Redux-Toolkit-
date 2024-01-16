import { useSelector } from "react-redux";

import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <h1>Your basket is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <dir className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </dir>
    </div>
  );
}

export default CheckoutPage;
