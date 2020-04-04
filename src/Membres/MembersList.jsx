import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        // maxHeight: 550,
    },
}));

const columns = [
    { id: "firstname", label: "Prénom", align: "left", minWidth: 130 },
    { id: "lastname", label: "Nom", align: "left", minWidth: 130 },
    {
        id: "numberTel",
        label: "Téléphone",
        minWidth: 150,
        align: "left",
    },
    {
        id: "mail",
        label: "E-mail",
        minWidth: 200,
        align: "left",
    },
    {
        id: "adress",
        label: "Adresse",
        minWidth: 130,
        align: "left",
    },
    {
        id: "role",
        label: "Rôle",
        minWidth: 130,
        align: "left",
    },
];

function MembersList() {
    const classes = useStyles();
    return (
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                    minWidth: column.minWidth,
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
                        1,
                    ].map(() => (
                        <TableRow hover tabIndex={-1} key={Math.random()}>
                            <TableCell key={Math.random()} align="left">
                                Angélique
                            </TableCell>
                            <TableCell key={Math.random()} align="left">
                                Wons
                            </TableCell>
                            <TableCell key={Math.random()} align="left">
                                06 06 06 06 06
                            </TableCell>
                            <TableCell key={Math.random()} align="left">
                                ang.wns@gmail.com
                            </TableCell>
                            <TableCell key={Math.random()} align="left">
                                Boucau
                            </TableCell>
                            <TableCell key={Math.random()} align="left">
                                elève piper
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MembersList;
