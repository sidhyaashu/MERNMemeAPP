import * as React from "react";
import "./NavBar.scss";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Avatar from "@mui/material/Avatar";
const profilePhoto =
  "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
// import SideBar from '../sidebar/SideBar';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen({ ...isDrawerOpen, [anchor]: open });
  };



  const items=[
    {
      name:"Home",
      Icon:<HomeIcon />
    },
    {
      name:"Profile",
      Icon:<AccountCircleIcon/>
    },
    {
      name:"Logout",
      Icon:<LogoutIcon />
    },
  ]


  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      >
      <List>
        {items.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.Icon}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="navbar">
      <div className="div_left">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton>
              <DehazeIcon onClick={toggleDrawer(anchor, true)} />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={isDrawerOpen[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="div_right">
        <IconButton>
          <Avatar src={profilePhoto} />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
