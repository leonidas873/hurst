import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleProduct from '../../Common/SingleProduct/SingleProduct';



const ShopProducts = () => {
    return <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(7)).map((_, index) => (
        <Grid item xs={12} sm={4} md={4} key={index}>
          <SingleProduct/>
        </Grid>
      ))}
    </Grid>
  </Box>
}

export default ShopProducts;