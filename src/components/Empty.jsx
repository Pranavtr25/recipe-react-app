import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const EmptyFavorites = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        textAlign: 'center',
      }}
    >
      {/* Icon to represent empty favorites */}
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#f0f0f0',
          mb: 2,
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: '48px', color: '#ccc' }} />
      </Paper>

      {/* Message to indicate that the favorites are empty */}
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your favorites are currently empty.
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Start adding your favorite recipes to this list!
      </Typography>

      {/* Button to allow the user to add favorites */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            padding: '10px 20px',
            fontSize: '16px',
          }}
        >
          Add to Favorites
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyFavorites;
