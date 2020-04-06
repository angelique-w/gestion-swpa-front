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

function MembersManagement() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: "Prénom", field: "prenom" },
            { title: "Nom", field: "nom" },
            {
                title: "Téléphone",
                field: "numberTel",
            },
            {
                title: "E-mail",
                field: "mail",
            },
            {
                title: "Adresse",
                field: "adress",
            },

            {
                title: "Rôle musical",
                field: "role_musical",
            },
            {
                title: "Fonction administrative",
                field: "fonction_administrative",
            },
        ],
        data: [
            {
                prenom: "Angélique",
                nom: "Wons",
                numberTel: "06 06 06 06 06 06",
                mail: "ang.wns@gmail.com",
                adress: "Boucau",
                role_musical: "piper",
                fonction_administrative: "webmaster",
            },
            {
                prenom: "Angélique",
                nom: "Wons",
                numberTel: "06 06 06 06 06 06",
                mail: "ang.wns@gmail.com",
                adress: "Boucau",
                role_musical: "piper",
                fonction_administrative: "webmaster",
            },
            {
                prenom: "Angélique",
                nom: "Wons",
                numberTel: "06 06 06 06 06 06",
                mail: "ang.wns@gmail.com",
                adress: "Boucau",
                role_musical: "piper",
                fonction_administrative: "webmaster",
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
                title="Gestion des membres"
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

export default MembersManagement;
