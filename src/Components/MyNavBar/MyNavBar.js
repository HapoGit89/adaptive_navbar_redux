import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Link as LinkBase } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'Live', 'Studio', 'Cooperation', 'Contact'];

function MyNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' , color: "white", backgroundColor: "black"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Stulz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <LinkBase component={Link} to={`/${item.toLowerCase()}`} sx={{color: "white"}} underline="none">
              {item}
            </LinkBase>
          
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="Media" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              
            <LinkBase component={Link} to={`/media`} sx={{color: "white"}} underline="none">
              Media
            </LinkBase>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav">
        <Toolbar sx={{backgroundColor: "black",}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex', md: "flex", lg: "flex", xl: "flex"} , justifyContent: "space-between" , width: "80vw"}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                   <LinkBase component={Link} to={`/${item.toLowerCase()}`} sx={{color: "white"}} underline="none">
              {item}
            </LinkBase>
              </Button>
            ))}
          </Box>
          <Box sx={{width: "20vw"}}>
          <Button variant="outlined" sx={{ display: { xs: 'none', sm: 'block', md: "block", lg: "block", xl: "block"}, color: 'white', borderStyle: "solid", borderColor: "blueviolet",  marginLeft:"10vw"}}>
          <LinkBase component={Link} to={`/media`} sx={{color: "white"}} underline="none">
              Media
            </LinkBase>
              </Button>
              </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
        <Toolbar />
    </Box>
  );
}

MyNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MyNavBar;