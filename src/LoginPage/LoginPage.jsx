import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";
import { connect } from "react-redux";
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
    Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import logo_desk from "../Assets/logo_brouillard_desktop.jpg";
import logo from "../Assets/logo_brouillard.jpg";
import apiUrl from "../utils/apiCall";

import { storeUserAuth } from "../reducers/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(245, 245, 245)",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
    },
    box: {
        width: "960px",
        height: "639px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 6,
        boxShadow: "10px 10px 44px 0px rgba(0,0,0,0.64)",

        [theme.breakpoints.down("sm")]: {
            width: "90vw",
            height: "450px",
        },
        [theme.breakpoints.up("md")]: {
            backgroundColor: "rgba(255, 255, 255)",
            backgroundImage: `url(${logo_desk})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 100%",
        },
    },
    card: {
        paddingTop: 30,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgba(217, 217, 217, 0.8)",
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 70,
            width: "100%",
            height: "100%",
        },
    },
    btn: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        marginTop: 40,
    },
}));

function LoginPage({ storeUserAuth, isAuth }) {
    const classes = useStyles();
    const [connexionValues, setConnexionValues] = useState({
        login: "",
        password: "",
        showPassword: false,
    });

    let history = useHistory();

    useEffect(() => {
        if (isAuth) {
            history.push("/prestations");
        }
    }, [isAuth]);

    const handleChangeConnexionValues = (prop) => (event) => {
        setConnexionValues({ ...connexionValues, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setConnexionValues({
            ...connexionValues,
            showPassword: !connexionValues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const pseudo = connexionValues.login;
            const password = connexionValues.password;
            const getResData = await axios.get(
                `http://localhost:8000/auth/?pseudo=${pseudo}&password=${password}`
            );

            const userData = getResData.data;

            storeUserAuth(userData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <Box my={5} mx={2}>
                            <TextField
                                id="standard-basic"
                                label="Identifiant"
                                value={connexionValues.login}
                                onChange={handleChangeConnexionValues("login")}
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
                                    onChange={handleChangeConnexionValues(
                                        "password"
                                    )}
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
                                <Button
                                    variant="contained"
                                    className={classes.btn}
                                    size="large"
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    Se connecter
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeUserAuth: (user) => dispatch(storeUserAuth(user)),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuthReducer.isAuth,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
