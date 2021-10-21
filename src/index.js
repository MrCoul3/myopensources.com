import React, {useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router, Route, Switch, NavLink, useLocation, useHistory} from "react-router-dom";
import ReactAnimation from "./development/HorizontalGatesAnimation/ReactAnimation";
import CanvasGame from "./portfolio/Components/CanvasGame/CanvasGame";
import SVG from "./portfolio/Components/SVG/SVG";




ReactDOM.render(
    <React.StrictMode>
            <Router>
                {/*<SVG />*/}
                <App />
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);