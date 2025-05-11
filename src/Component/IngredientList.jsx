import { Ingredient } from "./Ingredient";

export const IngredientList = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((ingredient) => (
          <Ingredient ingredient={ingredient} />
        ))
      )}
    </div>
  );
};
