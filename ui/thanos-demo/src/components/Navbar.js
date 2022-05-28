import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#6D41FF' }}>
                <Toolbar>
                    <Link href="https://thanos.io/" alt="thanos" sx={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://thanos.io/icon-dark.png" alt="Thanos Logo" style={{ height: '2.5rem', width: '2.5rem', marginRight: '0.5rem' }} />
                            <Typography variant='h6' style={{ color: 'white' }}> Thanos </Typography>
                        </div>
                    </Link>
                    <div className='collapse'>
                        <Link style={{ marginRight: '1rem' }} href="https://thanos.io/tip/thanos/getting-started.md/"><Typography variant='h6' style={{ color: 'white' }}> Docs </Typography> </Link>
                        <Link style={{ marginRight: '1rem' }}
                            href="https://github.com/thanos-io/thanos">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <GitHubIcon style={{ color: 'white',marginRight: '0.3rem' }} />
                                <Typography variant='h6' style={{ color: 'white' }}> Github
                                </Typography>
                            </div>
                        </Link>
                        <Link style={{ marginRight: '1rem' }} href="https://twitter.com/ThanosMetrics">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <TwitterIcon style={{ color: 'white', marginRight: '0.3rem' }}/>
                                <Typography variant='h6' style={{ color: 'white' }}> Twitter </Typography> 
                                </div>
                                </Link>
                    
                </div>

            </Toolbar>
        </AppBar>
        </Box >
    );
}
