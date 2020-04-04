import React from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { forwardRef } from "react";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";

function ChangeMyDetails() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Prénom", field: "prenom" },
            { title: "Nom", field: "nom" },
            { title: "Téléphone", field: "telephone" },
            {
                title: "E-mail",
                field: "email",
            },
            {
                title: "Adresse",
                field: "adresse",
            },
            {
                title: "Rôle",
                field: "role",
            },
        ],
        data: [
            {
                prenom: "Angélique",
                nom: "Wons",
                telephone: "06 06 06 06 06",
                email: "ang-wns@gmail.com",
                adresse: "Boucau",
                role: "piper",
            },
        ],
    });

    const tableIcons = {
        Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Check {...props} ref={ref} />
        )),
        Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Clear {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
            <Edit {...props} ref={ref} />
        )),
    };

    return (
        <MaterialTable
            title="Modifier mes coordonnées"
            icons={tableIcons}
            columns={state.columns}
            data={state.data}
            editable={{
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
            }}
            options={{
                search: false,
                paging: false,
                draggable: false,
                sorting: false,
                headerStyle: {
                    color: "#fff",
                    backgroundColor: "#ff867f",
                },
            }}
        />
    );
}

export default ChangeMyDetails;
