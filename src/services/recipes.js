import axios from "axios";

export const getRecipeData = async () => {
    try {
        const URL = import.meta.env.VITE_URL
        const response = await axios.get(URL)
        if(response){
            return response?.data?.recipes
        }
        return null;
    } catch (error) {
        console.error(`error while fetching recipe data : \n ${error}`)
    }
}