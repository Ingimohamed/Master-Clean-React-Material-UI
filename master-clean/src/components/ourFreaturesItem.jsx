import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import feature1 from "../images/feature1.png";
// import feature2 from "../images/feature2.png";
// import feature3 from "../images/feature3.png";
// import feature4 from "../images/feature4.png";
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: "auto",
    marginBottom:"104px",
    maxWidth: "475px",
    height:"171px",
    padding: "30px",
    borderRadius: "20px",
  },
  image: {
    width: "90px",
    marginRight: "20px",
    float: "left",
    height: "auto",
  },
  imageBox: {
    width: "101px",
    height:"99px",
  },
  cartTitle: {
    fontWeight: "600",
    color:"#00527D",
  },
  cartBody: {
    color: "#53656F",
    fontSize: "14px",
  },
});

class OurFeaturesItem extends Component {
  state = {
    title: this.props.title,
    images: this.props.images,
    body:this.props.body,
  };
  render() { 
    const { classes } = this.props;
    return ( 
      <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.imageBox}>
                <img className={classes.image} src={this.state.images} alt="feature"/>
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left" className={classes.cartTitle}>
                    {this.state.title}
                </Typography>
                <Typography className={classes.cartBody} align="left" variant="body2" gutterBottom>
                  {this.state.body}
                </Typography>
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
    </div>
     );
  }
}
 
export default withStyles(useStyles) (OurFeaturesItem);