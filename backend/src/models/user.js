import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	tokens: { type: Number, required: true, defualt: 100 },
	streak: { type: Number, defualt: 0 },
	history: [
		{
			amountBet: { type: Number, required: true },
			amountWon: { type: Number, required: true },
			winningsMultiplier: { type: Number, required: true },
			coinFlipResult: { type: String, required: true },
			choice: { type: String, required: true },
			victory: { type: Boolean, required: true },
		},
	],
	id: { type: String },
});

export default mongoose.model('User', userSchema);
