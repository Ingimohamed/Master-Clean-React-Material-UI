import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfilePaper from './ProfilePaper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles =(theme) => ({
  title: {
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    fontWeight: "700",
    fontSize:"2.5rem",
  },
  container: {
    padding:"3rem 0 3rem 0",
  },
});
  class Profile extends Component {
    state = {  }
    render() { 
      const { classes } = this.props;
      return ( 
        <Container maxWidth="sm" className={classes.container}>
        <CssBaseline />
        <Typography className={classes.title}  variant="h1" component="h2" gutterBottom align="center">
             My Dashboard
     </Typography>
            
      <ProfilePaper/>
    </Container>
       );
    }
  }
   
  export default withStyles(useStyles) (Profile);


