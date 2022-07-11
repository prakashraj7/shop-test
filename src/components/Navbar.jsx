import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
    return (
        <div>
            <Box >
                <AppBar color="inherit" sx={{ position: "fixed", top: 0 }}>
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"   
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MY COMPANY.COM
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button color="inherit">The Edit</Button>
                            <Button color="inherit">New Arrivals</Button>
                            <Button color="inherit">Designers</Button>
                            <Button color="inherit">Clothing</Button>
                            <Button color="inherit">Shoes</Button>
                            <Button color="inherit">Bags</Button>
                            <Button color="inherit">Accessories</Button>
                            <Button color="inherit">Jewelry</Button>
                            <Button color="inherit">Beauty</Button>
                            <Button color="inherit">home</Button>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge>
                                    <SearchOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge>
                                    < ShoppingCartOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge>
                                    <PermIdentityOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                color="inherit"
                            >

                            </IconButton>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar