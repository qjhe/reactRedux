import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter,
}from 'react-router-dom';

import Index from './js/view/index';
import About from './js/view/about';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import 'antd/dist/antd.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import configureStore from './store/configureStore';

class App extends Component{
    render(){
        return (
            <HashRouter>
                <div>
                    {/* <div>
                        <ul><li><Link to="/">首页</Link></li><li><Link to="/About">关于我们</Link></li></ul>
                    </div> */}
                    <Route exact path="/" component={Index} />
                    <Route path="/Index" component={Index} />
                    <Route path="/About" component={About} />
                </div>
            </HashRouter>
        );
    }
}

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next store', store.getState());
//     return result;
// };

// const store = createStore(rootReducer, {}, applyMiddleware(logger));
// const store = createStore(
//     rootReducer,
//     {},
//     applyMiddleware(thunk, promise())
// );
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
