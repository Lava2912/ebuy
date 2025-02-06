import React, { useState } from "react";
import "./Pagination.scss";
import { useGetProductsQuery } from "./store/shoppingQuery/ShoppingQuery";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./store/slice/CartSlice";

const Pagination = () => {
  // const [data, setData] = useState<ProductData[]>([]);
  const [page, setPage] = useState(0);
  const { isLoading, data: products = [], error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= products?.length / 10 && newPage !== page)
      setPage(newPage);
  };

  const AddToCart = (product: any) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };
  return (
    <div className="background">
      <Container className="container">
        {products &&
          products.slice(page * 10 - 10, page * 10).map((product: any) => (
            <Card
              key={product.id}
              style={{ width: 240 }}
              className="product__card"
            >
              <CardMedia
                className="product_image"
                image={product.thumbnail}
                title={product.title}
              />
              <Tooltip title={product.title}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product__title"
                  noWrap
                  style={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {product.title}
                </Typography>
              </Tooltip>
              <Typography
                gutterBottom
                variant="h5"
                className="product__title"
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "GrayText",
                }}
              >
                $ {product.price}
              </Typography>

              <Rating value={product.rating} readOnly />
              <CardActions>
                <Button
                  className="cart__button"
                  variant="contained"
                  startIcon={<ShoppingCartOutlinedIcon />}
                  onClick={() => AddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))}
      </Container>

      <div className="pagination">
        {page > 1 && (
          <span onClick={() => handlePageChange(page - 1)}>previous</span>
        )}

        {products &&
          products.length > 0 &&
          [...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination-selected" : ""}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

        {page < products.length / 10 && (
          <span onClick={() => handlePageChange(page + 1)}>next</span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
