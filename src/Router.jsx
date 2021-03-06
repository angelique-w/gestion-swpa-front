import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage";
import PrestationsPage from "./Prestations/PrestationsPage";
import MembersPage from "./Membres/MembersPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/prestations" component={PrestationsPage} />
                <Route path="/membres" component={MembersPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
