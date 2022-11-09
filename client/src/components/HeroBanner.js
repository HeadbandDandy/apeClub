import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/ape-png-1.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="gold" fontWeight="600" fontSize="80px">Welcome to  <br /> The Ape Club!</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Time to go <br />
      Ape Shit!
    </Typography>
    <Typography fontSize="22px" fontFamily="Raleway" lineHeight="35px">
      Click below to start personalizing your workouts!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'red', padding: '14px', fontSize: '30px', textTransform: 'none', color: 'gold', borderRadius: '4px' }}>Find Your Lifts!</a>
    </Stack>
    <Typography fontWeight={600} color="gold" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Release <br/> The Beast!
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;