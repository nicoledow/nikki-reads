import React from "react";
import { Typography } from "@material-ui/core";
import theme from "../Theme/Theme";

const CurrentBooks = () => {
 
  const styles = {
      border: `1px solid ${theme.palette.info.main}`
  }

  return (
    <div style={styles}>
      <div style={styles}>
        <Typography variant="h3">Outlander</Typography>
      </div>
      <div style={styles}>
          Page 500/850
      </div>
    </div>
  );
};

export default CurrentBooks;
