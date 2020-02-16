import React from "react";
import {
    makeStyles,
    Typography,
    Box,
    Button,
    Card,
    CardContent
} from "@material-ui/core";

import Layout from "../Layout/Layout";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 400,
        maxWidth: 800,
        margin: "auto"
    },
    card: {
        marginTop: 80
    }
}));

const columns = [
    { id: "lastname", label: "Nom", variant: "body1" },
    { id: "firstname", label: "Prénom", variant: "body1" },
    { id: "numberTel", label: "Numéro de téléphone", variant: "body1" },
    { id: "mail", label: "E-mail", variant: "body1" },
    { id: "adress", label: "Adresse", variant: "body1" },
    { id: "role", label: "Mon rôle au sein de l'association", variant: "body1" }
];

function MyAccountPage() {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Box py={4}>
                            <Typography variant="h4" align="center">
                                Mes informations
                            </Typography>
                        </Box>
                        <Box mb={5} mx={2}>
                            {columns.map(column => (
                                <Typography variant={column.variant}>
                                    {column.label} :
                                </Typography>
                            ))}
                        </Box>
                        <Box mb={5} textAlign="center">
                            <Button variant="contained" color="secondary">
                                Modifier mes informations
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}

export default MyAccountPage;
