import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';

import MapChart from "./MapChart";

//mui 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tooltip from "./Tooltip";


const Legend = ({ color, text, view, delay }) => (
    <BoxWithAnimation  delay={delay} view={view} sx={{ marginRight: '3rem', marginTop: { xs: '1rem', md: ''}, display: 'flex' }}>
        <Box sx={{marginRight: '1rem', boxShadow: '1px 3px 1px #9E9E9E', width: 16, height: 16, backgroundColor: 'white', padding: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 124}}>
            <Box sx={{ backgroundColor: color, width: 14, height: 14, borderRadius: 124 }}/>
        </Box>
        <Typography>{text}</Typography>
    </BoxWithAnimation>
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

export default function Map() {

    const [content, setContent] = useState({
        name: '',
        code: '',
        population: '',
        totalCases: '',
        totalDeaths: '',
        whoRegion: '',
        newCases: '',
        newDeaths: ''
    });

    const [view1, setView1] = useState(false);
	const [view2, setView2] = useState(false);
	const [view3, setView3] = useState(false);
    
    const [ref1, isRef1Visible] = useInView({threshold: .5})
    const [ref2, isRef2Visible] = useInView({threshold: .5})
    const [ref3, isRef3Visible] = useInView({threshold: .5})

// Trigger setView on viewport enter
    useEffect(() => {
        isRef1Visible && setView1(true)
        isRef2Visible && setView2(true)
        isRef3Visible && setView3(true)
    }, [isRef1Visible, isRef2Visible, isRef3Visible])

    const legend = [
        { color: '#FE4D3C', text: 'Critical Region', delay: '.2s'},
        { color: '#6F88FC', text: 'Average', delay: '.4s'},
        { color: '#A162F7', text: 'Low', delay: '.6s'},
        { color: '#EFEFF5', text: 'Free zone', delay: '.8s'}
    ]
    
    return (
        <section>
            <Box className="container" sx={{ marginTop: '10rem' }}>
                <Box>
                    <TextWithAnimation ref={ref1} delay='.2s' view={view1} sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, marginBottom: '2rem' }}>Interactive Map with Stats & Figures</TextWithAnimation>
                    <TextWithAnimation ref={ref2} delay='.2s' view={view2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#64649B', maxWidth: { xs: '100%', md: '50%' }}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit nam sed nullacursus massa.</TextWithAnimation>
                </Box>
                <Box sx={{ marginTop: '2rem',}}>
                    <MapChart setTooltipContent={setContent} />
                    <Tooltip content={content}/>
                </Box>
                <Box ref={ref3} sx={{ display: 'flex', flexWrap: 'wrap'}}>
                    {
                        legend.map(item => <Legend 
                            key={item.text} 
                            color={item.color} 
                            text={item.text}
                            delay={item.delay} 
                            view={view3}
                            />
                            
                        )
                    }
                </Box>
            </Box>
        </section>
    );
}