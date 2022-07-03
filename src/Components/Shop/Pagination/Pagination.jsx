import * as React from 'react';
import MUIPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { Box } from '@mui/system';

const Pagination = () => {
    return <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        margin:'30px 10px'
    }}
    ><Stack spacing={2}>
    <MUIPagination
      count={10}
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