import React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
function Banner() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', margin: '2rem 0', flexWrap: "wrap" }}>
            <img src="https://cncf-branding.netlify.app/img/projects/thanos/icon/color/thanos-icon-color.png" alt="Thanos Logo" style={{ width: "8rem", height: "auto", marginBottom: '1rem' }} />
            <Typography variant='h2' style={{ fontWeight: '700', color: '#6D41FF', marginBottom: '1rem' }}>Thanos Community Instance</Typography>
            <Typography variant='h5'>Open source, highly available Prometheus setup with long term storage capabilities.</Typography>
        </div>
    );
}

export default Banner;
