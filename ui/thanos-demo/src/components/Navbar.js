import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#6D41FF' }}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Link href="https://thanos.io/" alt="thanos" sx={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://thanos.io/icon-dark.png" alt="Thanos Logo" style={{ height: '2.5rem', width: '2.5rem', marginRight: '0.5rem' }} />
                            <Typography variant='h6' style={{ color: 'white' }}> Thanos </Typography>
                        </div>
                    </Link>
                    <div className='collapse'>
                        <Link style={{ marginRight: '1rem' }} href="https://thanos.io/tip/thanos/getting-started.md/">
                            <Typography variant='h6' style={{ color: 'white' }}> Docs </Typography>
                        </Link>
                        <Link style={{ marginRight: '1rem' }}
                            href="https://github.com/thanos-io/thanos">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <GitHubIcon style={{ color: 'white', marginRight: '0.3rem' }} />
                                <Typography variant='h6' style={{ color: 'white' }}> Github
                                </Typography>
                            </div>
                        </Link>
                        <Link style={{ marginRight: '1rem' }} href="https://twitter.com/ThanosMetrics">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <XIcon style={{ color: 'white', marginRight: '0.3rem' }} />
                                <Typography variant='h6' style={{ color: 'white' }}> Twitter </Typography>
                            </div>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
