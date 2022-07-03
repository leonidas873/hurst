import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { DropDown } from "../Common/Common";
import styled from "@emotion/styled";

const Categories = () => {

    return   <DropDown title={"categories"}>
<BodyItem>chair</BodyItem>
            <BodyItem>1chair</BodyItem>
            <BodyItem>2chair</BodyItem>
            <BodyItem>3chair</BodyItem>
  </DropDown>
}

export default Categories;

const BodyItem = styled.div`
transition:0.3s;
    font-size:15px;
    padding:5px;
    cursor:pointer;
&:hover{
    color:#c8a165;
    
}
`