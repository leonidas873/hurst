import { Box } from "@mui/system";
import { useEffect } from "react";

const OrderComplete = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("orderComplete");
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          background: "white",
          textAlign: "center",
          padding: "20px",
          fontSize:'20px',
          fontWeight:'bold'
        }}
      >
        <p>thank you your order has been recieved</p>
      </Box>
      <Box
        sx={{
          background: "white",
          textAlign: "center",
          padding: "20px",
          display:'flex',
          flexWrap:'wrap'
        }}
      >
        <Box
          sx={{
            background: "white",
            textAlign: "center",
            width: { xs: "100%", sm: "50%", md: "25%" },
            padding:'10px',
            boxSizing:'border-box'
          }}
        >
          <h4>ORDER NO</h4>
          <p>m 2512314</p>
        </Box>
        <Box
          sx={{
            background: "white",
            textAlign: "center",
            width: { xs: "100%", sm: "50%", md: "25%" },
            padding:'10px',
            boxSizing:'border-box'
          }}
        >
          <h4>ORDER NO</h4>
          <p>m 2512314</p>
        </Box>
        <Box
          sx={{
            background: "white",
            textAlign: "center",
            width: { xs: "100%", sm: "50%", md: "25%" },
            padding:'10px',
            boxSizing:'border-box'
          }}
        >
          <h4>ORDER NO</h4>
          <p>m 2512314</p>
        </Box>
        <Box
          sx={{
            background: "white",
            textAlign: "center",
            width: { xs: "100%", sm: "50%", md: "25%" },
            padding:'10px',
            boxSizing:'border-box'
          }}
        >
          <h4>ORDER NO</h4>
          <p>m 2512314</p>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderComplete;
