import React from "react";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ProductCategoryCard from "./ProductCategoryCard";
import Men from "../assets/men's clothing.jpg";
import Women from "../assets/women's clothing.jpg";
import kid from "../assets/kid's clothing.jpg";
import HnL from "../assets/scandinavian-living-room-interior-design-zoom-background.jpg";
import Gift from "../assets/cute-lot-gifts.jpg";

function ProductCatelog() {
  return (
    <Box>
      <NavBar />
      <Box>
        <Box sx={{ display: "flex", margin: "100px" }}>
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{ fontSize: "42px", fontWeight: "bold", color: "#F14A41" }}
            >
              Product Catelog
            </Typography>
          </Box>

          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button sx={{ border: "1px solid #F14A41", borderRadius: "15px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#F14A41",
                  textTransform: "none",
                  margin: "0px 20px 0px 20px",
                }}
              >
                My Favorites
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ margin: "0px 90px 0px 90px" }}>
          <Box sx={{ display: "flex" }}>
            <ProductCategoryCard
              cardimg={Men}
              title="Men's Clothing"
              height="400px"
              width="500px"
            />
            {/*<ProductCategoryCard cardimg={Women} title="Women's Clothing" />*/}
            <ProductCategoryCard
              cardimg={kid}
              title="Kid's Clothing"
              height="400px"
              width="350px"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <ProductCategoryCard
              cardimg={HnL}
              title="Home & Living"
              height="400px"
              width="350px"
            />
            <ProductCategoryCard
              cardimg={Gift}
              title="Gift"
              height="400px"
              width="350px"
            />
            <ProductCategoryCard
              cardimg={Men}
              title="Accessories"
              height="400px"
              width="350px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCatelog;
