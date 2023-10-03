import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";

// Search Components
import CarSearch from "../Card/CarSearch";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery("(max-width:767px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: "20px", background: "#f1f4fa" }}
      >
        <Toolbar>
          {/* Show the icon on small screens */}
          {isSmallScreen && (
            <IconButton
              onClick={handlePopoverOpen}
              size="large"
              edge="start"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          )}

          {/* Show the CarSearch component on larger screens */}
          {!isSmallScreen && (
            <span sx={{ flexGrow: 1 }}>
              <CarSearch />
            </span>
          )}

          {isSmallScreen && (
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <CarSearch />
            </Popover>
          )}
          <div style={{display:'flex',alignContent:'center'}}>
            <Typography
              onMouseEnter={handlePopoverOpen}
              sx={{
                color: "#858ea0",
                fontSize: "16px",
                fontFamily: "Poppins",
                cursor: "pointer",
                marginLeft:'20px'
              }}
              display="flex"
              alignItems="center"
            >
              Relevance <ExpandMoreIcon sx={{ marginLeft: "5px" }} />
            </Typography>
            <Typography
              sx={{
                color: "#858ea0",
                fontSize: "16px",
                fontFamily: "Poppins",
                marginLeft:'20px'
              }}
              display="flex"
              alignItems="center"
            >
              All Brands <ExpandMoreIcon sx={{ marginLeft: "5px" }} />
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
