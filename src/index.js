import React, {useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router, Route, Switch, NavLink, useLocation, useHistory} from "react-router-dom";
import ReactAnimation from "./development/HorizontalGatesAnimation/ReactAnimation";

ReactDOM.render(
    <React.StrictMode>
            <Router>
                {/*<ReactAnimation/>*/}
                <App />
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


