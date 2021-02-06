import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfilePaper from './ProfilePaper';
import Container from '@material-ui/core/Container';
import ProfileMyCart from './ProfileMycart';
import AllRights from './AllRights';

const useStyles =(theme) => ({
  title: {
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    fontWeight: "700",
    fontSize: "2.5rem",
    paddingBottom:"3rem",
  },
  container: {
    padding:"3rem 6rem 3rem 6rem",
  },
  background: {
    backgroundColor: "white",
    boxShadow:"inset 0px 0px 8px grey",
  },
});
  class Profile extends Component {
    state = {  }
    render() { 
      const { classes } = this.props;
      return ( 
        <div className={classes.background}>
          <Container maxWidth="lg" className={classes.container}>
                      <Typography className={classes.title}  variant="h1" component="h2" gutterBottom align="center">
                          My Dashboard
                      </Typography>
                          
            <ProfilePaper />
            <ProfileMyCart />
            <AllRights />
              </Container>
        </div>
       
       );
    }
  }
   
  export default withStyles(useStyles) (Profile);


