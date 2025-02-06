import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],  // List of favourite recipes
    recipes: []      // List of fetched recipes
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        // Save fetched recipes
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        // Add to favourites if not already present
        addFavourite: (state, action) => {
            const recipe = action.payload;
            if (!state.favourites.find((fav) => fav.id === recipe.id)) {
                state.favourites.push(recipe);
            }
        },
        // Remove recipe from favourites
        removeFavourite: (state, action) => {
            state.favourites = state.favourites.filter((fav) => fav.id !== action.payload);
        }
    }
});

export const { setRecipes, addFavourite, removeFavourite } = recipeSlice.actions;

export default recipeSlice.reducer;
