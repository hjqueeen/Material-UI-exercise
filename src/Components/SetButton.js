import React from "react";
import { Button } from "@mui/material";

const SetButton = () => {
  return (
    <>
      <Button
        sx={{ marginLeft: "auto", marginBottom: "2px" }}
        variant="contained"
      >
        Login
      </Button>
      <Button sx={{ marginLeft: "10px" }} variant="contained">
        Sign Up
      </Button>
    </>
  );
};

export default SetButton;
