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
    Select,
    TextField,
    FormGroup,
    Checkbox,
    Button
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
    select: {
        // margin: theme.spacing(1),
        marginBottom: theme.spacing(5),
        minWidth: 250
    }
}));

function FichePrestation() {
    const classes = useStyles();
    const [presence, setPresence] = useState("");
    const [accompagnants, setAccompagnants] = useState("");
    const [role, setRole] = useState("");
    const [NbAccompagnants, setNbAccompagnants] = useState(0);
    const [voiture, setVoiture] = useState(false);

    const handleChangePresence = event => {
        setPresence(event.target.value);
    };

    const handleChangeAccompagnants = event => {
        setAccompagnants(event.target.value);
    };

    const handleChangeRole = event => {
        setRole(event.target.value);
    };

    const handleChangeNbAccompagnants = event => {
        setNbAccompagnants(event.target.value);
    };

    const handleChangeVoiture = event => {
        setVoiture(!voiture);
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
            <Box my={5} mx={5} width="100%">
                <Box mx={3}>
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
                </Box>
                <Grid
                    // xs={6}
                    container
                    // direction="column"
                    // justify="center"
                    // alignItems="center"
                >
                    <Grid item xs={12}>
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
                                <Grid container direction="column">
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
                                                className={classes.select}
                                            >
                                                <InputLabel
                                                    shrink
                                                    htmlFor="role"
                                                >
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
                                                    <option value="bbb">
                                                        bbb
                                                    </option>
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
                    <Grid item xs={12}>
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
                                <Grid container direction="column">
                                    <Grid item>
                                        <FormControlLabel
                                            value="oui"
                                            control={<Radio />}
                                            label="Oui"
                                        />
                                    </Grid>
                                    <Grid item>
                                        {accompagnants === "oui" && (
                                            <TextField
                                                id="standard-number"
                                                label="Number"
                                                type="number"
                                                value={NbAccompagnants}
                                                onChange={
                                                    handleChangeNbAccompagnants
                                                }
                                                inputProps={{
                                                    min: "0",
                                                    max: "5",
                                                    step: "1"
                                                }}
                                                className={classes.select}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                                <FormControlLabel
                                    value="non"
                                    control={<Radio />}
                                    label="Non"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={voiture}
                                        onChange={handleChangeVoiture}
                                        value="voiture"
                                    />
                                }
                                label="Je prends ma voiture pour covoiturer"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
            <Box textAlign="center" mb={5}>
                <Button variant="contained" color="secondary">
                    Valider
                </Button>
            </Box>
        </Layout>
    );
}

export default FichePrestation;
