import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_Key = "24397ba4ac6d4e1b988b8b6463aa8a4a";
export const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${api_Key}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.modernInput}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="search for"
      />
    </div>
  );
};
