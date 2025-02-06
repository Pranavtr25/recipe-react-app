import { RecipeReviewCard } from './CardComponent'
import { Box ,Typography} from '@mui/material'
import banner from '../assets/images/img-1.jpg'
import Loading from './LoadingComponent'
import { useSelector } from 'react-redux'
import SearchAppBar from './NavBar'
import EmptyFavorites from './Empty'
import { useEffect, useState } from 'react'
import Banner from './Banner'
import Footer from './Footer'

const FavouritesComponent = () => {
    const [filter, setFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('')

    const favouriteRecipes = useSelector((state) => state.recipe?.favourites)
    const [filteredRecipes, setFilteredRecipes] = useState(favouriteRecipes);

    useEffect(() => {
        const filteredBySearch = favouriteRecipes.filter((recipe) => {
            return recipe.recipe?.label.toLowerCase().includes(searchQuery.toLowerCase());
        },[searchQuery, favouriteRecipes])
        const filteredByType = filteredBySearch.filter((recipe) => {
            return filter ? recipe?.recipe?.mealType[0].toLowerCase().includes(filter.toLowerCase()) : true ;
        })
        setFilteredRecipes(filteredByType);

    },[searchQuery, filter, favouriteRecipes])

    const handleFilterChange = (value) => {
        setFilter(value);  //update the filter value
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target?.value)
    }


      return (
        <>
            <SearchAppBar onFilterChange = {handleFilterChange} onSearchChange = {handleSearchChange}/>
            <Banner/>
            <Box className='bg-neutral-200 w-full h-full flex flex-wrap gap-4 justify-evenly p-4' >
    
            {
                filteredRecipes.length? 
                filteredRecipes.map((recipe) => {
                    return <RecipeReviewCard key={recipe?.id} recipe = {recipe}/>
                }) : <EmptyFavorites/>
            }
            </Box>
            <Footer/>
        </>
      )
}

export default FavouritesComponent