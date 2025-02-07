import React from 'react';
import { Modal, Box, Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import img from '../assets/images/img-1.jpg';

const RecipeDetailsModal = ({ open, onClose, recipe }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '80%', md: '600px' }, 
    bgcolor: '#fff',
    boxShadow: 24,
    borderRadius: '15px',
    p: { xs: 2, sm: 3, md: 4 }, 
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '80vh',
    overflowY: 'auto',
    paddingTop: '50px',
    transition: 'all 0.3s ease-in-out',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    padding: 1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#f2f2f2',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="recipe-title"
      aria-describedby="recipe-details"
    >
      <Box sx={style}>
        <IconButton onClick={onClose} sx={closeButtonStyle}>
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={recipe?.image || img}
          alt={recipe?.name || 'Recipe'}
          sx={{
            width: '100%',
            height: { xs: '150px', sm: '200px' }, 
            objectFit: 'cover',
            borderRadius: '8px',
            mb: 3,
          }}
        />

        <Typography
          id="recipe-title"
          variant="h5" 
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }, 
          }}
        >
          {recipe?.name}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Calories:</strong> {recipe?.caloriesPerServing || 'N/A'} kcal
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Meal Type:</strong> {recipe?.mealType?.join(', ') || 'N/A'}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Preparation Time:</strong> {recipe?.cookTimeMinutes || 'N/A'} mins
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Serving Size:</strong> {recipe?.servings || 'N/A'}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Rating:</strong> {recipe?.rating || 'N/A'}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
          <strong>Ingredients:</strong>
        </Typography>
        <List>
          {recipe?.ingredients?.map((ingredient, index) => (
            <ListItem key={index} disablePadding sx={{ paddingLeft: 0 }}>
              <ListItemText primary={ingredient} sx={{ color: '#555', fontSize: '14px' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default RecipeDetailsModal;
