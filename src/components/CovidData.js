import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';

import CustomBarChart from './CustomBarChart'

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextWithAnimation = styled(Typography)`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
`;

export default function CovidData() {

    const [view, setView] = useState(false);
    
    const [ref, isVisible] = useInView({threshold: .5})
// Trigger setView on viewport enter
    useEffect(() => {
        isVisible && setView(true)
    }, [isVisible])

	const labels = ['Africa', 'Asia', 'Americas', 'Europe', 'Oceania'];

	const casesDataset = [
        {
            label: 'South Africa',
            data: [{ x: 'Africa', y: 2906422 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: 'Morocco',
            data: [{ x: 'Africa', y: 935332}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Tunisia',
            data: [{ x: 'Africa', y: 708382}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Ethiopia',
            data: [{ x: 'Africa', y: 348669}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Libya',
            data: [{ x: 'Africa', y: 342558}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'India',
            data: [{ x: 'Asia', y: 33834702 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Iran',
            data: [{ x: 'Asia', y: 5611700}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Indonesia',
            data: [{ x: 'Asia', y: 4219284}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Philippines',
            data: [{ x: 'Asia', y: 2593399}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Malaysia',
            data: [{ x: 'Asia', y: 2277565}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'United States',
            data: [{ x: 'Americas', y: 43683048 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Brazil',
            data: [{ x: 'Americas', y:  21468121}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Argentina',
            data: [{ x: 'Americas', y:  5260719}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Colombia',
            data: [{ x: 'Americas', y: 4963243}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Mexico',
            data: [{ x: 'Americas', y: 3684242}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'United Kingdom',
            data: [{ x: 'Europe', y: 7900680 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Russia',
            data: [{ x: 'Europe', y:  7612317}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Turkey',
            data: [{ x: 'Europe', y:  7210916}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'France',
            data: [{ x: 'Europe', y: 7027059}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Spain',
            data: [{ x: 'Europe', y: 4965399}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'Australia',
            data: [{ x: 'Oceania', y: 111392 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Fiji',
            data: [{ x: 'Oceania', y: 51202}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'French Polynesia',
            data: [{ x: 'Oceania', y: 45181}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Papua New Guinea',
            data: [{ x: 'Oceania', y: 20672}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Guam',
            data: [{ x: 'Oceania', y: 15362}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        }
    ]

	const deathsDataset = [
        {
            label: 'South Africa',
            data: [{ x: 'Africa', y: 87780 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: 'Tunisia',
            data: [{ x: 'Africa', y: 24939}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Egypt',
            data: [{ x: 'Africa', y: 17436}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Morocco',
            data: [{ x: 'Africa', y: 14339}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Algeria',
            data: [{ x: 'Africa', y: 5822}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'India',
            data: [{ x: 'Asia', y: 448997 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Indonesia',
            data: [{ x: 'Asia', y: 142173}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Iran',
            data: [{ x: 'Asia', y: 120880}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Philippines',
            data: [{ x: 'Asia', y: 38768}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Pakistan',
            data: [{ x: 'Asia', y: 27893}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'United States',
            data: [{ x: 'Americas', y: 703278 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Brazil',
            data: [{ x: 'Americas', y:  597948}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Mexico',
            data: [{ x: 'Americas', y:  279106}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Peru',
            data: [{ x: 'Americas', y: 199502}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Colombia',
            data: [{ x: 'Americas', y: 126425}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'Russia',
            data: [{ x: 'Europe', y: 210801 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: 'United Kingdom',
            data: [{ x: 'Europe', y: 136953}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'Italy',
            data: [{ x: 'Europe', y: 131031}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'France',
            data: [{ x: 'Europe', y: 116798}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Germany',
            data: [{ x: 'Europe', y: 93793}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        },
        {
            label: 'Australia',
            data: [{ x: 'Oceania', y: 1334 }],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(40.3, 99%, 60.78%)',
        },
        {
            label: ' Fiji',
            data: [{ x: 'Oceania', y: 633}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(189.03, 100%, 63.53%)',
        },
        {
            label: 'French Polynesia',
            data: [{ x: 'Oceania', y: 623}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(223.68, 91.94%, 51.37%)',
        },
        {
            label: 'Papua New Guinea',
            data: [{ x: 'Oceania', y: 234}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            backgroundColor: 'hsl(265.37, 90.3%, 67.65%)',
        },
        {
            label: 'Guam',
            data: [{ x: 'Oceania', y: 198}],
            fill: true,
            borderSkipped: false,
            barPercentage: 0.4,
            borderRadius: {
                topLeft: 16,
                topRight: 16
            },
            backgroundColor: 'rgba(161, 100, 247, 0.2)',
        }
    ]
	

	return (
		<section>
			<Box className="container" sx={{ paddingTop: '4rem'}}>
				<TextWithAnimation ref={ref} delay='.4s' view={view} sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, marginBottom: '3rem' }}>COVID Data</TextWithAnimation>
				<Box>
					<CustomBarChart 
						labels={labels} 
						datasets={casesDataset}
						headerText="Cases By Continent"
						subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit nam sed nullacursus massa."
					/>
				</Box>
				<Box sx={{ marginTop: '4rem' }}>
					<CustomBarChart 
						labels={labels} 
						datasets={deathsDataset}
						headerText="Deaths By Continent"
						subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit nam sed nullacursus massa."
					/>
				</Box>
			</Box>
		</section>
	);
}