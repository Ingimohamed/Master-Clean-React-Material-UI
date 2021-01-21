import React from 'react';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from './navbar';
import HomeHeader from './homeHeader';
import Howitworks from './Howitworks';

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
      </ThemeProvider>
    );
}
 
export default Home;
