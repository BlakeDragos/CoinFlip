import User from '../models/user.js';

const info = async (req, res) => {
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}

		const user = await User.findById({ _id: req.userId });
		if (!user) {
			return res.status(404).json({ message: 'User Does Not Exist' });
		}

		res.status(200).json({ tokens: user.tokens, history: user.history, streak: user.streak });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

export default info;
