import React from "react";
import { Container, GridList, GridListTile } from "@material-ui/core";
import MainMenuBox from "./MainMenuBox";

const MainNav = () => {
  const features = [
    { title: "My Logs", link: "/logs" },
    { title: "Explore", link: "/explore" },
  ];

  const menuBoxStyles = {
    border: '3px solid blue',
    padding: '2rem',
    width: `${100 / features.length}%`
  }

  return (
    <Container>
      <GridList spacing={features.length} cols={features.length}>
        {features.map((f) => {
          return (
            <GridListTile style={menuBoxStyles}>
              <MainMenuBox title={f.title} link={f.link} />
            </GridListTile>
          );
        })}
      </GridList>
    </Container>
  );
};
export default MainNav;
