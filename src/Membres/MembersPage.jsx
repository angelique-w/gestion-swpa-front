import React from "react";
import {
    Typography,
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    Paper,
    TableBody,
    TableCell,
    makeStyles
} from "@material-ui/core";

import Layout from "../Layout/Layout";

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    container: {
        maxHeight: 550
    }
});

const columns = [
    { id: "firstname", label: "Prénom", align: "left", minWidth: 130 },
    { id: "lastname", label: "Nom", align: "left", minWidth: 130 },
    {
        id: "numberTel",
        label: "Téléphone",
        minWidth: 150,
        align: "left"
    },
    {
        id: "mail",
        label: "E-mail",
        minWidth: 200,
        align: "left"
    },
    {
        id: "adress",
        label: "Adresse",
        minWidth: 130,
        align: "left"
    },
    {
        id: "role",
        label: "Rôle",
        minWidth: 130,
        align: "left"
    }
];

function MembersPage() {
    const classes = useStyles();
    return (
        <Layout>
            <Box py={4}>
                <Typography variant="h4" align="center">
                    Liste des membres
                </Typography>
            </Box>
            <Box mb={5}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1,
                                    1
                                ].map(() => (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={Math.random()}
                                    >
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            Angélique
                                        </TableCell>
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            Wons
                                        </TableCell>
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            06 06 06 06 06
                                        </TableCell>
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            ang.wns@gmail.com
                                        </TableCell>
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            Boucau
                                        </TableCell>
                                        <TableCell
                                            key={Math.random()}
                                            align="left"
                                        >
                                            elève piper
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </Layout>
    );
}

export default MembersPage;
