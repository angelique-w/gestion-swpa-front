import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {
        top: "auto",
        bottom: 0,
        backgroundColor: theme.palette.primary.light,
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },
    textFooter: {
        textAlign: "center"
    }
}));

function Footer({ theme }) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Typography className={classes.textFooter}>
                Made by Angélique Wons
            </Typography>
        </AppBar>
    );
}

export default Footer;
