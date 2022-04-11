import React, { memo, useState, useEffect } from "react";
import { useInView } from 'react-hook-inview';

import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

//data
import worldJson from '../data/world-110m.json'
import covidJson from '../data/covid.json'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';


const MapChart = ({ setTooltipContent }) => {
  const [countryDetails, setCountryDetails] = useState({
    name: '',
    code: '',
    population: '',
  })

  const [view, setView] = useState(false);
  const [ref, isVisible] = useInView({threshold: .5})
  
  const country =  covidJson.filter(item => item.Country_code === countryDetails.code)
  const latestCountryData = country[country.length - 1]
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));

  const getLatestCountriesData = (data, key) => {
    return [
      ...new Map(
        data.map(x => [key(x), x])
        ).values()
      ]
    }
    
    useEffect(()=> {
      isVisible && setView(true)

      setTooltipContent({
        name: countryDetails.name,
        code: countryDetails.code,
        population: countryDetails.population,
        totalCases: latestCountryData && Number(latestCountryData.Cumulative_cases),
        totalDeaths: latestCountryData && Number(latestCountryData.Cumulative_deaths),
        whoRegion: latestCountryData && latestCountryData.WHO_region,
        newCases: latestCountryData && latestCountryData.New_cases,
        newDeaths: latestCountryData && latestCountryData.New_deaths
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[latestCountryData, isVisible])

    const countries = getLatestCountriesData(covidJson, item => item.Country_code)
    
    const checkConditionByCases = (code) => {
      const cases = countries.filter(item => item.Country_code === code)
      let total = cases.map(item => item.Cumulative_cases)
      if (total < 1){
        //Free zone
        return '#EFEFF5'
      } else if (total <= 50000) {
        // Low cases
        return '#A162F7'
      }
      else if (total <= 1000000) {
        // average cases 
        return '#6F88FC'
      } else if (total >= 1000000) {
        // critical cases
        return '#FE4D3C'
      }
  } 


  return (
    <div ref={ref} style={{ transition: 'all 630ms linear', transform: view ? 'scale(1)' : 'scale(0.2)'}} >
      <ComposableMap data-tip='' projectionConfig={{
          scale: 200,
          rotate: [(matchXS ? -43.5 : (matchSM ? -20 : (matchMD ? -30.5 : -22.5))), -1, 0]
        }}>
          <Geographies geography={worldJson}>
            {({ geographies }) => {
                return geographies.map(geo => {
                  const { NAME, POP_EST, ISO_A2 } = geo.properties;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setCountryDetails({
                          name: NAME,
                          code: ISO_A2,
                          population: POP_EST,
                        })
                      }}
                      onMouseLeave={() => {
                        setTooltipContent({});
                      }}
                      style={{
                        default: {
                          fill:  checkConditionByCases(ISO_A2),
                          outline: "none"
                        },
                        hover: {
                          fill: "-moz-initial",
                          outline: "none"
                        },
                        pressed: {
                          fill: "-moz-initial",
                          outline: "none"
                        }
                      }}
                    />
                  )
                  })
            } 
            }
          </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
  