import React from "react";
import {
    Typography,
    Box,
    Paper,
    makeStyles,
    Divider,
    AppBar,
    Tabs,
    Tab,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import PropTypes from "prop-types";

import Layout from "../Layout/Layout";
import MembersList from "./MembersList";
import ChangeMyDetails from "./ChangeMyDetails";
import MembersManagement from "./MembersManagement";

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

function MembersPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Layout>
            <div className={classes.root}>
                <Box py={4}>
                    <Typography variant="h4" align="start">
                        Membres
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
                            aria-label="members"
                        >
                            <Tab label="Liste des membres" {...a11yProps(0)} />
                            <Tab
                                label="Modifer mes coordonnées"
                                {...a11yProps(1)}
                            />
                            <Tab
                                label="Gestion des membres"
                                icon={<WorkIcon />}
                                {...a11yProps(2)}
                            />
                        </Tabs>
                    </AppBar>
                    <Paper className={classes.paper}>
                        <TabPanel value={value} index={0}>
                            <MembersList />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <ChangeMyDetails />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <MembersManagement />
                        </TabPanel>
                    </Paper>
                </Box>
            </div>
        </Layout>
    );
}

export default MembersPage;
