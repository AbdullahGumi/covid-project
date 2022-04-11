import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextWithAnimation = styled(Typography)`
	transition: all 1s ease-in-out;
    opacity: ${({ view }) => view ? 1 : 0};
    transition-delay: ${({ delay }) => delay}; 
    transform: ${({ view }) => view ? 'translateY(0) rotateZ(0)' : 'translateY(20px) rotateZ(3deg)'};
`;

export default function CustomChart({ labels, datasets, headerText, subText }) {

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

    const createCustomTooltip = (context) => {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip');
                
        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table></table>';
            document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
        }

        // Set caret Position (above, below,no-transform ).As I need above I don't delete that class
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
            tooltipEl.classList.add('no-transform');
        }


        // Set HTML & Data
        if (tooltipModel.body) {
            const dataFromCurrentElement = tooltipModel.dataPoints[0];
            const label = dataFromCurrentElement.dataset.label
            const formattedValue = dataFromCurrentElement.formattedValue.trim();
            const innerHtml = `
            <div style="display: flex; justify-content:center; align-items: center;">
                <div style="clip-path: polygon(100% 0, 0 50%, 100% 100%); background-color: #29293D; width: 20px; height: 20px; margin-right: -5px">

                </div>
                <div style="display: flex; flex-direction: column; width: 192px; padding: 8px 16px; background-color: #29293D; justify-content: center; align-items: center; border-radius: 8px;">
                    <div>
                        <span style="color: white; ">${label}</span>
                    </div>
                    <div>
                        <span style="color: #C1C1D7; font-size: 14px;">${formattedValue}</span>
                    </div>
                </div>
            </div>
        `;

            tooltipEl.querySelector('table').innerHTML = innerHtml;
        }

        const position = context.chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    }

	return (
		<section>
			<Box className="container">
                <Box>
                    <TextWithAnimation ref={ref1} delay='.2s' view={view1} sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: 700, marginBottom: '2rem' }}>{headerText}</TextWithAnimation>
                    <TextWithAnimation ref={ref2} delay='.2s' view={view2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#64649B', maxWidth: { xs: '100%', md: '50%' }}}>{subText}</TextWithAnimation>
                </Box>
                <Box ref={ref3} sx={{ height: '360px', marginTop: '5rem'}}>
                   {view3 ? (
                       <Bar 
                           data={
                               {
                                   labels: labels,
                                   datasets: datasets
                               }
                           }
                           options={{
                               animation: {
                                   duration: 1500,
                                   easing: 'linear',
                               },
                               plugins: {
                                   tooltip: {
                                       // Disable the on-canvas tooltip
                                       yAlign: 'top',
                                       enabled: false,
                                       external: (context) => {
                                           createCustomTooltip(context)
                                       }
                                   },
                                   legend: {
                                       display: false
                                   }
                               },
                               responsive: true,
                               maintainAspectRatio: false,
                               scales: {
                                   x: {
                                       stacked: true,
                                       grid:{
                                           display:false
                                       }
                                   },
                                   y: {
                                       stacked: true,
                                       ticks: {
                                           count: 6,
                                           callback: function(value) {
                                               if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(1) + "k";
                                               if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(1) + "m";
                                           }
                                       },
                                   }                         
                               }
                           }}
                       />

                   ) : (null)

                   }
                </Box>
			</Box>
		</section>
	);
}