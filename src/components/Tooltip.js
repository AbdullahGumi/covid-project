
import ReactTooltip from "react-tooltip";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//styles
import '../App.css'


const Tooltip = ({ content: { name, code, population, totalCases, totalDeaths, whoRegion, newCases, newDeaths } }) => {
    
    const toCommas = (value) => {
        return value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <ReactTooltip 
            place="right"
            backgroundColor="#29293D"
        >
            { name &&
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 700 }}>{name} ({code})</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>Population</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(population)}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>Total Cases</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(totalCases)}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>Total Deaths</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(totalDeaths)}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>WHO Region</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(whoRegion)}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>New Cases</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(newCases)}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ fontSize: '14px', color: '#C1C1D7' }}>New Deaths</Typography>
                            <Typography sx={{ fontSize: '14px'}}>{toCommas(newDeaths)}</Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: '12px', fontStyle: 'italic', fontWeight: 500, marginTop: '1rem' }}>Epidemic intelligence, national weekly data</Typography>
                </>
            }
        </ReactTooltip>
    ) 
}


export default Tooltip