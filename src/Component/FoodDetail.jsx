import { useState, useEffect } from "react";
import styles from "./fooddetail.module.css";
import { IngredientList } from "./IngredientList";
export const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_Key = "24397ba4ac6d4e1b988b8b6463aa8a4a";
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFoodDetail() {
      const res = await fetch(`${URL}?apiKey=${api_Key}`);
      const data = await res.json();
      setFood(data);
      setLoading(false);
      console.log(foodId);
    }
    fetchFoodDetail();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>
              {isLoading
                ? "Pick a recipe"
                : `Prep Time⏲️: ${food.readyInMinutes} minutes`}
            </strong>
          </span>
          <span>
            <strong>{isLoading ? "" : `Serving: ${food.servings} 👨🏼`}</strong>
          </span>
          <span>
            <strong>
              {isLoading
                ? ""
                : food.vegetarian
                ? "Vegetarian🍅"
                : "Non-Vegetarian🍗"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              {isLoading
                ? ""
                : `Price per serving: ${food.pricePerServing / 100}$`}
            </strong>
          </span>
        </div>
      </div>
      <div key={food.number}>
        <h2>Ingredients List</h2>

        <IngredientList food={food} isLoading={isLoading} />
        <h2> Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};
