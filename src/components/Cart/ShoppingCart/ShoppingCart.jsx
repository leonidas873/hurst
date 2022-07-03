import { useEffect } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StyledTableCell, StyledTableRow, StyledTableContainerWrapper, StyledCartProduct, StyledProductInfo, StyledProductImg, StyledQty, StyledCloseIcon} from './styles.js';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];



const ShoppinCart = ({setActivePage}) => {

    useEffect(() => {
        setActivePage("shoppingCart");
      }, []);
    

    return (<StyledTableContainerWrapper>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">product</StyledTableCell>
              <StyledTableCell align="center">price</StyledTableCell>
              <StyledTableCell align="center">quantity</StyledTableCell>
              <StyledTableCell align="center">total</StyledTableCell>
              <StyledTableCell align="center">remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                <StyledCartProduct>
                        <StyledProductImg>
                        <img src="/images/productImage.webp" alt="" />
                            </StyledProductImg>
                            <StyledProductInfo>
                                <h5>{row.name}</h5>
                                <p>color: 'white</p>
                                <p>size: 'm</p>
                            </StyledProductInfo>
                    </StyledCartProduct>
                  
                </StyledTableCell>
                <StyledTableCell align="center">
                    
                    $56.00
                    
                    </StyledTableCell>
                <StyledTableCell align="center">
                    <StyledQty>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                    </StyledQty>
                </StyledTableCell>
                <StyledTableCell align="center">${row.carbs}</StyledTableCell>
                <StyledTableCell align="center"><StyledCloseIcon/></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </StyledTableContainerWrapper>
    )
}

export default ShoppinCart;

