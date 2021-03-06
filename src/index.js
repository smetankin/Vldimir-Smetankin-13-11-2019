import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";
import logger from 'redux-logger';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
