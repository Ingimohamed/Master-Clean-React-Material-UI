import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import addingaddress from '../images/addingaddress.png';
import deleteaddress from '../images/deleteaddress.png';
import telIcon from '../images/telIcon.png';

const useStyles = theme => ({
    addressCard: {
        border: "1px solid #CAE7F1",
        borderRadius: "31px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
        position: "relative",
        background:"white",
    },
    root: {
        maxWidth: 345,
        border: "1px solid #CAE7F1",
        borderRadius: "31px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
        position: "relative",
        background:"white",
      },
      media: {
          height: 60,
          padding: "21px 25px 11px 25px",
          borderBottom: "2px solid #C2E5F1",
          fontSize: "20px",
          textAlign:"left",
    },
    imgs: {
        width: "8%",
        margin: "2px",
        float:"right",
    },
    telIcon: {
        marginLeft: "0px",
        marginBottom: "2px",
        width: "7%",
        display: "inline-block",
        verticalAlign:"middle",
    },
    cardBody: {
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        marginBottom:"1rem",
    },
    paddingBody: {
        padding:"1.25rem 2.25rem",
    },
});
class NewAddress extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <div>

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
                        >Home
        <span>
            <img className={classes.imgs} src={deleteaddress} alt="delete"/>
            <img className={classes.imgs} src={addingaddress} alt="add" />
        </span>
    </CardMedia>
        <CardContent className={classes.paddingBody}>
          <Typography className={classes.cardBody} align="left" variant="body2"  component="p">
          OMAR KHALED
          </Typography>
          <Typography className={classes.cardBody} align="left" variant="body2" component="p">
          12 Hassan Ma’moon Nasr City, Cairo Governorate
          </Typography>
          <Typography className={classes.cardBody} align="left" variant="body2"  component="p">
          +201141987688 <img className={classes.telIcon} src={telIcon} alt="telIcon"/>
          </Typography>
        </CardContent>
      </CardActionArea>
                </Card>
                
            </div>
         );
    }
}
 
export default withStyles(useStyles) (NewAddress);