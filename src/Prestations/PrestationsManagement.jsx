import React from "react";
import MaterialTable from "material-table";
import { Chip, makeStyles, Box } from "@material-ui/core";
import { forwardRef } from "react";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles((theme) => ({
    chip: {
        display: "flex",
        justifyContent: "flex-end",
    },
}));

function PrestationsManagement() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: "Ville", field: "ville" },
            { title: "Date", field: "date" },
            {
                title: "Heure arrivée",
                field: "heure_arrivee",
            },
            {
                title: "Heure départ (approximative)",
                field: "heure_depart",
            },
            {
                title: "Description de la prestation",
                field: "description",
            },

            {
                title: "Commentaires",
                field: "commentaires",
            },
            {
                title: "Type de contrat",
                field: "contrat",
            },
        ],
        data: [
            {
                ville: "Pau",
                date: "16 mars 2020",
                heure_arrivee: "10h",
                heure_depart: "16h",
                description:
                    "Occation du carnaval de la ville, prestation demandée pour défilé",
                commentaires: "repas avec autres musiciens",
                contrat: "PB complet",
            },
        ],
    });

    const tableIcons = {
        Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <AddBoxIcon
                {...props}
                ref={ref}
                color="secondary"
                fontSize="large"
            />
        )),
        Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Check {...props} ref={ref} />
        )),
        Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Clear {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Edit {...props} ref={ref} />
        )),
        Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <DeleteOutline {...props} ref={ref} />
        )),
    };

    return (
        <>
            <Box className={classes.chip} mb={3}>
                <Chip variant="outlined" color="primary" label="Admin" />
            </Box>
            <MaterialTable
                title="Gestion des prestations"
                icons={tableIcons}
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
                options={{
                    search: false,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                        color: "#fff",
                        backgroundColor: "#4d78ab",
                    },
                }}
            />
        </>
    );
}

export default PrestationsManagement;
