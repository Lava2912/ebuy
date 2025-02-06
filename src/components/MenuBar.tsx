import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MenuBar = () => {
  const cartQuantity = useSelector((state: RootState) => {
    return state.Cart.items;
  });
  console.log(cartQuantity);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopkart"
          >
            <ShoppingBagIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontFamily: "Cursive" } }}
          >
            ShopKart
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Button href="/products" variant="text" color="inherit">
            Products
          </Button>
          <Button href="/products" variant="text" color="inherit">
            Login
          </Button>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show no of items in cart"
              color="inherit"
              href="/cart"
            >
              <Badge badgeContent={2} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show no of items in cart"
              color="inherit"
              href="/cart"
            >
              <Badge badgeContent={cartQuantity.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
