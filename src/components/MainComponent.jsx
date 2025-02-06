import React, { useEffect, useState } from 'react';
import { RecipeReviewCard } from './CardComponent';
import { getRecipeData } from '../services/recipes';
import { Box } from '@mui/material';
import Loading from './LoadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from '../redux/slices/recipeSlice';
import SearchAppBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

const MainComponent = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Retrieve recipes from Redux store
  const recipes = useSelector((state) => state.recipe?.recipes);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  // Fetch recipes and store them in Redux
  const fetchData = async () => {
    try {
      const response = await getRecipeData();
      if (response) {
        dispatch(setRecipes(response));
      }
    } catch (error) {
      console.error(`Error fetching recipes: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // Filter recipes based on search query and meal type
  useEffect(() => {
    const filteredBySearch = recipes.filter((recipe) =>
      recipe?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredByType = filteredBySearch.filter((recipe) =>
      filter ?  recipe?.mealType.includes(filter) : true
    );
    setFilteredRecipes(filteredByType);
  }, [searchQuery, filter, recipes]);

  // Handle filter and search input changes
  const handleFilterChange = (value) => setFilter(value);
  const handleSearchChange = (event) => setSearchQuery(event.target?.value);

  return (
    <>
      <SearchAppBar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <Banner />
      <Box className="bg-neutral-200 w-full h-full flex flex-wrap gap-4 justify-evenly p-4">
        {filteredRecipes.length ? (
          filteredRecipes.map((recipe) => <RecipeReviewCard key={recipe?.id} recipe={recipe} />)
        ) : (
          <Loading />
        )}
      </Box>

      <Footer />
    </>
  );
};

export default MainComponent;
