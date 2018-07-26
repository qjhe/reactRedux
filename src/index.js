import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter,
}from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Index from './js/view/index';
import About from './js/view/about';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';

class App extends Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/Index" component={Index} />
                    <Route path="/About" component={About} />
                </div>
            </HashRouter>
        );
    }
}

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
        <Provider store = { store }>
            <App />
        </Provider>, document.getElementById('root'));
  });
}

registerServiceWorker();
