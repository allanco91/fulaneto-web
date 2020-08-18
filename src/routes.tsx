import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { Empresa } from "./pages/Empresa";

const Routes: React.FC = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/empresa" component={Empresa} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    </>
);

export default Routes;