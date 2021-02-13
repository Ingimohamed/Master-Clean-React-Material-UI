import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import newaddress from '../images/newaddress.png';

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
        height:170,
        padding:"1.25rem 2.25rem",
    },
    plusImg: {
        display: "block",
        marginTop: "auto",
        marginBottom: "auto",
        width:"25%",
    },
});
class EmptyAddress extends Component {
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
                        >
        <span>
           
        </span>
    </CardMedia>
    <CardContent className={classes.paddingBody}>
        <div className="outside-img">
           <img className={classes.plusImg} src={newaddress} alt="newaddress"/>
        </div>
        </CardContent>
      </CardActionArea>
                </Card>
                
            </div>
         );
    }
}
 
export default withStyles(useStyles) (EmptyAddress);