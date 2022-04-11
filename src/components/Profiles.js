import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';
import LineChart from "./LineChart";
import CountUp from 'react-countup';

//mui 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//data
import covidJson from '../data/covid.json'

const Legend = ({ color, text, delay, view }) => (
    <BoxWithAnimation delay={delay} view={view} sx={{ marginRight: '3rem', display: 'flex' }}>
        <Box sx={{
                marginRight: '1rem',  
                boxShadow: '1px 3px 1px #9E9E9E', 
                width: 16, 
                height: 16, 
                backgroundColor: 'white', 
                padding: '2px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: 124
            }}>
            <Box sx={{ backgroundColor: color, width: 14, height: 14, borderRadius: 124 }}/>
        </Box>
        <Typography>{text}</Typography>
    </BoxWithAnimation>
)

const SelectedCountry = ({ countries, country, setCountry }) => (
        <Select
            sx={{ 
                m: 1,
                height: '48px',
                width: { xs: '100%', md: '384px' },
                backgroundColor: '#003D47',
                borderRadius: '8px',
                marginTop: '3rem',
                marginBottom: '3rem',
                color: 'white'
             }}
            value={country}
            onChange={(e)=> setCountry(e.target.value)}
        >
            {countries.map(name => 
                <MenuItem key={name} value={name}>
                    <em style={{ fontStyle: 'normal' }}>{name}</em>
                </MenuItem>
            )}
        </Select>
)

const SelectedYear = ({ year, setYear }) => (
    <FormControl >
    <Select
        sx={{ m: 1, height: '48px', width: '104px', backgroundColor: '#ECECF3', borderRadius: '4px'}}
        value={year}
        onChange={(e)=> setYear(e.target.value)}
    >
    
        <MenuItem value='2020'>
        <em style={{ fontStyle: 'normal' }}>2020</em>
        </MenuItem>
        <MenuItem value='2021'>
        <em style={{ fontStyle: 'normal' }}>2021</em>
        </MenuItem>
    </Select>
    </FormControl>
)

const BoxWithAnimation = styled(Box)`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
`;

const TextWithAnimation = styled(Typography)`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
`;

const GridWithAnimation = styled(Grid)`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
`;

export default function Profiles() {


    
    const [country, setCountry] = useState('Afghanistan');
    const [countries, setCountries] = useState([])
    const [year, setYear] = useState('2020');
    
    const [view1, setView1] = useState(false);
	const [view2, setView2] = useState(false);
	const [view3, setView3] = useState(false);
	const [view4, setView4] = useState(false);
	const [view5, setView5] = useState(false);
    
    const [ref1, isRef1Visible] = useInView({threshold: .5})
    const [ref2, isRef2Visible] = useInView({threshold: .5})
    const [ref3, isRef3Visible] = useInView({threshold: .5})
    const [ref4, isRef4Visible] = useInView({threshold: .5})
    const [ref5, isRef5Visible] = useInView({threshold: .5})

    useEffect(()=> {
        setCountries(listOfCountries.map(item => item.Country))
        isRef1Visible && setView1(true)
        isRef2Visible && setView2(true)
        isRef3Visible && setView3(true)
        isRef4Visible && setView4(true)
        isRef5Visible && setView5(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isRef1Visible, isRef2Visible, isRef3Visible, isRef4Visible, isRef5Visible])

    const legend = [
        { color: '#45E3FF', text: 'Cases', delay: '.2s'},
        { color: '#A162F7', text: 'Deaths', delay: '.4s'}
    ]

    const getLatestCountriesData = (data, key) => {
        return [
          ...new Map(
            data.map(x => [key(x), x])
            ).values()
          ]
        }
        
    const listOfCountries = getLatestCountriesData(covidJson, item => item.Country_code)
    
    const countryData = covidJson.filter(item => item.Country === country)
    const countryDataByDate = countryData.filter(item => item.Date_reported.includes(year))

    const cases = countryDataByDate[countryDataByDate.length - 1].Cumulative_cases
    const deaths = countryDataByDate[countryDataByDate.length - 1].Cumulative_deaths

    return (
        <section>
            <Box className="container" sx={{ marginTop: '10rem', marginBottom: '2rem' }}>
                <Box>
                    <TextWithAnimation ref={ref1} delay='.2s' view={view1} sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, marginBottom: '2rem' }}>Selected Profiles</TextWithAnimation>
                    <TextWithAnimation ref={ref2} delay='.2s' view={view2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#64649B', maxWidth: { xs: '100%', md: '50%' }}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit nam sed nullacursus massa.</TextWithAnimation>
                </Box>
                <Grid container sx={{ marginBottom: '2rem'}}>
                <GridWithAnimation ref={ref3} delay='.2s' view={view3} item xs={12}>
                    <SelectedCountry countries={countries} country={country} setCountry={setCountry} />
                </GridWithAnimation>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <GridWithAnimation ref={ref4} delay='.2s' view={view4} item xs={12} md={6}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: 14, md: 18 }, color: '#64649B'}}>Cummulative Cases</Typography>
                                    <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700 }}>
                                        { view4 &&
                                            <CountUp end={cases} separator=','/>
                                        }
                                    </Typography>
                                </Box>
                            </GridWithAnimation>
                            <GridWithAnimation ref={ref4} delay='.5s' view={view4} item xs={12} md={6}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: 14, md: 18 }, color: '#64649B'}}>Cummulative Deaths</Typography>
                                    <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700 }}>
                                        {view4 && <CountUp end={deaths} separator=','/>}
                                    </Typography>
                                </Box>
                            </GridWithAnimation>
                        </Grid>
                    </Grid>
                    <GridWithAnimation ref={ref4} delay='.7s' view={view4} item xs={6} sx={{  display: 'flex', justifyContent: 'flex-end' }}>
                        <SelectedYear year={year} setYear={setYear} />
                    </GridWithAnimation>
                </Grid>
                <Box sx={{ marginTop: '2rem'}}>
                    <LineChart  year={year} countryDataByDate={countryDataByDate}/>
                </Box>
                <Box ref={ref5} sx={{ display: 'flex', marginTop: '2rem'}}>
                    {
                        legend.map(item => <Legend 
                            key={item.text} 
                            color={item.color} 
                            text={item.text}
                            delay={item.delay}
                            view={view5}
                            />
                            )
                    }
                </Box>
            </Box>
        </section>
    );
}