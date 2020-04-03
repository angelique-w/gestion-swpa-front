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
    Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import logo_desk from "../Assets/logo_brouillard_desktop.jpg";
import logo from "../Assets/logo_brouillard.jpg";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(217, 217, 217, 0.8)",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
    },
    box: {
        backgroundColor: "rgba(217, 217, 217, 0.8)",
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
            backgroundImage: `url(${logo_desk})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 100%",
        },
    },
    titleConnexion: {
        textAlign: "center",
        paddingTop: 30,
        color: theme.palette.primary.dark,
    },
    card: {
        backgroundColor: "transparent",
        borderColor: "rgba(217, 217, 217, 0.8)",
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
        },
        // [theme.breakpoints.up("md")]: {},
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

function LoginPage() {
    const classes = useStyles();
    const [connexionValues, setConnexionValues] = React.useState({
        login: "",
        password: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
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

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <Typography
                            variant="h4"
                            className={classes.titleConnexion}
                        >
                            Authentification
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
                                <Button
                                    variant="contained"
                                    className={classes.btn}
                                    // color="secondary"
                                    size="large"
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

export default LoginPage;
