import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../layouts";

export const FullScreenLoading = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography sx={{ mb: 3 }} variant="h2" fontWeight={200} fontSize={20}>
          Cargando...
        </Typography>
        <CircularProgress thickness={2} />
      </Box>
    </ShopLayout>
  );
};
