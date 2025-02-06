import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function LoadingState() {
  return (
    <Grid container sx={{ width: '100vw', height: 'auto' }} spacing={2}>
      {Array.from(new Array(12)).map((_, index) => ( // 3 rows with 4 items each
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box sx={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', gap: 1 }}> {/* Increased height */}
            <Skeleton variant="rectangular" width="100%" height={118} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default function Loading() {
  return (
    <Box sx={{ width: '100vw', height: 'auto', overflowY: 'auto', padding: 2 }}> {/* Allow scrolling */}
      <LoadingState />
    </Box>
  );
}
