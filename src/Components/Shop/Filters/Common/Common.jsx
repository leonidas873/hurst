import styled from "@emotion/styled";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setActiveFilter } from "../../../../redux/slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";


export const DropDown = ({ children, title }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {activeFilter} = useSelector(state=>state)

  return (
    <Dropdown>
      <Title onClick={() => {
        dispatch(setActiveFilter(title))
        if(activeFilter==title){
          dispatch(setActiveFilter(''))
        } 
        }}>{title}</Title>
      <AnimatePresence>
        {(activeFilter==title) && (
            <Body
             initial={{ height: 0 }}
             animate={{ height: "auto" }}
             exit={{ height: 0 }}
             transition={{type:'tween'}}
            ><BodyContent>
                {children}
                </BodyContent>
                </Body>
        )}
      </AnimatePresence>
    </Dropdown>
  );
};

export const Dropdown = styled.div`
  position: relative;
`;

export const Title = styled.div`
  border: "2px solid black";
  transition: 0.3s;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #c8a165;
  }
`;

export const Body = styled(motion.div)`
  
  border: 2px solid #7272728c;
  margin-top: 13px;
  position: absolute;
  left: 0;
  bottom: auto;
  background-color: white;
  overflow:hidden;
`;


export const BodyContent = styled.div`
     
     padding:10px;
     box-sizing: border-box;
`