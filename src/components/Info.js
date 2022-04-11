import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SmoothList from 'react-smooth-list';
import { useInView } from 'react-hook-inview';

// Material UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Wrapper = styled(SmoothList)`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Paragraph = styled.p`
    transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
    font-size: 18px;
    width: 80%;
    @media only screen and (max-width: 900px){
        font-size: 16px;
        width: 100%;
    }
`


export default function Info() {

    const [view1, setView1] = useState(false);
    const [view2, setView2] = useState(false);
    const [view3, setView3] = useState(false);
    const [view4, setView4] = useState(false);
    
    const [ref1, isRef1Visible] = useInView({threshold: .5})
    const [ref2, isRef2Visible] = useInView({threshold: .5})
    const [ref3, isRef3Visible] = useInView({threshold: .5})
    const [ref4, isRef4Visible] = useInView({threshold: .5})

// Trigger setView on viewport enter
    useEffect(() => {
        isRef1Visible && setView1(true)
        isRef2Visible && setView2(true)
        isRef3Visible && setView3(true)
        isRef4Visible && setView4(true)
    }, [isRef1Visible, isRef2Visible, isRef3Visible, isRef4Visible])

	return (
		<section id='info'>
			<Box className="container">
				<Wrapper transitionDuration={1000}>
                    <Grid container>
                        <Grid  item order={{ md: 1, xs: 2 }} md={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Paragraph ref={ref1} delay='.8s' view={view1}>As of now, researchers know that the coronavirus is spread through droplets and virus particles released into the air when an infected person breathes, talks, laughs, sings, coughs or sneezes.</Paragraph>
                            <Paragraph ref={ref2} delay='.8s' view={view2}>Larger droplets may fall to the ground in a few seconds, but tiny infectious particles can linger in the air and accumulate in indoor places, especially where many people are gathered and there is poor ventilation.</Paragraph>
                            <Paragraph ref={ref3} delay='.8s'view={view3}>This is why mask-wearing, hand hygiene and physical distancing are essential to preventing COVID-19.</Paragraph>
                        </Grid>
                        <Grid item order={{ md: 2, xs: 1 }} md={6} ref={ref4}>
                            <lottie-player 
                                style={{ transition: 'all .8s ease-in-out', opacity: view4 ? 1 : 0, transitionDelay: '.2s', transform: view4 ? 'scale(1)' : 'scale(0)' }}
                                src="https://assets3.lottiefiles.com/packages/lf20_8axjdnts.json"  
                                background="transparent" 
                                speed="1"
                                loop
                                autoplay
                            />
                        </Grid>
                    </Grid>
				</Wrapper>
			</Box>
		</section>
	);
}