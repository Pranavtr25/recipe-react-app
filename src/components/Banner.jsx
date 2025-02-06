import React from 'react';
import { Box, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/img-1.jpg'
import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.jpg'

const Banner = () => {
  const images = [
    {
      src: img1,
      alt: "Image 1",
      caption: "Discover Amazing Recipes",
    },
    {
      src: img2,
      alt: "Image 2",
      caption: "Cook Delicious Meals",
    },
    {
      src: img3,
      alt: "Image 3",
      caption: "Enjoy Your Culinary Journey",
    },
  ];

  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
              backgroundColor: '#000',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '400px',
                filter: 'brightness(70%)',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: 'absolute',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              }}
            >
              {image.caption}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
