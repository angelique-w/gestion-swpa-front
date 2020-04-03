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
} from "@material-ui/core";

import Layout from "../Layout/Layout";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.main,
        // width: "100%"
        color: theme.palette.primary.text,
    },
    card: {
        // backgroundColor: theme.palette.primary.main
    },
    // containerTitle: {
    //     backgroundColor: theme.palette.primary.main
    // }
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
                        {[0, 1, 2, 3, 4, 5].map(() => (
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardHeader
                                            title="Ville"
                                            subheader="Date"
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Box py={3} px={1}>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Ville
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Date
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Heure d'arrivée
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Type de contrat
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Nombre de membres engagés
                                                </Typography>
                                                <Box mt={3} textAlign="center">
                                                    <Typography
                                                        variant="body"
                                                        color="secondary"
                                                        component="p"
                                                    >
                                                        Clique sur la carte pour
                                                        renseigner ta présence
                                                        et avoir plus
                                                        d'informations
                                                    </Typography>
                                                </Box>
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
