import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    TextField,
    Box,
    Typography,
    Button
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Layout from "../Layout/Layout";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 350,
        maxWidth: 400,
        margin: "auto"
    },
    titleConnexion: {
        textAlign: "center",
        paddingTop: 30
    },
    card: {
        marginTop: 80
    }
}));

function LoginPage() {
    const classes = useStyles();
    const [connexionValues, setConnexionValues] = React.useState({
        login: "",
        password: "",
        showPassword: false
    });

    const handleChange = prop => event => {
        setConnexionValues({ ...connexionValues, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setConnexionValues({
            ...connexionValues,
            showPassword: !connexionValues.showPassword
        });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Layout>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            variant="h4"
                            className={classes.titleConnexion}
                        >
                            Connexion
                        </Typography>
                        <Box my={5} mx={2}>
                            <TextField
                                id="standard-basic"
                                label="Identifiant"
                                value={connexionValues.login}
                                onChange={handleChange("login")}
                                fullWidth
                            />
                        </Box>
                        <Box my={5} mx={2}>
                            <FormControl
                                className={clsx(
                                    classes.margin,
                                    classes.textField
                                )}
                                fullWidth
                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Mot de passe
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={
                                        connexionValues.showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={connexionValues.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {connexionValues.showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Box my={5} style={{ textAlign: "center" }}>
                                <Button variant="contained" color="secondary">
                                    Se connecter
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}

export default LoginPage;
