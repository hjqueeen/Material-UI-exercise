import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShowDrawer from "./ShowDrawer";
import SetButton from "./SetButton";

const PAGES = ["PRODUCTS", "SERVICES", "CONTACT US", "ABOUT US"];

const Header = () => {
  const [TabValue, setTabValue] = useState("");
  const [pageChage, setPageChage] = useState(PAGES);

  const theme = useTheme();
  console.log(theme.breakpoints.down);

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0B2161" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography>SHOPEE</Typography>
              <ShowDrawer page={pageChage} />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={TabValue}
                onChange={(e, value) => {
                  setTabValue(value);
                }}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <SetButton />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
