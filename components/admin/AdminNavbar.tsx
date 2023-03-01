import NextLink from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UiContext } from "../../context";

export const AdminNavbar = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <NextLink href="/" passHref>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "underline white",
            }}
          >
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </div>
        </NextLink>
        <Box flex={1} />
        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
