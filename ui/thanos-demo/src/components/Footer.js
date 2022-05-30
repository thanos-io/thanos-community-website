import { Typography } from "@mui/material";
function Footer() {
    return (
        <div className="wrapping">
            <div style={{ backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "5rem 1rem 2rem 1rem", flexBasis: '100%' }}>
                <img src="https://thanos.io/cloud-native-computing.svg" alt="CNCF Logo" style={{ width: '25rem', marginBottom: '1rem' }} />
                <Typography variant="body">We are a Cloud Native Computing Foundation Incubating project.</Typography>
            </div>
            <div style={{ backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "2rem 1rem", flexBasis: '100%' }}>
                <Typography variant="body">Powered By</Typography>
                <img src="https://thanos.io/logos/civo.png" alt="Civo Logo" style={{ width: '25rem', marginBottom: '1rem' }} />
            </div>
        </div>

    );
}

export default Footer;
