import React, { useState, useEffect } from 'react';
import {
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	Button,
	FormControl,
	FormLabel,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { bet } from '../../actions/bet';
import { styles } from './styles';

const BetForm = () => {
	const [currentBet, setcurrentBet] = useState(0);
	const [balance, setBalance] = useState(
		localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).tokens : 'null'
	);
	const [selection, setSelection] = useState('Heads');
	const betState = useSelector((state) => state.toss.bet);
	const infoState = useSelector((state) => state.toss.info);
	const dispatch = useDispatch();

	const handleBetChange = (e) => {
		const value = parseInt(e.target.value);
		if (value <= balance) {
			setcurrentBet(value);
		}
	};

	const handleSelectionChange = (e) => {
		setSelection(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(bet({ betChoice: selection, betAmount: currentBet }));
	};

	useEffect(() => {
		setBalance(
			localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).tokens : '0'
		);
	});

	return (
		<div style={styles.container}>
			{betState.victory ? (
				<div style={styles.winningDisplay}>
					<div>WINNER</div>
                    <div>{betState.coinResult}</div>
					<div>
						x{betState.winningsMultiplier} Winnings {betState.tokensWon} tokens
					</div>
				</div>
			) : (
                betState.victory === false ? 
				<div style={styles.lossDisplay}>
					<div>LOSER</div>
					<div>{betState.coinResult}</div>
                    <br />
				</div>: null
			)}

            <div style={styles.streak}>Streak: {infoState.streak}</div>
			<form onSubmit={handleSubmit}>
				<div>
					<TextField
						label={`Bet (max ${infoState.tokens})`}
						type='number'
						value={currentBet}
						onChange={handleBetChange}
						inputProps={{ max: infoState.tokens }}
					/>
				</div>
				<FormControl component='fieldset' margin='normal'>
					<FormLabel component='legend'>Choose Heads or Tails</FormLabel>
					<RadioGroup value={selection} onChange={handleSelectionChange}>
						<FormControlLabel value='Heads' control={<Radio />} label='Heads' />
						<FormControlLabel value='Tails' control={<Radio />} label='Tails' />
					</RadioGroup>
					<Button variant='contained' color='primary' type='submit'>
						Submit
					</Button>
				</FormControl>
			</form>
		</div>
	);
};
export default BetForm;
