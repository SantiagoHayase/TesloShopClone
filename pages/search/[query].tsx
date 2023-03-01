import { Typography } from "@mui/material";
import { NextPage, GetServerSideProps } from "next";

import { ShopLayout } from "../../components/layouts";
import ProductList from "../../components/products/ProductList";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"Teslo-Shop - Search"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      <Typography variant="h1" component="h1">
        Buscar producto
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Término: {query}
        </Typography>
      ) : (
        <>
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto con {query}
          </Typography>
        </>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;
  console.log(foundProducts);

  // TODO: retornar otros productos
  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
    return {
      props: { products, foundProducts, query },
    };
  }

  return {
    props: { products, foundProducts, query },
  };
};

export default SearchPage;
