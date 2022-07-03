import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { CheckoutStyled, StyledButton } from "./styles";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Select } from "@mui/material";
import { StyledForm } from "./styles";
import { Box } from "@mui/system";
import { MainButton } from "../../Common";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .required("name is required"),
  email: yup
    .string("Enter your email")
    .required("email is required"),
  mobile: yup
    .number("Enter your phone")
    .required("mobile is required"),
  company: yup
    .string("Enter your company")
    .required("company is required"),
});

const Checkout = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("checkout");
  }, []);

  // formik

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      company: "",
      country: "",
      state: "",
      town: "",
      address: "",
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <CheckoutStyled>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            "& > textarea": {
              padding: "10px",
              height: "100px",
              borderRadius: "5px",
              border: "1px solid #969696",
            },
           
          }}
        >
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            "& > p span": {
              color:'#C87065'
            }}
          }
          >
            <h3>BILLING DETAILS</h3>
            <p>Order total: <span>122$</span></p>
          </Box>
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Your name here..."
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="Email address here"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            placeholder="Phone here"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
          <TextField
            fullWidth
            id="company"
            name="company"
            placeholder="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
          <Select
            id="country"
            name="country"
            value={formik.country}
            onChange={formik.handleChange}
            defaultValue={" "}
            
          >
            <MenuItem selected value=" ">
              <em>country</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <Select
            id="state"
            name="state"
            defaultValue={" "}
            value={formik.state}
            onChange={formik.handleChange}
          >
            <MenuItem value=" ">
              <em>state</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <Select
            id="town"
            name="town"
            defaultValue={" "}
            value={formik.town}
            onChange={formik.handleChange}
          >
            <MenuItem value=" ">
              <em>town/city</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <textarea
            placeholder="enter text address"
            name="address"
            onChange={formik.handleChange}
            value={formik.address}
          />
<StyledButton>
<MainButton name={"place order"} altName={"place order"}/>
</StyledButton>
        </Box>

        
      </StyledForm>
    </CheckoutStyled>
  );
};

export default Checkout;
