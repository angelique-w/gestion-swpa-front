import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    makeStyles,
    withStyles,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#4d78ab",
        color: theme.palette.common.white,
        fontSize: 14,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
        label: "Rôle musical",
        minWidth: 130,
        align: "left",
    },
    {
        id: "function admin",
        label: "Fonction amdinistrative",
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
                            <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                    minWidth: column.minWidth,
                                }}
                            >
                                {column.label}
                            </StyledTableCell>
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
                            <StyledTableCell key={Math.random()} align="left">
                                Angélique
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                Wons
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                06 06 06 06 06
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                ang.wns@gmail.com
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                Boucau
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                elève piper
                            </StyledTableCell>
                            <StyledTableCell key={Math.random()} align="left">
                                webmaster
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MembersList;
