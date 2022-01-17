import React from 'react'
import {AppBar,Toolbar, Badge,Typography, IconButton,MenuItem, Menu} from '@material-ui/core'
import useStyles from './navbarStyles'
import {Box} from '@chakra-ui/react'
import { HiOutlineMenuAlt4, HiOutlineShoppingBag} from "react-icons/hi"
import {Link, useLocation} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Navbar =({totalItems})=>{
    const classes=useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location= useLocation()

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
           
   
       <>
       {location.pathname==='/cart' ||location.pathname==='/checkout'||location.pathname==='/faq' ||location.pathname==='/privacy-policy'  ||location.pathname==='/term'||location.pathname==='/help'||location.pathname==='/contact' ||location.pathname==='/about'  ? null : (
           <AppBar position="fixed" className={classes.appBar} color="inherit" >
               <Toolbar >
                    <Box flex={1} align="left" maxWidth={40}>
                        <Box ml={8}  >
                          
                                <IconButton  onClick={handleMenu} aria-label="menu-button" size="small" component="span"  className={classes.tuz}>
                                    <HiOutlineMenuAlt4 fontSize="inherit" className={classes.tuzzz}/>
                                </IconButton>
                                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
              >
                <HashLink    to="/#"  className={classes.nodecoration}>
                  <MenuItem  className={classes.menuitem} onClick={handleClose}>Home</MenuItem>
                </HashLink>
                <HashLink smooth  scroll={el => scrollWithOffset(el)} to="/#allproducts"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem} onClick={handleClose}>All products</MenuItem>
                </HashLink>
                <HashLink smooth  scroll={el => scrollWithOffset(el)} to="/#writing"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem2} onClick={handleClose}>Writing</MenuItem>
                </HashLink>
                <HashLink smooth  scroll={el => scrollWithOffset(el)} to="/#deskaccessories"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem2} onClick={handleClose}>Desk Accessories</MenuItem>
                </HashLink>
                <HashLink smooth  scroll={el => scrollWithOffset(el)} to="/#forthehome"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem2} onClick={handleClose}>For the Home</MenuItem>
                </HashLink>
                <HashLink    to="/contact#"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem} onClick={handleClose}>Contact</MenuItem>
                </HashLink>
                <HashLink    to="/contact#"  className={classes.nodecoration}>
                  <MenuItem className={classes.menuitem} onClick={handleClose}>Help</MenuItem>
                </HashLink>
              </Menu>
                         </Box>
                    </Box>
                    <Box flex={1} align="center" display="inline-block">
                    <Typography  component={Link} to={`/`} variant="h6" className={classes.title} color="inherit">
                        ricirca
                    </Typography>
                    </Box>
                    <div>
                        <IconButton component={Link} to={`/cart`} aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} overlap="circular"  color="primary">
                                <HiOutlineShoppingBag />
                            </Badge>
                        </IconButton>                   
                    </div>
               </Toolbar>
           </AppBar> 
           )} 
        </>
    )
}
export default Navbar