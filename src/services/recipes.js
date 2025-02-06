import axios from "axios";
import { v4 as uuidv4 } from 'uuid';  // for generating unique IDs

export const getRecipeData = async () => {
    try {
        const URL = import.meta.env.VITE_URL
        const response = await axios.get(URL)
        if(response){
            const data = response?.data?.hits;
            const dataWithIds = data.map((item) => ({
                ...item,
                id: uuidv4(), // Add unique ID
              }));
            return dataWithIds;
        }
        return null;
    } catch (error) {
        console.error(`error while fetching recipe data : \n ${error}`)
    }
}