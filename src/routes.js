import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Index from './js/view/index';
import About from './js/view/about';

export default (
    <HashRouter>
        <div className="container">
            <Route exact path="/" component={Index} />
            <Route path="/Index" component={Index} />
            <Route path="/About" component={About} />
        </div>
    </HashRouter>
);