import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import profile from "../images/profile.png";
import shopping from "../images/shopping.png";
import NavLogo from "../images/NavLogo.png";
import { Link, NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  linkStyle:{
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: "18%",
      },
  },
  NavLogo: {
      maxWidth: "58%",
      marginRight: '10px',
      [theme.breakpoints.up('sm')]: {
          maxWidth: "100%",
    },
    },
    appBar: {
        background: "white",
      color: "#00527D",
      boxShadow: "2px 2px 7px grey",
    },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      },
    
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLink: {
    textDecoration: "none",
    color: "#00527D",
    paddingRight:"2rem",
    paddingLeft:"2rem",
  },
  iconButton: {
    paddingRight:"2rem",
    paddingLeft:"2rem",
  },
  navIcon: {
    width:"70%",
  },

}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleBasketMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu>

  //   </Menu>
  // );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <Link className={classes.navLink}  to="/"> Home </Link>
      </MenuItem> */}
      <MenuItem>
        <NavLink className={classes.navLink} to="/Order"> Order</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className={classes.navLink} to="/Contactus"> Contact Us</NavLink> 
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
         <NavLink to="/Profile">
                <img className={classes.navIcon} src={profile} alt="profile" />
          </NavLink>
          
        </IconButton>
          </MenuItem>

    <MenuItem onClick={handleBasketMenuOpen}>
        <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        >
        <NavLink to="/ShoppingCart">
              <Badge badgeContent={1} color="secondary">
                   <img className={classes.navIcon} src={shopping} alt="shopping basket"/>
                </Badge>
             </NavLink>
        </IconButton>
    </MenuItem>
          
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Link className={classes.linkStyle}  to="/"> 
            <img src={NavLogo} alt="Kitty Katty!" className={classes.NavLogo} />
         </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                          <Typography>
                <Link className={classes.navLink}  to="/"> Home </Link>
                     </Typography>
             </IconButton> */}
             <IconButton  aria-label="show 17 new notifications" color="inherit">
              <Typography>
                <NavLink className={classes.navLink} to="/Order"> Order</NavLink>           
                     </Typography>
           </IconButton>
           <IconButton aria-label="show 17 new notifications" color="inherit">
              <Typography>
              <NavLink className={classes.navLink} to="/Contactus"> Contact Us</NavLink>         
                     </Typography>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              color="inherit"
              className={classes.iconButton}
            >
              <NavLink to="/Profile">
                <img className={classes.navIcon} src={profile} alt="profile" />
              </NavLink>
             </IconButton  >
            <IconButton edge="end"
              aria-label="account of current user"
              className={classes.iconButton}
              color="inherit">
              <NavLink to="/ShoppingCart">
              <Badge badgeContent={1} color="secondary">
                   <img className={classes.navIcon} src={shopping} alt="shopping basket"/>
                </Badge>
             </NavLink>
         </IconButton>      
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}