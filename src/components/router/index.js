import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../app/index';
import Detail from '../detail/index';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/recipe/:id" component={Detail} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Router;
