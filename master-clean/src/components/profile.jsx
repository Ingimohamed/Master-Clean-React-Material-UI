import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfilePaper from './ProfilePaper';
import Container from '@material-ui/core/Container';
import ProfileMyCart from './ProfileMycart';
import AllRights from './AllRights';
import { Link, NavLink } from "react-router-dom";

const useStyles =(theme) => ({
  title: {
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    fontWeight: "700",
    fontSize: "2rem",
    paddingBottom: "3rem",
    [theme.breakpoints.up('sm')]: {
      fontSize:"2.5rem",
    },
  },
  container: {
    padding: "3rem 1rem 3rem 1rem",
    [theme.breakpoints.up('sm')]: {
      padding: "3rem 6rem 3rem 6rem",
    },
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


