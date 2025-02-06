import React, { useEffect, useState } from 'react'
import { RecipeReviewCard } from './CardComponent'
import { getRecipeData } from '../services/recipes'
import { Box ,Typography} from '@mui/material'
import Loading from './LoadingComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setRecipes } from '../redux/slices/recipeSlice'
import SearchAppBar from './NavBar'
import Banner from './Banner'
import Footer from './Footer'

const MainComponent = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('')
    
    const recipes = useSelector((state) => state.recipe?.recipes)
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    
    const fetchData = async () => {
        try {
            const response = await getRecipeData()
            if(response){
                dispatch(setRecipes(response));  // save recipes to redux store
            }
        } catch (error) {
            console.error(`error fetching recipes : \n ${error}`);
        }
    }
    useEffect(() => {
        fetchData();
    },[dispatch])


    useEffect(() => {
        const filteredBySearch = recipes.filter((recipe) => {
            return recipe.recipe?.label.toLowerCase().includes(searchQuery.toLowerCase());
        },[searchQuery, recipes])
        const filteredByType = filteredBySearch.filter((recipe) => {
            return filter ? recipe?.recipe?.mealType[0].toLowerCase().includes(filter.toLowerCase()) : true ;
        })
        setFilteredRecipes(filteredByType);

    },[searchQuery, filter, recipes])


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
            }) : <Loading/>
        }
        </Box>
        <Footer/>
    </>
  )
}

export default MainComponent