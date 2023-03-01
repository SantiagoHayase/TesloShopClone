import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import ProductList from "../../components/products/ProductList";
import { FullScreenLoading } from "../../components/ui";
import { useProduct } from "../../hooks";

const MenPage: NextPage = () => {
  const { products, isLoading } = useProduct("/products?gender=men");
  return (
    <ShopLayout
      title={"Teslo-Shop - Men"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      <Typography variant="h1" component="h1">
        Tienda - Hombres
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mb: 1,
        }}
      >
        Productos para hombres
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
