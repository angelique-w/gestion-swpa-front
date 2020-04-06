import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    CardContent,
    Grid,
    Box,
    Button,
    Modal,
    Fade,
    Backdrop,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btnParticipants: {
        color: theme.palette.primary.main,
        marginBottom: "20px",
    },
    btnRetour: {
        marginTop: "10px",
        backgroundColor: theme.palette.info.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.info.light,
        },
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflowX: "auto",
        overflowY: "visible",
    },

    tableContainer: {
        // overflowX: "scroll",
        // overflowY: "scroll",
    },
    tableItem: {
        margin: theme.spacing(2),
    },
}));

function PrestationDetails() {
    const classes = useStyles();
    const [displayParticipantsList, setDisplayParticipantsList] = useState(
        false
    );

    const handleDisplayListPartipants = () => {
        setDisplayParticipantsList(true);
    };

    const handleCloseListParticipants = () => {
        setDisplayParticipantsList(false);
    };

    const handleCloseDetails = () => {};

    return (
        <CardContent>
            <Box py={3} px={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>Description : </span>
                    Occation du carnaval de la ville, prestation demandée pour
                    défilé
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>Commentaires : </span>
                    repas avec autres musiciens
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>Heure d'arrivée : </span>
                    10h
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>
                        Heure approximative de départ :
                    </span>{" "}
                    16h
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>Type de contrat : </span>
                    1/2 PB
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>
                        Nombre de membres engagés :
                    </span>{" "}
                    5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.subtitle}>
                        Voitures covoiturage :
                    </span>{" "}
                    André, Andrew
                </Typography>
            </Box>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        className={classes.btnParticipants}
                        onClick={handleDisplayListPartipants}
                    >
                        Voir la fiche des présences
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={displayParticipantsList}
                        onClose={handleCloseListParticipants}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={displayParticipantsList}>
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title" align="center">
                                    Sortie Pau 16 mars 2020
                                </h2>
                                <Grid
                                    container
                                    direction="row"
                                    wrap="nowrap"
                                    spacing={2}
                                    // className={classes.tableContainer}
                                >
                                    <Grid item>
                                        <TableContainer
                                        // className={classes.tableContainer}
                                        >
                                            <Table
                                                aria-label="présences sortie"
                                                // className={classes.tableItem}
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Pipes
                                                        </TableCell>
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
                                                    ].map((row) => (
                                                        <TableRow>
                                                            <TableCell align="right">
                                                                Prénom
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                Oui
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item>
                                        <TableContainer>
                                            <Table aria-label="présences sortie">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Snare
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {[1, 1, 1].map((row) => (
                                                        <TableRow>
                                                            <TableCell align="right">
                                                                Prénom
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                Oui
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item>
                                        <TableContainer>
                                            <Table aria-label="présences sortie">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Tenor
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {[1, 1, 1].map((row) => (
                                                        <TableRow>
                                                            <TableCell align="right">
                                                                Prénom
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                Oui
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item>
                                        <TableContainer>
                                            <Table aria-label="présences sortie">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Bass
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {[1, 1, 1].map((row) => (
                                                        <TableRow>
                                                            <TableCell align="right">
                                                                Prénom
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                Oui
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item>
                                        <TableContainer>
                                            <Table aria-label="présences sortie">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Flag
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {[1, 1, 1].map((row) => (
                                                        <TableRow>
                                                            <TableCell align="right">
                                                                Prénom
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                Oui
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item>
                                        <TableContainer>
                                            <Table aria-label="présences sortie">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={3}
                                                        >
                                                            Accompagnants
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell align="right">
                                                            2
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.btnRetour}
                                        onClick={handleCloseListParticipants}
                                    >
                                        Retour
                                    </Button>
                                </Grid>
                            </div>
                        </Fade>
                    </Modal>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={classes.btnRetour}
                        onClick={handleCloseDetails}
                    >
                        Retour
                    </Button>
                </Grid>
            </Grid>
        </CardContent>
    );
}

export default PrestationDetails;
