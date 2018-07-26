import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router }from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

import routes from './routes';

import 'antd/dist/antd.css';

class App extends Component{
    render(){
        return (
            <Router routes={ routes }>
                { routes }
            </Router>
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
