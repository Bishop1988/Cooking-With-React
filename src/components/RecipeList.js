import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({  filteredRecipes }) {
  const { handleRecipeAdd, handleRecipeSearchboxChange } = useContext(RecipeContext)

  return (
    <div className="recipe-list">
      <div>
        <div className="recipe-list__searchbox">
          <label
            htmlFor="searchbox"
            className="recipe-list__label">
            Search Recipes
          </label>
          <input 
            type="text"
            name="searchbox"
            id="searchbox"
            className="recipe-list__input"
            onChange={handleRecipeSearchboxChange}
          />
        </div>
        {filteredRecipes.map((recipe) => {
          return (
            <Recipe key={recipe.id} {...recipe} />
          );
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button 
          className="btn btn--primary" 
          onClick={handleRecipeAdd}>
            Add Recipe
        </button>
      </div>
    </div>
  );
}
