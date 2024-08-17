import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Payment from './Payment';
import AOS from 'aos';
import 'aos/dist/aos.css';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';





function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);


  const handleCloseNavMenu = () => setAnchorElNav(null);



  return (
    <>
      <HashRouter>
        <NavLink style={{ textDecoration: 'none' }}>

          <AppBar position="static" style={{ backgroundColor: 'var(--first)', Height: '19vh' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', mr: 1 }}>
                  <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} style={{ height: '80px', width: '80px', margin: '0 13px' }} alt='...' />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      textAlign: 'center',
                      color: 'var(--third)',
                      textDecoration: 'none',
                    }}
                  >
                    GetCar.com
                  </Typography>
                </Box>


                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="open navigation"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link className="links" to="/">Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link className="links" to="/about">About</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link className="links" to="/service">Service</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link className="links" to="/payment">Payment</Link>
                    </MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                  <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} style={{ height: '80px', width: '80px' }} alt='...' />
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',


                    color: 'var(--third)',
                    textDecoration: 'none',
                  }}
                >
                  GetCar.com
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Link className="links" to="/">Home</Link>
                  <Link className="links" to="/about">About</Link>
                  <Link className="links" to="/service">Service</Link>
                  <Link className="links" to="/payment">Payment</Link>


                </Box>


              </Toolbar>
            </Container>
          </AppBar>


        </NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </HashRouter>
      <div className='container-fluid' data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
