import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchInputHandler = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
  };

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchInputHandler}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
