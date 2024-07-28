import { theme } from "../../themes/Default";
import { deepPurple, lightGreen, red } from "@mui/material/colors";

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "1000px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  historyContainer:{
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    overflow: "auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: "15px 10px",
    boxShadow: "0px 10px 8px -2px rgba(0,0,0,0.2)",
  },
  green: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: lightGreen[500],
    width: "20%",
    alignItems: "center",
    margin: "0 10px",
    padding: "10px 10px",
    borderRadius: 5,
    boxShadow: "0px 5px 8px -2px rgba(0,0,0,0.2)",
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    width: "20%",
    alignItems: "center",
    margin: "0 10px",
    padding: "10px 10px",
    borderRadius: 5,
    boxShadow: "0px 5px 8px -2px rgba(0,0,0,0.2)",
  },
};