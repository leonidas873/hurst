import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleProduct from '../../Common/SingleProduct/SingleProduct';



const ShopProducts = ({productsData}) => {

  console.log(productsData)

    return <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {productsData?.map(({name, price, _id}, index) => (
        <Grid item xs={12} sm={4} md={4} key={index}>
          <SingleProduct name={name} price={price} productId={_id}/>
        </Grid>
      ))}
    </Grid>
  </Box>
}

export default ShopProducts;