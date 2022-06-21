import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';
import SmoothList from 'react-smooth-list';
import { Link } from 'react-scroll'

// Material UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//images
import {
	woman,
	sign,
	hands,
	clean,
	temperature,
	test
}
from '../assets'


const Wrapper = styled(SmoothList)`
	min-height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

const Scroll = styled(Box)`
	margin-top: 4rem;
	width: 70px;
	border-radius: 124px;
	box-shadow: 0px 15px 40px rgba(20, 20, 31, 0.16); 
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px; 
`;

const ImageWithTransition = styled.img`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'scale(1)' : 'scale(0.1)'};
`;

export default function Hero() {
	const [view, setView] = useState(false);
    
    const [ref, isVisible] = useInView({threshold: .5})

// Trigger setView on viewport enter
    useEffect(() => {
        isVisible && setView(true)
    }, [isVisible])

	return (
		<section>
			<Box className="container" sx={{ marginTop: '3rem' }}>
				<Wrapper transitionDuration={1000}>
					<Box sx={{ textAlign: 'center', width: { xs: 'auto	', md: 610 }, marginBottom: '4rem' }}>
						<Typography sx={{ fontSize: { xs: 40, md: 64 }, marginBottom: '1rem', fontWeight: 700 }}>Covid Tracker</Typography>
						<Typography  sx={{ fontSize: { xs: 16, md: 18 } }}>COVID-19 affects different people in different ways. Infected people have had a wide range of symptoms reported – from mild symptoms to severe illness.</Typography>
					</Box>
					<Grid ref={ref} container spacing={4}>
						<Grid item xs={4}>
							<ImageWithTransition view={view} delay='.9s' width="100%" style={{ filter: ' drop-shadow(0px 32px 72px rgba(20, 20, 31, 0.16))' }} src={woman} alt='woman'/>
						</Grid>
						<Grid item xs={4}>
							<Grid container spacing={3} sx={{ height: '100%' }} >
								<Grid item xs={6}>
									<ImageWithTransition view={view} delay='.2s' width="100%" style={{ filter: 'drop-shadow(0px 15px 40px rgba(20, 20, 31, 0.08))' }} src={sign} alt='sign'/>
								</Grid>
								<Grid item xs={6}>
									<ImageWithTransition view={view} delay='.2s' width="100%" style={{ filter: 'drop-shadow(0px 15px 40px rgba(20, 20, 31, 0.08))' }}  src={hands} alt='hands'/>
								</Grid>
								<Grid item xs={6}>
									<ImageWithTransition view={view} delay='.2s' width="100%"  style={{ filter: 'drop-shadow(0px 15px 40px rgba(20, 20, 31, 0.08))' }}s src={clean} alt='clean'/>
								</Grid>
								<Grid item xs={6}>
									<ImageWithTransition view={view} delay='.2s' width="100%"  style={{ filter: 'drop-shadow(0px 15px 40px rgba(20, 20, 31, 0.08))' }} src={temperature} alt='temperature'/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<ImageWithTransition view={view} delay='.9s' width="100%" style={{ filter: ' drop-shadow(0px 32px 72px rgba(20, 20, 31, 0.16))' }} src={test} alt='test'/>
						</Grid>
					</Grid>
					<Link to='info' smooth={true} style={{cursor: 'pointer' }}>
						<Scroll>
								<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.29783 0.115592C9.00639 0.0643052 8.75 0.296847 8.75 0.592763V3.45354C8.75 3.6519 8.87095 3.82656 9.03588 3.93675C9.53908 4.27293 9.87 4.84689 9.87 5.49998V7.49998C9.87 8.52998 9.03 9.37998 8 9.37998C6.96 9.37998 6.12 8.52998 6.12 7.49998V5.49998C6.12 4.8467 6.45831 4.27259 6.96394 3.93645C7.12913 3.82664 7.25 3.6519 7.25 3.45354V0.593405C7.25 0.297259 6.99352 0.0646167 6.70187 0.116043C5.15243 0.389257 3.76579 1.13419 2.7 2.19998C1.34 3.55998 0.5 5.43998 0.5 7.49998V12.5C0.5 16.63 3.87 20 8 20C12.13 20 15.5 16.63 15.5 12.5V7.49998C15.5 3.80949 12.813 0.734195 9.29783 0.115592Z" fill="#14141F"/>
								</svg>
							<span>Scroll</span>
						</Scroll>
					</Link>
				</Wrapper>
			</Box>
		</section>
	);
}
