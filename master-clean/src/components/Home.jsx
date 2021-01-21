import React from 'react';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from './navbar';
import HomeHeader from './homeHeader';

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
           <Container>
                
           </Container>
        </ThemeProvider>
       
     );
}
 
export default Home;
