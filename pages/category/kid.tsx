import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import ProductList from "../../components/products/ProductList";
import { FullScreenLoading } from "../../components/ui";
import { useProduct } from "../../hooks";

const KidPage: NextPage = () => {
  const { products, isLoading } = useProduct("/products?gender=kid");
  return (
    <ShopLayout
      title={"Teslo-Shop - Kid"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      <Typography variant="h1" component="h1">
        Tienda - Niños
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mb: 1,
        }}
      >
        Productos para niños
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
