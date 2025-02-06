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
    width: 600, // Modal width
    bgcolor: '#fff', // White background for the modal
    boxShadow: 24,
    borderRadius: '15px', // Rounded corners for a smooth look
    p: 4,
    display: 'flex',
    flexDirection: 'column', // Align content vertically
    maxHeight: '80vh', // Limit the height of the modal to 80% of the viewport
    overflowY: 'auto', // Enable scrolling for entire modal
    paddingTop: '50px', // Added space at the top for the close icon
    transition: 'all 0.3s ease-in-out', // Smooth transition for the modal
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
        {/* Close Button (top-right corner) */}
        <IconButton onClick={onClose} sx={closeButtonStyle}>
          <CloseIcon />
        </IconButton>

        {/* Recipe Image */}
        <Box
          component="img"
          src={recipe?.recipe?.image || img}
          alt={recipe?.recipe?.label || 'Recipe'}
          sx={{
            width: '100%',
            height: '200px', // Adjusted size for better fit
            objectFit: 'cover',
            borderRadius: '8px',
            mb: 3,
          }}
        />

        {/* Recipe Title */}
        <Typography
          id="recipe-title"
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#333', // Darker color for the title
            mb: 2,
            textAlign: 'center',
          }}
        >
          {recipe?.recipe?.label || 'Recipe Title'}
        </Typography>

        {/* Recipe Details */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Calories:</strong> {recipe?.recipe?.calories || 'N/A'} kcal
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Meal Type:</strong> {recipe?.recipe?.mealType || 'N/A'}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Preparation Time:</strong> {recipe?.recipe?.totalTime || 'N/A'} mins
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Serving Size:</strong> {recipe?.recipe?.totalWeight || 'N/A'} mg
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: '500', mb: 1 }}>
            <strong>Source:</strong> {recipe?.recipe?.source || 'N/A'}
          </Typography>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Ingredients */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
          <strong>Ingredients:</strong>
        </Typography>
        <List>
          {recipe?.recipe?.ingredients?.map((ingredient, index) => (
            <ListItem key={index} disablePadding sx={{ paddingLeft: 0 }}>
              <ListItemText primary={ingredient?.food} sx={{ color: '#555', fontSize: '16px' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default RecipeDetailsModal;
