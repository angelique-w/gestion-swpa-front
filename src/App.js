import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Router from "./Router";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#ff867f",
            main: "#ff5252",
            dark: "#c50e29",
            contrastText: "#ffffff",
            text: "#4a4a4a",
        },
        secondary: {
            // light: "#5df2d6",
            // main: "#00bfa5",
            // dark: "#008e76",
            light: "#00bfa5",
            main: "#008e76",
            text: "#ffffff",
            contrastText: "#4a4a4a",
        },
        error: {
            light: "#ff5131",
            main: "#d50000",
            dark: "#9b0000",
            contrastText: "#ffffff",
        },
        warning: {
            light: "#fffd61",
            main: "#ffca28",
            dark: "#c79a00",
            contrastText: "#4a4a4a",
        },
        info: {
            main: "#4d78ab",
            text: "#ffffff",
            contrastText: "#4a4a4a",
        },
        success: {
            light: "#66ffa6",
            main: "#00e676",
            dark: "#00b248",
            contrastText: "#4a4a4a",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
}

export default App;
