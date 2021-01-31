import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import HomeHeader from "./homeHeader";
import Howitworks from "./Howitworks";
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
     
      <HomeHeader />
      <Howitworks />

      <OurFeatures />
      <OurServices />
    </ThemeProvider>
  );
};

export default Home;
