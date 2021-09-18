import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import GameApp from "./portfolio/GameKeepARouble/GameApp";
import Test from "./Test/Test";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test/>
  </React.StrictMode>,
  document.getElementById('root')
);


