import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import AdminPage from "./AdminPage/AdminPage";
import LoginPage from "./LoginPage/LoginPage";
import PrestationsPage from "./Prestations/PrestationsPage";
import MyAccountPage from "./MyAccount/MyAccountPage";
import MembersPage from "./Membres/MembersPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/prestations" component={PrestationsPage} />
                <Route path="/membres" component={MembersPage} />
                <Route path="/monCompte" component={MyAccountPage} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
