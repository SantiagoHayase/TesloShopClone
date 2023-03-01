import { Typography } from "@mui/material";
import { NextPage } from "next";

import { ShopLayout } from "../components/layouts";
import ProductList from "../components/products/ProductList";
import { useProduct } from "../hooks";
import { FullScreenLoading } from "../components/ui/FullScreenLoading";

const HomePage: NextPage = () => {
  const { products, isLoading } = useProduct("/products");

  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mb: 1,
        }}
      >
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default HomePage;
