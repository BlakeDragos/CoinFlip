import React from 'react';
import { Container, Grow, Paper, Typography } from '@mui/material';
import BetForm from '../Bet/Bet.js';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Home = () => {
	const infoState = useSelector((state) => state.toss.info);
	const user = localStorage.getItem('profile')
		? jwtDecode(JSON.parse(localStorage.getItem('profile')).token)
		: 'null';
	const isSingedIn = user;

	return (
		<Grow in>
			<Container component='main' maxWidth='lg'>
				<Paper elevation={3}>
					{isSingedIn !== 'null' && isSingedIn !== null ? (
						<Typography variant='h4' align='center' color='primary'>
							<br />
							<BetForm />
							<br />
						</Typography>
					) : (
						<Typography variant='h4' align='center' color='primary'>
							Login to Play
						</Typography>
					)}
				</Paper>
				{infoState.history.length > 0 ? (
					<div style={styles.historyContainer}>
						{infoState.history.reverse().map((history, index) => (
							<div key={index} style={history.victory ? styles.green : styles.red}>
								<div>Won: {history.amountWon}</div>
								<div>{history.coinFlipResult}</div>
							</div>
						))}
					</div>
				) : null}
			</Container>
		</Grow>
	);
};

export default Home;
