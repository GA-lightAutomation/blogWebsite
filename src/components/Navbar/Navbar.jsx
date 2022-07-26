import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    ListItemText,
    ListItem,
    ListItemButton,
    List, Divider
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {ChevronLeft} from "@mui/icons-material";
import {styled} from '@mui/material/styles';

const pages = [
    {
        name: "Home",
        path: "/",
        variant: "text"
    },
    {
        name: "Documentation",
        path: "/docs",
        variant: "text"
    },
    {
        name: "Blogs",
        path: "/blog",
        variant: "text"
    },
    {
        name: "login",
        path: "/login",
        variant: "contained"
    }
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: "#062543",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar(){
    const [openDrawer, setOpenDrawer] = useState(false);
    let navigate = useNavigate();
    return (
        <AppBar position={"sticky"} sx={{
            background: "#062543"
        }}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                          onClick={() => setOpenDrawer(true)}
                        >
                          <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          mr: 2,
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        GA Cohort V
                      </Typography>
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => navigate(page.path)}
                                variant={page.variant}
                                sx={{color: "white"}}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            <Drawer
                anchor={"left"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    role={"presentation"}
                    sx={{width: 240}}
                >
                    <DrawerHeader>
                        <IconButton
                            onClick={() => setOpenDrawer(false)}
                            color={"inherit"}
                        >
                            <ChevronLeft />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {pages.map((page, index) => (
                            <div key={index}>
                                <ListItem>
                                    <ListItemButton
                                        sx={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                        onClick={() => {
                                            navigate(page.path);
                                            setOpenDrawer(false);
                                        }}
                                    >
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}

