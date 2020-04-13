import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Drawer,
    Divider,
    IconButton,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { removeUserAuth } from "../reducers/actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.text,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    linkMenu: {
        textDecoration: "none",
        color: theme.palette.primary.text,
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        height: "20px",
        ...theme.mixins.toolbar,
    },
    toolbarLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        height: "20px",
        backgroundColor: theme.palette.primary.main,
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
    buttonLogout: {
        margin: theme.spacing(1),
    },
}));

function Header({ children, removeUserAuth, isAuth }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    let history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push("/");
        }
    }, [isAuth]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        removeUserAuth();
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <div className={classes.bandHeader}></div>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" className={classes.title} noWrap>
                        Piperade SWPA
                    </Typography>

                    <Button
                        className={classes.button}
                        endIcon={<ExitToAppIcon />}
                        color="secondary"
                        size="large"
                        onClick={handleLogout}
                    >
                        Déconnexion
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.bandDrawer}></div>
                <div className={classes.toolbarLeft}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/prestations" className={classes.linkMenu}>
                        <ListItem button key="Prestations">
                            <ListItemIcon>
                                <EventIcon />
                            </ListItemIcon>
                            <ListItemText primary="Prestations" />
                        </ListItem>
                    </Link>
                    <Link to="/membres" className={classes.linkMenu}>
                        <ListItem button key="Membres">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Membres" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUserAuth: () => dispatch(removeUserAuth()),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuthReducer.isAuth,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
