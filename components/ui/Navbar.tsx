import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context";
import { CartContext } from "../../context/cart/CartContext";

export const Navbar = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    router.push(`/search/${searchTerm}`);
    setIsSearchVisible(false);
  };

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
        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
          className="fadeIn"
        >
          <NextLink href="/category/men" passHref>
            <Button
              sx={{
                bgcolor: router.asPath === "/category/men" ? "black" : "",
                color: router.asPath === "/category/men" ? "white" : "",
                textDecoration: "underline white",
              }}
            >
              Hombres
            </Button>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Button
              sx={{
                bgcolor: router.asPath === "/category/women" ? "black" : "",
                color: router.asPath === "/category/women" ? "white" : "",
                textDecoration: "underline white",
              }}
            >
              Mujeres
            </Button>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Button
              sx={{
                bgcolor: router.asPath === "/category/kid" ? "black" : "",
                color: router.asPath === "/category/kid" ? "white" : "",
                textDecoration: "underline white",
              }}
            >
              Niños
            </Button>
          </NextLink>
        </Box>
        <Box flex={1} />

        {/* Pantallas grandes */}
        {isSearchVisible ? (
          <Input
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            className="fadeIn"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantallas chicas */}

        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart" passHref>
          <IconButton>
            <Badge
              badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
              color="secondary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>
        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
