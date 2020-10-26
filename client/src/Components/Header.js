import React from "react";
import { Typography, Slide } from "@material-ui/core";

const Header = () => {
  return (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Typography align="center" variant="h1" color="primary" style={{marginBottom: '3rem'}}>
          My Reads
        </Typography>
      </Slide>
  );
};
export default Header;
