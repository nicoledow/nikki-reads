import React, { useState, useEffect } from "react";
import { Container, Typography, Slide } from "@material-ui/core";

const Header = () => {
  return (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Typography align="center" variant="h1" color="primary">
          My Reads
        </Typography>
      </Slide>
  );
};
export default Header;
