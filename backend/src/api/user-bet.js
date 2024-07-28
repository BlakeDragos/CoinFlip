import User from '../models/user.js';

const coinFlipper = () => {
	const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
	return result;
};

const bet = async (req, res) => {
	const { betAmount, betChoice } = req.body;
	if (betAmount <= 0 || typeof betAmount !== 'number') {
		return res.status(422).json({ message: 'Invalid Bet' });
	}
	if (betChoice !== 'Heads' && betChoice !== 'Tails') {
		return res.status(422).json({ message: 'Invalid Bet' });
	}

	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}

		const user = await User.findById({ _id: req.userId });
		if (!user) {
			return res.status(404).json({ message: 'User Does Not Exist' });
		}
		if (user.tokens < betAmount) {
			return res.status(422).json({ message: 'Not enough tokens for that bet' });
		}

		let newTokens = user.tokens - betAmount;
		let newStreak = user.streak;
		let newHistory = user.history;
		const coinFlip = coinFlipper();

		let victory;
        let winningsMultiplier;
		if (coinFlip == betChoice) {
			newStreak += 1;
			switch (newStreak) {
				case 3:
					winningsMultiplier = 3;
					break;
				case 5:
					winningsMultiplier = 10;
					newStreak = 0;
					break;
				default:
					winningsMultiplier = 2;
					break;
			}
			newTokens = newTokens + betAmount * winningsMultiplier;
			victory = true;
		} else {
			newStreak = 0;
			victory = false;
			winningsMultiplier = 0;
		}

		newHistory.push({
			amountBet: betAmount,
            amountWon: betAmount * winningsMultiplier,
            winningsMultiplier: winningsMultiplier,
            coinFlipResult: coinFlip,
			choice: betChoice,
			victory: victory,
		});

		if (newHistory.length > 10) {
			newHistory.shift(); // Remove the oldest entry
		}

		const updateUser = await User.findByIdAndUpdate(
			user._id,
			{
				tokens: newTokens,
				streak: newStreak,
				history: newHistory,
			},
			{ new: true }
		);

		res.status(200).json({
            tokensWon: betAmount * winningsMultiplier,
			coinResult: coinFlip,
			winningsMultiplier: winningsMultiplier,
            victory: victory
		});
	} catch (error) {
        console.log(error)
		res.status(500).json({ message: 'Something went wrong' });
	}
};

export default bet;
