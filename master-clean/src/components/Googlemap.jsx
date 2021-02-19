import React  from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  widthHeight: {
    width: "100%",
    height:"inherit",
  },
}));
const GoogleMap = () => {
  const classes = useStyles();
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe className={classes.widthHeight} id="gmap_canvas" src="https://maps.google.com/maps?q=clean&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://putlocker-is.org"></a>
            <a href="https://www.embedgooglemap.net">google maps embed zoom</a>
          </div>
        </div>
    </div>
  );
};

export default GoogleMap;
