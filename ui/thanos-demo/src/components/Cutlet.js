import { Typography } from "@mui/material";

function Cutlet(props) {

    return (
        <div style={{ backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: props.imageName === 'startup' ? "1rem 1rem" : "2rem 1rem", flexBasis: '100%' }}>
            <img src={props.image} alt="Cutlet" style={{ width: '8rem', marginBottom: '1rem' }} />
            <Typography variant="h6">{props.text}</Typography>

        </div>
    );
}

export default Cutlet;
