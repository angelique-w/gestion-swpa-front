import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import AdminPage from "./AdminPage/AdminPage";
import LoginPage from "./LoginPage/LoginPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
