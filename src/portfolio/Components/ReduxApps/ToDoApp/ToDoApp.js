import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import './ToDoApp.scss';
import {Provider} from "react-redux";
import store from "./store";


export default function ReduxToDoApp() {
    return (
        <Provider store={store}>
            <section className='text-center' id='ReduxToDo'>
                <Header/>
                <ToDoList/>
            </section>
        </Provider>

    );
}