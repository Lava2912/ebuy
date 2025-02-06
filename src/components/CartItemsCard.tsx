import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { CartItemState, removeItemFromCart } from "./store/slice/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

interface cartProps {
  product: CartItemState;
}
const CartItemsCard = ({ product }: cartProps) => {
  const dispatch = useDispatch();

  const handleRemoveCartItem = (id: any) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <Card
      sx={{ display: "flex", width: "100%", height: "120px", margin: "10px" }}
    > 
      <CardMedia>
        <img src={product.thumbnail} height="100%" alt="title" />
      </CardMedia>
      <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Tooltip title={product.title}>
              <Typography
                sx={{ margin: "15px" }}
                component="div"
                variant="h6"
                width="200px"
                noWrap
              >
                {product.title}
              </Typography>
            </Tooltip>
          <Box >
          <Button size="large" >-</Button>
          <TextField size="small" style={{width:'20px'}} value={1}></TextField>
          <Button size="large">+</Button>
          </Box>
          <Typography sx={{ margin: "18px", width: "5px" }}>
            ${product.price}
          </Typography>
          <Button
            sx={{ marginLeft: "70px", width: "25px" }}
            onClick={() => {
              handleRemoveCartItem(product.id);
            }}
          >
            <DeleteIcon />
          </Button>
      </CardContent>
    </Card>
  );
};

export default CartItemsCard;
