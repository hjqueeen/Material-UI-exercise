import React, { useState } from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ShowDrawer = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const pageChangeHandler = props.page;
  console.log(pageChangeHandler);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {pageChangeHandler.map((page, index) => (
          <List key={index}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        ))}
        <>
          <Button
            sx={{ marginLeft: "5px", marginRight: "5px", marginBottom: "2px" }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{ marginLeft: "5px", marginRight: "5px" }}
            variant="contained"
          >
            Sign Up
          </Button>
        </>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: " auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default ShowDrawer;
