import { theme } from '../../themes/Default';
import { lightGreen, red } from '@mui/material/colors';

export const styles = {
	winningDisplay: {
		backgroundColor: lightGreen[500],
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        color: "#fff",
        width: "80%",
        margin: "0 auto",
        boxShadow: "0px 5px 8px -2px rgba(0,0,0,0.2)",
	},
	lossDisplay: {
		backgroundColor: red[500],
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        color: "#fff",
        width: "80%",
        margin: "0 auto",
        boxShadow: "0px 5px 8px -2px rgba(0,0,0,0.2)",
	},
    streak: {
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        color: "#121212",
        width: "80%",
        margin: "0 auto",
	},
};
