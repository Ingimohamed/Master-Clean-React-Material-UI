import React from "react";
import {createMuiTheme,makeStyles,ThemeProvider} from "@material-ui/core/styles";
import headerimg2 from "../images/headerimg2.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUpModal from './homeSignupModal';
import LoginModal from './homeLoginModal';
import Grid from '@material-ui/core/Grid';
const theme = createMuiTheme({
  status: {
    danger: "#00527D",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(255,225,255,0.5),rgba(255,255,255,0.5)), url(${headerimg2})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundOrigin: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "left",
  },
  typographyh1: {
    color: "#00527D",
    fontSize: "70px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  typographyh3: {
    color: "#00527D",
    fontSize: "30px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    padding: "18% 10%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function HomeHeader() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };
    
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root}>
        <Container className={classes.container}>
          <Typography
            className={classes.typographyh1}
            variant="h1"
            component="h2"
            gutterBottom
          >
            We offer the best laundering experience
          </Typography>
          <Typography
            className={classes.typographyh3}
            variant="h3"
            gutterBottom
          >
            Sign up now and make your first order
          </Typography>
          <Grid container>
            <Grid item><SignUpModal /></Grid> 
            <Grid item> <LoginModal/></Grid>      
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
