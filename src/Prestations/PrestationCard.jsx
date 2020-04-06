import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Box,
    CardMedia,
    Button,
} from "@material-ui/core";

import LogoAttention from "../Assets/important.jpg";
import LogoClosed from "../Assets/closed.png";

import PrestationPresence from "./PrestationPresence";
import PrestationDetails from "./PrestationDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.text,
    },
    card: {
        boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
    },
    subtitle: {
        fontWeight: "bold",
    },
    btnPresence: {
        marginTop: "10px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    btnDetails: {
        color: theme.palette.info.main,
    },
}));

function PrestationCard() {
    const classes = useStyles();
    const [displayDetails, setDisplayDetails] = useState(false);
    const [displayPresence, setDisplayPresence] = useState(false);

    const handleDisplayDetails = () => {
        setDisplayDetails(true);
    };

    const handleDisplayPresence = () => {
        setDisplayPresence(true);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardHeader title="Pau" subheader="16 mars 2020" />
                <Divider />
                {displayDetails ? (
                    <PrestationDetails />
                ) : displayPresence ? (
                    <PrestationPresence />
                ) : (
                    <>
                        <CardMedia
                            image={LogoAttention}
                            title="Attention"
                            component="img"
                            alt="Attention !"
                            height="200"
                        />
                        <CardContent>
                            <Box py={3} px={1}>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    <span className={classes.subtitle}>
                                        Heure d'arrivée :{" "}
                                    </span>
                                    10h
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    <span className={classes.subtitle}>
                                        Type de contrat :{" "}
                                    </span>
                                    1/2 PB
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    <span className={classes.subtitle}>
                                        Nombre de membres engagés :
                                    </span>{" "}
                                    5
                                </Typography>
                            </Box>
                            <Grid container xs={12}>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        className={classes.btnDetails}
                                        onClick={handleDisplayDetails}
                                    >
                                        Plus de détails
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className={classes.btnPresence}
                                        onClick={handleDisplayPresence}
                                    >
                                        Ma présence
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </>
                )}
            </Card>
        </Grid>
    );
}

export default PrestationCard;
