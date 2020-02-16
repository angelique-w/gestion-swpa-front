import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    IconButton,
    InputLabel,
    Select
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Layout from "../Layout/Layout";

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor: theme.palette.secondary.main
        // width: "100%"
    },
    card: {
        // backgroundColor: theme.palette.primary.main
    },
    // containerTitle: {
    //     backgroundColor: theme.palette.primary.main
    // }
    formControl: {
        margin: theme.spacing(3)
    },
    selectRole: {
        margin: theme.spacing(1),
        minWidth: 200
    }
}));

function FichePrestation() {
    const classes = useStyles();
    const [presence, setPresence] = useState("");
    const [accompagnants, setAccompagnants] = useState("");
    const [role, setRole] = useState("");

    const handleChangePresence = event => {
        setPresence(event.target.value);
    };

    const handleChangeAccompagnants = event => {
        setAccompagnants(event.target.value);
    };

    const handleChangeRole = event => {
        setRole(event.target.value);
    };

    return (
        <Layout>
            <Box py={4} className={classes.containerTitle}>
                <Typography variant="h4" align="center">
                    Fiche prestation
                </Typography>
            </Box>
            <Box>
                <IconButton>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
            </Box>
            <Box my={5} mx={5}>
                <Grid>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        Ville
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        Date
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        Heure d'arrivée
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        Plus de détails...
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <FormLabel component="legend">
                            Déclarer ma présence
                        </FormLabel>
                        <RadioGroup
                            aria-label="presence"
                            name="presence"
                            value={presence}
                            onChange={handleChangePresence}
                        >
                            <Grid container>
                                <Grid item>
                                    <FormControlLabel
                                        value="present"
                                        control={<Radio />}
                                        label="Présent"
                                    />
                                </Grid>
                                <Grid item>
                                    {presence === "present" && (
                                        <FormControl
                                            className={classes.selectRole}
                                        >
                                            <InputLabel htmlFor="role">
                                                Présent en tant que ...
                                            </InputLabel>
                                            <Select
                                                native
                                                value={role}
                                                onChange={handleChangeRole}
                                                inputProps={{
                                                    name: "role",
                                                    id: "role"
                                                }}
                                            >
                                                <option value="" />
                                                <option value="piper">
                                                    Piper
                                                </option>
                                                <option value="bbb">bbb</option>
                                            </Select>
                                        </FormControl>
                                    )}
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                value="absent"
                                control={<Radio />}
                                label="Absent"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <FormLabel component="legend">
                            Viendrai-je accompagné(e) ?
                        </FormLabel>
                        <RadioGroup
                            aria-label="accompagnants"
                            name="accompagnants"
                            value={accompagnants}
                            onChange={handleChangeAccompagnants}
                        >
                            <FormControlLabel
                                value="oui"
                                control={<Radio />}
                                label="Oui"
                            />
                            <FormControlLabel
                                value="non"
                                control={<Radio />}
                                label="Non"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Box>
        </Layout>
    );
}

export default FichePrestation;
