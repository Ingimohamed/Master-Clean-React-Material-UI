import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import contactheader from "../images/contactheader.png";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  status: {
    danger: "#00527D",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(255,225,255,0.5),rgba(255,255,255,0.5)), url(${contactheader})`,
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
    fontSize: "30px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.up('sm')]: {
      fontSize: "50px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "70px",
    },
  },
  typographyh3: {
    color: "#00527D",
    fontSize: "30px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    padding: "59% 10%",
    [theme.breakpoints.up('sm')]: {
      padding: "30% 10%",
    },
    [theme.breakpoints.up('md')]: {
      padding: "18% 10%",
    },
  },
}));

export default function ContactHeader() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Typography
            className={classes.typographyh1}
            variant="h1"
            component="h2"
            gutterBottom
            align="center"
          >
            We’d love to hear from you
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}
