import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardActionArea,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Box,
    CardMedia,
} from "@material-ui/core";

import Layout from "../Layout/Layout";
import LogoAttention from "../Assets/Attention.png";
import LogoClosed from "../Assets/closed.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.main,
        // width: "100%"
        color: theme.palette.primary.text,
    },
    card: {
        // backgroundColor: theme.palette.secondary.light,
    },
    subtitle: {
        fontWeight: "bold",
    },
    media: {},
}));

function PrestationsPage() {
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <Box py={5} className={classes.containerTitle}>
                    <Typography variant="h4" align="start">
                        Prestations
                    </Typography>
                    <Divider />
                </Box>
                <Box mb={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="body"
                                color="secondary"
                                component="p"
                            >
                                Cliquer sur la carte pour renseigner sa présence
                                et avoir plus d'informations sur la sortie
                            </Typography>
                        </Grid>
                        {[0, 1, 2, 3, 4, 5].map(() => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardHeader
                                            title="Pau"
                                            subheader="16 mars 2020"
                                        />
                                        <Divider />
                                        <CardMedia
                                            className={classes.media}
                                            image={LogoClosed}
                                            title="Attention"
                                            component="img"
                                            alt="Attention !"
                                            height="240"
                                        />
                                        <CardContent>
                                            <Box py={3} px={1}>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    <span
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        Ville :{" "}
                                                    </span>
                                                    Pau
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    <span
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        Date :{" "}
                                                    </span>
                                                    16 mars 2020
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    <span
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        Heure d'arrivée :{" "}
                                                    </span>
                                                    10h
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    <span
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        Type de contrat :{" "}
                                                    </span>
                                                    1/2 PB
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    <span
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        Nombre de membres
                                                        engagés :
                                                    </span>{" "}
                                                    5
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </Layout>
    );
}

export default PrestationsPage;
