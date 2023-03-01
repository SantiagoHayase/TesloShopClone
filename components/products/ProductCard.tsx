import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Chip,
} from "@mui/material";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoadead, setIsImageLoaded] = useState(false);

  // const productImage = useMemo(() => {
  //   return isHovered ? product.images[1] : product.images[0];
  // }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            {product.inStock === 0 && (
              <Chip
                color="primary"
                label="No hay disponibles"
                sx={{
                  position: "absolute",
                  zIndex: 99,
                  top: "10",
                  left: "10",
                }}
              />
            )}

            <CardMedia
              component="img"
              image={product.images[0]}
              alt={product.title}
              className="fadeIn"
              onLoad={() => {
                setIsImageLoaded(true);
              }}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box
        sx={{ mt: 1, display: isImageLoadead ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
