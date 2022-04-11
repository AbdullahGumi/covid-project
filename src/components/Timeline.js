import React, { useState, useRef, useLayoutEffect } from 'react';
import SmoothList from 'react-smooth-list';
import { Scrollspy } from '@makotot/ghostui'


// Material UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Timeline() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null)

    useLayoutEffect(() => {
        const onScroll = () => {
            if(ref.current.getBoundingClientRect().top >= -37 && ref.current.getBoundingClientRect().top  <= 0 ){
                setIsVisible(true)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const timeline = [
        {
            time: '2019 December - 2020 February',
            news: [
                'A cluster of patients in Wuhan, Hubei Providence, China begins to experience shortness of breath and fever. The World Health Organization China Country Office is informed of several cases of pneumonia of unknown etiology (unknown cause) detected in Wuhan, Hubei Province. All cases connected to the Huanan Seafood Wholesale Market in Wuhan.',
                'A scientist in China confirms that the mysterious new illness can be transmitted from human to human. Two days later, China puts Wuhan under strict lockdown. Meanwhile, on the other side of the globe, the U.S. sees its first case of the  disease, later named COVID-19. The patient is a resident of Washington state who had traveled to Wuhan. The Trump Administration declares a public  health emergency.',
                'Cases of COVID-19 begin to multiply around the world. Countries are restricting travel to contain the virus.'
            ]
        },
        {
            time: '2020 March - 2020 May',
            news: [
                'The WHO characterizes COVID-19 as a pandemic. As cases grow, hospitals become overwhelmed, and there is a nationwide shortage of personal protective equipment (PPE). In Italy, there is a moment of solidarity when people in quarantine sing from their balconies, starting a trend that sweeps across Europe.',
                'As cases continue to surge, countries keep their borders sealed. Businesses shut down (leading to massive job losses), schools close, sporting events cancel, and college students go home. People start wearing masks and practicing “social distancing.”',
                'Experts focus on “flattening the curve,” meaning that if you use a graph to map the number of COVID-19 cases over time, you would ideally start to see a  flattened line representing a reduction of cases. Scientists across the globe are ina race to understand the disease, find treatments and solutions, and develop  vaccines.'
            ]
        },
        {
            time: '2020 June - 2020 August',
            news: [
                'Efforts to reopen global economies leads to new cases, and the curve is not flattening. Experts point to the dangers of large gatherings and use terms like  “clusters” and “super-spreader events.”',
                'The pandemic is causing an uptick in mental health issues as job losses continue  to soar, parents juggle working at home with caring for or homeschooling children, and young adults grow frustrated by isolation from friends and limited  job prospects. Officials debate the best scenarios for allowing children to safely return to school.',
                'The first documented case of reinfection is reported in Hong Kong. On a broader scale, COVID-19 is now the third leading cause of death in the U.S. (after heart disease and cancer).'
            ]
        },
        {
            time: '2020 September - 2020 November',
            news: [
                'WHO recommends steroids to treat severely and critically ill patients, but not to those with mild disease. The Centers for Disease Control and Prevention (CDC) reports that people who had recently tested positive were about twice as likely to have reported dining at a restaurant than were those with negative test results.',
                'President Trump tests positive for COVID-19 after a gathering in the White House Rose Garden where multiple people were also thought to have been infected.  Meanwhile, the Food and Drug Administration (FDA) grants full approval to a drug called remdesivir for treatment of COVID-19.',
                'Cases rise again as cold weather drives more people indoors—the U.S. begins to break records for daily cases/deaths. People are urged to stay at home, limit the  size of their gatherings, and avoid mixing with people who don’t live in theirhousehold.'
            ]
        },
        {
            time: '2020 December - 2021 February',
            news: [
                'The FDA grants Pfizer-BioNTech the first Emergency Use Authorization (EUA) for an mRNA vaccine, a new type of vaccine that has proven to be highly effective   against COVID-19. A week later, it grants another EUA to Moderna, also for an mRNA vaccine. But, as vaccinations begin, major variants of the virus are  beginning to circulate. The UK reports that a new variant of the virus, called  B.1.1.7, could be more contagious. By the end of the month, B.1.1.7 is detected  in the U.S.',
                'In the U.S., the number of cases and deaths begins to fall. But more variants are spreading, including one first identified in South Africa called B.1.351, which is reported in the U.S. by the end of the month. Around the world, the race is on to vaccinate as many people as possible in time to slow the spread of the variants. Researchers work to understand how deadly or contagious variants are compared to the original virus.',
                'There is not enough vaccine supply to meet the demand. A third option (by Johnson & Johnson) vaccines are made more available to everyone. Meanwhile, ompanies are working to tweak their products to make distribution easier and toontrol new variants as the U.S death toll passes 500,000.'
            ]
        },
        {
            time: '2021 March - 2021 May',
            news: [
                'Several countries, including Ireland, Iceland, Denmark, and Norway suspend dispensing AstaZeneca COVID vaccine over concerns of blood clotting. U.S.  surpasses 100 million vaccinations administered and announces it will send 4 million doses of COVID vaccine to Mexico and Canada.',
                'CDC recommends continued use of Johnson and Johnson vaccine for people 18 and older.',
                'EU Announces Contract Extension with Pfizer/BioNTech as Pfizer and BioNTech vaccines are approved for adolescents. Health experts note that that the real-world evidence of vaccines against SARS-CoV-2, the virus that causes COVID-19, is even better than expected.'
            ]
        },
        {
            time: '2021 June - 2021 August',
            news: [
                'U.S administration purchase 500 million doses of Pfizer’s COVID-19 vaccine to be donated to the rest of the world, targeted at low- and middle-income countries.  New delta variant spread grows and accounts for more than 90% of new COVID-19 cases in the United Kingdom.',
                'Pfizer and BioNTech seek approval from the FDA for booster shots as delta variant efficacy is only 88%. Data also reveal a single dose of the vaccine or that from AstraZeneca is even less effective.',
                'European countries easing travel restrictions. US notes 70% of the population have been vaccinated with at least 1 dose of a COVID-19 vaccine as COVID-19 hospitalizations among children reaches record numbers.'
            ]
        }
    ]

    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
      ];

	return (
		<section ref={ref} style={{ backgroundColor: '#003D47', position: isVisible ? 'relative' : '', height: '100%' }}>
            <Box className="container" sx={{ paddingTop: '4rem'}}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, color: 'white' }}>Timeline</Typography>
                <SmoothList transitionDuration={1000}>
                    <Scrollspy offset={-400} sectionRefs={sectionRefs}>
                        {({ currentElementIndexInViewport }) => {
                            return (
                                <Grid container sx={{ paddingTop: '4rem', display: 'flex'}}>
                                    <Grid item md={4} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0, paddingBottom: '3rem'}}>
                                        <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                                {timeline.map((time, i, {length}) => (
                                                    <div key={i} style={{ display: 'flex', flexDirection: 'column'}}>
                                                        <Typography 
                                                            onClick={()=> sectionRefs[i].current.scrollIntoView( { behavior: 'smooth', block: 'end' } )}
                                                            sx={{ 
                                                                cursor: 'pointer',
                                                                fontSize: currentElementIndexInViewport === i ? 16 : 14,
                                                                fontWeight: currentElementIndexInViewport === i ? 700 : 'normal',
                                                                color: currentElementIndexInViewport === i ? 'white' : '#C1C1D780'
                                                            }} 
                                                            key={time.time}>{time.time}
                                                        </Typography>
                                                    { length - 1 !== i &&
                                                        <div style={{ borderLeft: '2px dashed rgba(193, 193, 215, 0.5)', height: 22, width: 0, margin: '1rem 0' }}/>
                                                    } 
                                                    </div>

                                                ))

                                                }
                                        </Box>
                                    </Grid>
                                    <Grid item md={8} sx={{ display: 'flex', justifyContent: 'center', alignItmes: 'center', flexDirection: 'column'}}>
                                    <div id='timeline'>
                                        {timeline.map((item, i) => {
                                            return (
                                                <div ref={sectionRefs[i]} key={item.time}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                        {item.news.map(item => 
                                                            <Typography 
                                                                paragraph 
                                                                sx={{ 
                                                                    marginBottom: '3rem',
                                                                    color: currentElementIndexInViewport === i ? 'white' : '#C1C1D780',
                                                                    fontSize: currentElementIndexInViewport === i ? 16 : 14,
                                                                    maxWidth: currentElementIndexInViewport === i ? '100%': '90%',
                                                                }}>
                                                                {item}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    </Grid>
                                </Grid>
                                )}
                            }
                    </Scrollspy>
                </SmoothList>
            </Box>
		</section>
	);
}


// const timeline = [
//     {
//         time: '2019 December',
//         news: 'A cluster of patients in Wuhan, Hubei Providence, China begins to experience shortness of breath and fever. The World Health Organization China Country Office is informed of several cases of pneumonia of unknown etiology (unknown cause) detected in Wuhan, Hubei Province. All cases connected to the Huanan Seafood Wholesale Market in Wuhan.',
//     },
//     {
//         time: '2020 January',
//         news: 'A scientist in China confirms that the mysterious new illness can be transmitted from human to human. Two days later, China puts Wuhan under strict lockdown. Meanwhile, on the other side of the globe, the U.S. sees its first case of the  disease, later named COVID-19. The patient is a resident of Washington state who had traveled to Wuhan. The Trump Administration declares a public  health emergency.',
//     },
//     {
//         time: '2020 February',
//         news: 'Cases of COVID-19 begin to multiply around the world. Countries are restricting travel to contain the virus.'
//     },
//     {
//         time: '2020 March',
//         news: 'The WHO characterizes COVID-19 as a pandemic. As cases grow, hospitals become overwhelmed, and there is a nationwide shortage of personal protective equipment (PPE). In Italy, there is a moment of solidarity when people in quarantine sing from their balconies, starting a trend that sweeps across Europe.',
//     },
//     {
//         time: '2020 April',
//         news: 'As cases continue to surge, countries keep their borders sealed. Businesses shut down (leading to massive job losses), schools close, sporting events cancel, and college students go home. People start wearing masks and practicing “social distancing.”',
//     },
//     {
//         time: '2020 May',
//         news: 'Experts focus on “flattening the curve,” meaning that if you use a graph to map the number of COVID-19 cases over time, you would ideally start to see a  flattened line representing a reduction of cases. Scientists across the globe are ina race to understand the disease, find treatments and solutions, and develop  vaccines.'
//     },
//     {
//         time: '2020 June',
//         news: 'Efforts to reopen global economies leads to new cases, and the curve is not flattening. Experts point to the dangers of large gatherings and use terms like  “clusters” and “super-spreader events.”',
//     },
//     {
//         time: '2020 July',
//         news: 'The pandemic is causing an uptick in mental health issues as job losses continue  to soar, parents juggle working at home with caring for or homeschooling children, and young adults grow frustrated by isolation from friends and limited  job prospects. Officials debate the best scenarios for allowing children to safely return to school.',
//     },
//     {
//         time: '2020 August',
//         news: 'The first documented case of reinfection is reported in Hong Kong. On a broader scale, COVID-19 is now the third leading cause of death in the U.S. (after heart disease and cancer).'
//     },
//     {
//         time: '2020 September',
//         news: 'WHO recommends steroids to treat severely and critically ill patients, but not to those with mild disease. The Centers for Disease Control and Prevention (CDC) reports that people who had recently tested positive were about twice as likely to have reported dining at a restaurant than were those with negative test results.',
//     },
//     {
//         time: '2020 October',
//         news: 'President Trump tests positive for COVID-19 after a gathering in the White House Rose Garden where multiple people were also thought to have been infected.  Meanwhile, the Food and Drug Administration (FDA) grants full approval to a drug called remdesivir for treatment of COVID-19.',
//     },
//     {
//         time: '2020 November',
//         news: 'Cases rise again as cold weather drives more people indoors—the U.S. begins to break records for daily cases/deaths. People are urged to stay at home, limit the  size of their gatherings, and avoid mixing with people who don’t live in theirhousehold.'
//     },
//     {
//         time: '2020 December',
//         news: 'The FDA grants Pfizer-BioNTech the first Emergency Use Authorization (EUA) for an mRNA vaccine, a new type of vaccine that has proven to be highly effective   against COVID-19. A week later, it grants another EUA to Moderna, also for an mRNA vaccine. But, as vaccinations begin, major variants of the virus are  beginning to circulate. The UK reports that a new variant of the virus, called  B.1.1.7, could be more contagious. By the end of the month, B.1.1.7 is detected  in the U.S.',
//     },
//     {
//         time: '2021 January',
//         news: 'In the U.S., the number of cases and deaths begins to fall. But more variants are spreading, including one first identified in South Africa called B.1.351, which is reported in the U.S. by the end of the month. Around the world, the race is on to vaccinate as many people as possible in time to slow the spread of the variants. Researchers work to understand how deadly or contagious variants are compared to the original virus.',
//     },
//     {
//         time: '2021 February',
//         news: 'There is not enough vaccine supply to meet the demand. A third option (by Johnson & Johnson) vaccines are made more available to everyone. Meanwhile, ompanies are working to tweak their products to make distribution easier and toontrol new variants as the U.S death toll passes 500,000.'
//     },
//     {
//         time: '2021 March',
//         news: 'Several countries, including Ireland, Iceland, Denmark, and Norway suspend dispensing AstaZeneca COVID vaccine over concerns of blood clotting. U.S.  surpasses 100 million vaccinations administered and announces it will send 4 million doses of COVID vaccine to Mexico and Canada.',
//     },
//     {
//         time: '2021 April',
//         news: 'CDC recommends continued use of Johnson and Johnson vaccine for people 18 and older.',
//     },
//     {
//         time: '2021 May',
//         news: 'EU Announces Contract Extension with Pfizer/BioNTech as Pfizer and BioNTech vaccines are approved for adolescents. Health experts note that that the real-world evidence of vaccines against SARS-CoV-2, the virus that causes COVID-19, is even better than expected.'
//     },
//     {
//         time: '2021 June',
//         news: 'U.S administration purchase 500 million doses of Pfizer’s COVID-19 vaccine to be donated to the rest of the world, targeted at low- and middle-income countries.  New delta variant spread grows and accounts for more than 90% of new COVID-19 cases in the United Kingdom.',
//     },
//     {
//         time: '2021 July',
//         news: 'Pfizer and BioNTech seek approval from the FDA for booster shots as delta variant efficacy is only 88%. Data also reveal a single dose of the vaccine or that from AstraZeneca is even less effective.',
//     },
//     {
//         time: '2021 August',
//         news: 'European countries easing travel restrictions. US notes 70% of the population have been vaccinated with at least 1 dose of a COVID-19 vaccine as COVID-19 hospitalizations among children reaches record numbers.'
//     }
// ]