import {
    Box,
    Button,
    Container,
    Divider,
    Grid2,
    Paper,
    Stack,
    Table,
    TableCell,
    Typography,
  } from "@mui/material";
  import React from "react";
  import "./Cart.scss";
  import { useDispatch, useSelector } from "react-redux";
  import { RootState } from "./store";
  import { clearCart, removeItemFromCart } from "./store/slice/CartSlice";
  import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
  import CartItemsCard from "./CartItemsCard";
  import Checkout from "./Checkout";
  
  const Cart = () => {
    const cartItem = useSelector((state: RootState) => {
      return state.Cart.items;
    });
    const dispatch = useDispatch();
  
    const emptyCart = () => {
      dispatch(clearCart());
    };
  
    return (
      <Container style={{display:'grid', gridTemplateColumns:'2fr 1fr',columnGap:'40px', alignItems:"flex-start", marginTop:'20px'}}>
            <Box style={{display:'flex',
                flexDirection:'column'}}>
            {cartItem.length !== 0 ? (
              cartItem.map((item) => <CartItemsCard product={item} />)
             
            ) : (
              <Box
                sx={{
                  width: "35rem",
                  height: "5rem",
                  maxWidth: "100vw",
                  maxHeight: "100dvh",
                  margin: "auto",
                }}
              >
                <Typography
                  component="div"
                  variant="h6"
                  gutterBottom
                  // marginLeft={8}
                  // justifyContent="center"
                >
                  Your cart is empty. Please continue shopping
                </Typography>
                
                <Button
                  variant="contained"
                  color="warning"
                  href="/products"
                  style={{
                    width: "250px",
                    display: "flex",
                    flexDirection: "row",
                    fontStyle: "italic",
                    // marginTop: "10px",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    marginLeft: "54px",
                    // justifyContent: "center",
                  }}
                >
                  <ArrowLeftIcon />
                  Continue Shopping
                </Button>
              </Box>
             
            )}
             </Box>
          {cartItem.length !== 0 && (
              <Checkout />
          )}
        
      </Container>
    );
  };
  
  export default Cart;
  