import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
	{
		name: 'Home',
		to: '/',
		active: 'home',
	},
	{
		name: 'Portfolio',
		to: '/portfolio',
		active: 'portfolio',
	},
	{
		name: info.initials,
		type: 'initials',
		to: '/',
		active: 'home',
	},
	{
		name: 'About Me',
		to: '/about',
		active: 'about',
	},
];

export default function Navbar({ darkMode, handleClick }) {
	const location = useLocation();
	const [active, setActive] = useState(
		location.pathname === '/'
			? 'home'
			: location.pathname.slice(1, location.pathname.length)
	);

	return (
		<Box
			component={'nav'}
			width={'100%'}
			height={'80px'}
			position={'fixed'}
			zIndex={100}
			backgroundColor={darkMode ? '#1f1f1f' : '#f8f8f8'}
			boxShadow={'0 8px 30px rgba(0, 0, 0, 0.2)'}
		>
			<Box
				component={'ul'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={{ xs: '2rem', md: '8rem' }}
				textTransform={'lowercase'}
				fontSize={'1rem'}
			>
				{links.map((link, index) => (
					<Box
						key={index}
						component={'li'}
						className={link.active === active && !link.type && Style.active}
						sx={{ borderImageSource: info.gradient }}
					>
						<Link to={link.to} onClick={() => setActive(link.active)}>
							{!link.type && (
								<p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>
							)}
							{link.type && (
								<img
									src='https://storage.googleapis.com/ares-profile-pictures/hd/danejoelwhitfield-6cecf8e75bc7a0f052f809595e5e925b_hd.jpg'
									alt={'avatar'}
								/>
							)}
						</Link>
					</Box>
				))}
				<li>
					<Toggler darkMode={darkMode} handleClick={handleClick} />
				</li>
			</Box>
		</Box>
	);
}
