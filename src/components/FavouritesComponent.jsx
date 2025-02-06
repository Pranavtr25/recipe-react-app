import { RecipeReviewCard } from './CardComponent';
import { Box, Typography } from '@mui/material';
import banner from '../assets/images/img-1.jpg';
import Loading from './LoadingComponent';
import { useSelector } from 'react-redux';
import SearchAppBar from './NavBar';
import EmptyFavorites from './Empty';
import { useEffect, useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';

const FavouritesComponent = () => {
  // State for search query and filters
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get favourites from Redux store
  const favouriteRecipes = useSelector((state) => state.recipe?.favourites);
  

  const [filteredRecipes, setFilteredRecipes] = useState(favouriteRecipes);

 
   useEffect(() => {
      const filteredBySearch = favouriteRecipes.filter((recipe) =>
        recipe?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const filteredByType = filteredBySearch.filter((recipe) =>
        filter ?  recipe?.mealType.includes(filter) : true
      );
      setFilteredRecipes(filteredByType);
    }, [searchQuery, filter, favouriteRecipes]);

  // For handling changes in filter dropdown
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // For handling changes in search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target?.value);
  };

  return (
    <>
      <SearchAppBar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <Banner />
      <Box className="bg-neutral-200 w-full h-full flex flex-wrap gap-4 justify-evenly p-4">
        {filteredRecipes.length ? (
          filteredRecipes.map((recipe) => (
            <RecipeReviewCard key={recipe?.id} recipe={recipe} />
          ))
        ) : (
          <EmptyFavorites />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default FavouritesComponent;
