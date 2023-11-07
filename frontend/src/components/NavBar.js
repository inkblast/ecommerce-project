// import React from "react";

// function NavBar({
//   scrollToHero,
//   scrollToHowItWorks,
//   scrollToAboutUs,
//   scrollToPopularProducts,
//   scrollToInfoCard,
// }) {
//   return (
//     <nav>
//       <ul>
//         <li onClick={scrollToHero}>Home</li>
//         <li onClick={scrollToHowItWorks}>How It Works</li>
//         <li onClick={scrollToAboutUs}>About Us</li>
//         <li onClick={scrollToPopularProducts}>Popular Products</li>
//         <li onClick={scrollToInfoCard}>Info Card</li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../assets/logo.svg";
import { Grid, Link } from "@mui/material";

const Logo = styled("img")(() => ({
  width: "5rem",
  minWidth: "4rem",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#F8756F", // Set your desired color here
    color: "#ffffff",
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function NavBar({
  scrollToHowItWorks,
  scrollToPopularProducts,
  scrollToInfoCard,
}) {
  //const pages = ['Catelog','How it work','Fan Club'];

  const pages = [
    {
      name: "Catelog",
      link: "men-clothing",
      clicks: scrollToHowItWorks,
    },
    {
      name: "How it work",
      link: "howtowork",
      clicks: scrollToPopularProducts,
    },
    {
      name: "Fan Club",
      link: "infoCard",
      clicks: scrollToInfoCard,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFCCC9" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Logo src={logo} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      margin: "0px 10px 0px 10px",
                    }}
                    onClick={page.clicks}
                  >
                    <Typography
                      sx={{
                        fontWeight: "medium",
                        fontSize: "18px",
                        textTransform: "none",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="default">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ marginLeft: "10px" }}
                >
                  <AccountCircle sx={{ color: "#00000" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/*<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
  </Search>*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

/*

const Logo = styled('img')(() =>({
    width:'5rem',
    minWidth:'4rem'
}
))

 const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
     marginLeft: 0,
     width: '100%',
     minWidth:'500px',
     [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',

    },
   }));

   const SearchIconWrapper = styled('div')(({ theme }) => ({
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
    pointerEvents: 'none',
   display: 'flex',
    alignItems: 'center',
     justifyContent: 'center',
   }));

   const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
       // vertical padding + font size from searchIcon
     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
       transition: theme.transitions.create('width'),
       width: '100%',
       [theme.breakpoints.up('md')]: {
         width: '20ch',
       },
     },
   }));

   const StyledBadge = styled(Badge)(({ theme }) => ({
     '& .MuiBadge-badge': {
       backgroundColor: theme.palette.error.main,
       right: -10,
       top: 13,
       border: `2px solid ${theme.palette.background.paper}`,
       borderRadius:'50%',
       padding: '0 4px',
     },
   }));

  const pages = ['Catelog','How it work','Fan Club'];

function NavBar(){

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    return(

        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo src={logo} />
          { <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> }

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

          </Box>

           <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>

        </Toolbar>
      </AppBar>
    </Box>

    );
}

export default NavBar; */
