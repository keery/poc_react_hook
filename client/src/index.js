import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import routes from "./routing/routes";
import { renderRoutes } from 'react-router-config';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
                  { renderRoutes(routes) }
                </BrowserRouter>
                , document.getElementById('root'));

serviceWorker.unregister();
