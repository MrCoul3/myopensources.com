import React, {useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router, Route, Switch, NavLink, useLocation, useHistory} from "react-router-dom";
import TextReader from "./portfolio/Components/TextReader/TextReader";

ReactDOM.render(
    <React.StrictMode>
            <Router>
                <TextReader />
                {/*<App />*/}
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);