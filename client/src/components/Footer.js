import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/2cd43b_18a1d148489544cf8007f17349ea3482_mv2.png';

const Footer = () => (
  <Box mt="80px" bgcolor="black">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"></Typography>
  </Box>
);

export default Footer;