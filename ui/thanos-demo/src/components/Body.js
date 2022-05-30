import { Button, Typography } from "@mui/material";

function Body() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem',flexWrap:'wrap' }}>
            <div className='card'>
                <Typography variant='h4' style={{ margin: '2.5rem 3rem', fontWeight: '700' }}>Thanos Querier</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button style={{ backgroundColor: '#6D41FF',margin:'1rem' }} variant='contained' href="http://thanos-query.d15ef0b9-5274-4557-9d1a-7969c3a28b75.lb.civo.com">
                        <Typography style={{ color: 'white', fontWeight: '700' }}>Demo</Typography>
                    </Button>
                    <Button style={{ backgroundColor: '#6D41FF',margin:'1rem' }} variant='contained' href="https://github.com/thanos-io/thanos">
                        <Typography style={{ color: 'white', fontWeight: '700' }}>Github</Typography>
                    </Button>
                </div>
            </div>
            <div className='card'>
                <Typography variant='h4' style={{ margin: '2.5rem 3rem', fontWeight: '700' }}> Prometheus </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button style={{ backgroundColor: '#6D41FF',margin:'1rem' }} variant='contained' href="http://prometheus.d15ef0b9-5274-4557-9d1a-7969c3a28b75.lb.civo.com">
                        <Typography style={{ color: 'white', fontWeight: '700' }}>Demo</Typography>
                    </Button>
                    <Button style={{ backgroundColor: '#6D41FF',margin:'1rem' }} variant='contained' href="https://github.com/prometheus/prometheus">
                        <Typography style={{ color: 'white', fontWeight: '700' }}>Github</Typography>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Body;

