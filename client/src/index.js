import React from "react";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers  from '../src/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { createRoot } from 'react-dom/client';

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App />
  </Provider>
);