import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../redux/slices/recipeSlice';
import RecipeDetailsModal from './RecipeDetailsModal';

export const RecipeReviewCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // favourites from redux store
  const favourites = useSelector((state) => state.recipe?.favourites);
  const dispatch = useDispatch();
  const isFavourite = favourites.some((fav) => fav.id === recipe?.id);

  // Function to handle favorite button click
  const handleFavouriteClick = () => {
    try {
      if (isFavourite) {
        dispatch(removeFavourite(recipe?.id));
      } else {
        dispatch(addFavourite(recipe));
      }
    } catch (error) {
      console.error(`Error while handling favorite:\n${error}`);
    }
  };

  return (
    <>
      <Card
        sx={{
          width: 345, 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '8px', 
          boxShadow: 3, 
          height: '400px', 
        }}
      >
        <CardMedia
          component="img"
          image={recipe?.image} 
          alt={recipe?.name}
          sx={{
            height: '200px', 
            width: '100%',
            objectFit: 'cover', 
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        />

        <CardContent
          sx={{
            padding: '16px',
            textAlign: 'center',
            height: '100px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden', 
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              fontSize: '18px',
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap', 
            }}
          >
            {recipe?.name || 'Recipe Title'}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '14px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {recipe?.mealType || 'Meal Type'} 
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <IconButton aria-label="add to favorites" onClick={handleFavouriteClick}>
            <FavoriteIcon color={isFavourite ? 'error' : 'disabled'} />
          </IconButton>

          <Button
            variant="outlined"
            color="success"
            onClick={handleOpen}
            sx={{
              textTransform: 'none', 
              padding: '6px 16px',
              fontSize: '14px',
              minWidth: '100px', 
              height: '36px',
            }}
          >
            View More
          </Button>
        </CardActions>
      </Card>

      <RecipeDetailsModal open={open} onClose={handleClose} recipe={recipe} />
    </>
  );
};
