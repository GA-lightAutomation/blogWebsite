import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography, IconButton} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


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

export default function Navbar(){
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
        </AppBar>
    )
}