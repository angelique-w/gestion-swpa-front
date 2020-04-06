import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Divider,
    Box,
    AppBar,
    Tabs,
    Tab,
    Paper,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import PropTypes from "prop-types";

import Layout from "../Layout/Layout";
import PrestationsList from "./PrestationsList";
import PrestationsManagement from "./PrestationsManagement";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.text,
    },
    paper: {
        width: "100%",
    },
}));

function PrestationsPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout>
            <div className={classes.root}>
                <Box py={5} className={classes.containerTitle}>
                    <Typography variant="h4" align="start">
                        Prestations
                    </Typography>
                    <Divider />
                </Box>
                <Box mb={5}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="Prestations"
                        >
                            <Tab
                                label="Prestations de l'année en cours"
                                {...a11yProps(0)}
                            />
                            <Tab
                                label="Gestion des prestations"
                                icon={<WorkIcon />}
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </AppBar>
                    <Paper className={classes.paper}>
                        <TabPanel value={value} index={0}>
                            <PrestationsList />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <PrestationsManagement />
                        </TabPanel>
                    </Paper>
                </Box>
            </div>
        </Layout>
    );
}

export default PrestationsPage;
