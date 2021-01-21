import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PrimarySearchAppBar from "./navbar";
import HomeHeader from "./homeHeader";
import Howitworks from "./Howitworks";
import StickyFooter from "./footer";
import OurFeatures from "./OurFeatures";
import OurServices from "./Ourservices";

const theme = createMuiTheme({
  status: {
    danger: "#00527D",
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
      <HomeHeader />
      <Howitworks />

      <OurFeatures />
      <OurServices />

      <StickyFooter />
    </ThemeProvider>
  );
};

export default Home;
