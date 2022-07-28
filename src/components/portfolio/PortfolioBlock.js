import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';
import Style from './Portfolio.modules.scss';

function PortfolioBlock({ image, live, source, title }) {
	return (
		<Box
			className='project-card'
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			p={6}
		>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				// backgroundColor={'#1a1a1a'}
				boxShadow={'10px 10px 20px rgba(0, 0, 0, 0.4)'}
				borderRadius={5}
			>
				<Box
					component={'img'}
					src={image}
					alt={'project thumbnail'}
					width={600}
					borderRadius={'10px 10px 0 0'}
				/>
				<h1 style={{ fontSize: '2rem', marginTop: '10px' }}>{title}</h1>
				<Box
					className={'portfolio'}
					display={'flex'}
					flexDirection={'column'}
					gap={'1rem'}
					alignItems={'center'}
					fontSize={'1.5rem'}
					py={'2rem'}
				>
					{live && (
						<Box p={1} border={'2px solid black'} borderRadius={'8px'}>
							<IconLink link={live} title={'Live Demo'} icon={'fa fa-chrome'} />
						</Box>
					)}
					{source && (
						<Box p={1} border={'2px dashed black'} borderRadius={'8px'}>
							<IconLink
								link={source}
								title={'Source Code'}
								icon={'fa fa-code'}
							/>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
}

export default PortfolioBlock;
