import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

//mui
import Box from '@mui/material/Box';

const Logo = styled('p')`
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 700;
`;

export default function Navbar() {


	return (
		<Box component='nav' sx={{ position:  'sticky', width: '100%', zIndex: 200, backgroundColor: 'white'}}>
			<Box className='container'>
				<Link to='/'>
					<Logo>Logo</Logo>
				</Link>
			</Box>
		</Box>
	);
};