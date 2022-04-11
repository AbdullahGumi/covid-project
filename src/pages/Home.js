import { Fragment, useEffect } from 'react';

// Comps
import Hero from '../components/Hero';
import Info from '../components/Info';
import Symptoms from '../components/Symptoms';
import Timeline from '../components/Timeline';
import CovidData from '../components/CovidData';
import Map from '../components/Map';
import Profiles from '../components/Profiles';

export default function Home() {

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

	return (
		<Fragment>
			<Hero/>
			<Info/>
			<Symptoms/>
			<Timeline/>
			<CovidData/>
			<Map/>
			<Profiles/>
		</Fragment>
	);
};