import React from "react";
import { Grid } from "@material-ui/core";

import PrestationCard from "./PrestationCard";

function PrestationList() {
    return (
        <Grid container spacing={2}>
            {[0, 1, 2, 3, 4, 5].map(() => (
                <PrestationCard />
            ))}
        </Grid>
    );
}

export default PrestationList;
