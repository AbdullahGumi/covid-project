import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

// Material UI
import Box from '@mui/material/Box';

export default function LineChart({ countryDataByDate, year }) {
    const [data, setData] = useState([])
    
    useEffect(()=> {
        const convertDateFormat = () => {
            const stored =  countryDataByDate.map(item => {
                 const myDate = new Date(item.Date_reported)
                 const month = myDate.toLocaleString('default', { month: 'long' })
                 return { ...item, Date_reported: month }
             })
             setData(stored)
        }
        convertDateFormat()
    }, [countryDataByDate])

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
            console.log(dataFromCurrentElement)
            const datasetLabel = dataFromCurrentElement.dataset.label
            const label = dataFromCurrentElement.label;
            const formattedValue = dataFromCurrentElement.formattedValue.trim();
            const innerHtml = `
            <div style="display: flex; justify-content:center; align-items: center;">
                <div style="clip-path: polygon(100% 0, 0 50%, 100% 100%); background-color: #29293D; width: 20px; height: 20px; margin-right: -5px">

                </div>
                <div style="display: flex; flex-direction: column; width: 133px; padding: 8px 16px; background-color: #29293D; justify-content: center; align-items: center; border-radius: 8px;">
                    <div>
                        <span style="color: white; font-weight: 700;">${label} ${year}</span>
                    </div>
                    <div>
                        <span style="color: #C1C1D7; font-size: 14px; ">Total ${datasetLabel}</span>
                    </div>
                    <div>
                        <span style="color: white; font-size: 14px;">${formattedValue}</span>
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

    const getEachMonthData = (data, key) => {
        return [
          ...new Map(
            data.map(x => [key(x), x])
            ).values()
          ]
    }
        
    const monthData = getEachMonthData(data, item => item.Date_reported)

    const casesArray = monthData.map(item => item.Cumulative_cases)
    const deathsArray = monthData.map(item => item.Cumulative_deaths)
    let cases = {
        label: 'Cases',
        data: casesArray,
        fill: true,
        backgroundColor: 'rgba(69, 227, 255, 0.1)',
        borderColor: '#45E3FF',
      };
    
    let deaths = {
        label: 'Deaths',
        data: deathsArray,
        fill: true,
        backgroundColor: 'rgba(161, 98, 247, 0.1)',
        borderColor: '#A162F7',
      };
    
    let covidData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [cases, deaths]
    };
    
    let chartOptions = {
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
        plugins: {
            tooltip: {
                // Disable the on-canvas tooltip
                yAlign: 'top',
                xAlign: 'left',
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
        aspectRatio: 5,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid:{
                    display:false
                }
            },
            y: {
                ticks: {
                    // autoSkip: true,
                    // autoSkipPadding: 20,
                    count: 6,
                    callback: function(value) {
                        if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(1) + "k";
                        if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(1) + "m";
                    }
                },
            }                         
        }
    };

	return (
		<section>
			<Box className="container">
                <Line 
                    style={{height: '272px' }}
                    data={covidData}
                    options={chartOptions}
                />
			</Box>
		</section>
	);
}