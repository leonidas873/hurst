import * as React from 'react';
import MUIPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { Box } from '@mui/system';
import {useDispatch} from 'react-redux';
import { setShopPage } from '../../../redux/slices/filtersSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const Pagination = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const search = useLocation().search;
const queryPage = new URLSearchParams(search).get('page');


const handleChangePage = (e, num) => {
  dispatch(setShopPage(num));
  navigate(`/shop?page=${num}`)
}

    return <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        margin:'30px 10px'
    }}
    ><Stack spacing={2}>
    <MUIPagination
      count={10}
      defaultPage={parseInt(queryPage) ?  parseInt(queryPage) : 1}
      onChange={handleChangePage}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: AiOutlineArrowLeft, next: AiOutlineArrowRight }}
          {...item}
        />
      )}
    />
  </Stack>
  </Box>
}

export default Pagination;