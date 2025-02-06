import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourites : [],  // list of favourite recipes
    recipes : []      // list of fetched recipes
};

const recipeSlice = createSlice({
    name : 'recipe',
    initialState,
    reducers : {
        setRecipes : (state, action) => {
            state.recipes = action.payload;  // save fetched recipes
        },
        addFavourite : (state, action) => {
            const recipe = action.payload;
            if(!state.favourites.find((fav) => fav.id === recipe.id)){
                state.favourites.push(recipe); // Add to favorites if not already present
            }
        },
        removeFavourite : (state, action) => {
            state.favourites = state.favourites.filter((fav) => fav.id !== action.payload); // remove from favourites by filtering if matched
        }
    }
})

export const {setRecipes, addFavourite, removeFavourite} = recipeSlice.actions;

export default recipeSlice.reducer;