import {
    Button,
    Divider,
    IconButton,
    Paper,
    Stack,
    TextField,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faCcVisa,
    faCcPaypal,
    faCcMastercard,
    faCcAmazonPay,
  } from "@fortawesome/free-brands-svg-icons";
  import { theme } from "./Themes/theme";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  
  const Checkout = () => {
    return (
      <Paper
        elevation={3}
        style={{
          height: "530px",
          width: "370px",
          backgroundColor: "#1976d2",
          color: "#ffffff",
          marginTop:'9px'
        }}
      >
        <Stack direction="column">
          <Typography
            marginLeft={2}
            marginTop={2}
            fontSize={20}
            fontFamily="cursive"
          >
            Card Details
          </Typography>
          <Typography marginLeft={2} marginTop={2}>
            Card type
          </Typography>
          <Stack direction="row" marginLeft={2} marginTop={2}>
            <FontAwesomeIcon
              style={{ margin: "3px" }}
              icon={faCcVisa}
              size="2x"
            />
            <FontAwesomeIcon
              style={{ margin: "3px" }}
              icon={faCcPaypal}
              size="2x"
            />
            <FontAwesomeIcon
              style={{ margin: "3px" }}
              icon={faCcMastercard}
              size="2x"
            />
            <FontAwesomeIcon
              style={{ margin: "3px" }}
              icon={faCcAmazonPay}
              size="2x"
            />
          </Stack>
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              label="card holder's name"
              placeholder="Name"
              style={{ margin: "10px" }}
            />
            <TextField
              variant="outlined"
              placeholder="1234 4657 2374 2846"
              label="card Number"
              style={{ margin: "10px" }}
            />
            <Stack direction="row">
              <TextField
                variant="outlined"
                placeholder="dd/MM/yyyy"
                label="expiration"
                style={{ margin: "10px", width: "180px" }}
              />
              <TextField
                variant="outlined"
                placeholder="***"
                label="cvv"
                style={{ margin: "10px", width: "100px" }}
              />
            </Stack>
          </ThemeProvider>
          <Divider style={{ margin: "10px", borderColor: "#F7F7FF" }} />
          <Typography style={{ margin: "10px" }}>Total</Typography>
          <Button
            endIcon={<ArrowForwardIcon />}
            style={{
              margin: "10px",
              backgroundColor: "#F7F7FF",
              fontFamily: "cursive",
            }}
          >
            Checkout
          </Button>
        </Stack>
      </Paper>
    );
  };
  
  export default Checkout;
  